import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { analyzeReadiness } from "./readiness.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  });
  response.end(JSON.stringify(body));
}

async function readBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 32_000) throw new Error("A solicitação excede o limite permitido.");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

async function serveStatic(pathname, response) {
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const safePath = normalize(relative).replace(/^(\.\.(\/|\\|$))+/, "");
  let filePath = join(root, safePath);
  try {
    const info = await stat(filePath);
    if (info.isDirectory()) filePath = join(filePath, "index.html");
    const data = await readFile(filePath);
    response.writeHead(200, {
      "content-type": types[extname(filePath)] || "application/octet-stream",
      "cache-control": extname(filePath) === ".html" ? "no-cache" : "public, max-age=3600",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin"
    });
    response.end(data);
  } catch {
    sendJson(response, 404, { ok: false, error: "Página não encontrada." });
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (request.method === "POST" && url.pathname === "/api/readiness") {
      const body = await readBody(request);
      const report = await analyzeReadiness(String(body.url || ""));
      sendJson(response, 200, { ok: true, report });
      return;
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { ok: false, error: "Método não permitido." });
      return;
    }
    await serveStatic(decodeURIComponent(url.pathname), response);
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message || "Falha inesperada." });
  }
});

server.listen(port, host, () => {
  console.log(`Formação WebMCP disponível em http://${host}:${port}`);
});

