import { readFile } from "node:fs/promises";

const files = ["index.html"];
let failed = false;

for (const file of files) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const checks = {
    antiFouc: html.indexOf("localStorage.getItem('inema.prefs')") < html.indexOf("cdn.tailwindcss.com"),
    courseMeta: html.includes('meta name="inema-course" content="webmcp-zero-expert"'),
    manifest: html.includes("data-inema-manifest"),
    inemaClub: html.includes("https://inema.club"),
    journey: html.includes("data-inema-journey-open"),
    appearance: html.includes("data-inema-appearance-toggle"),
    svg: html.includes('role="img"') && html.includes('class="w-full h-auto"'),
    init: html.includes("INEMA.init"),
    readiness: html.includes("https://webmcp.inema.pro/")
  };
  const missing = Object.entries(checks).filter(([, ok]) => !ok).map(([name]) => name);
  if (missing.length) {
    failed = true;
    console.error(`${file}: faltando ${missing.join(", ")}`);
  } else {
    console.log(`${file}: estrutura obrigatória OK`);
  }
}

if (failed) process.exit(1);
