const fs = require("fs");
const html = fs.readFileSync("../stitch_custom_web_page_generator/iniciar_sesi_n_clinical_enterprise_blue/code.html", "utf8");
const match = html.match(/tailwind\.config = (\{[\s\S]*?\})\s*<\/script>/);
if (match) {
  const config = eval("(" + match[1] + ")");
  let css = "@import \"tailwindcss\";\n\n@theme {\n";
  const colors = config.theme.extend.colors;
  for (const [k, v] of Object.entries(colors)) {
    css += `  --color-${k}: ${v};\n`;
  }
  const fonts = config.theme.extend.fontFamily;
  for (const [k, v] of Object.entries(fonts)) {
    css += `  --font-${k}: ${v.map(f => f.includes(" ") ? `\"${f}\"` : f).join(", ")};\n`;
  }
  const spacing = config.theme.extend.spacing;
  for (const [k, v] of Object.entries(spacing)) {
    css += `  --spacing-${k}: ${v};\n`;
  }
  const radius = config.theme.extend.borderRadius;
  for (const [k, v] of Object.entries(radius)) {
    if(k === "DEFAULT") css += `  --radius: ${v};\n`;
    else css += `  --radius-${k}: ${v};\n`;
  }
  
  css += "}\n\n@layer base {\n  html,body{margin:0;padding:0;}\n  body{overscroll-behavior:none;}\n  main > :first-child{margin-top:0!important;}\n  main > :last-child{margin-bottom:0!important;}\n  ::-webkit-scrollbar{display:none;}\n}\n";
  
  let utility = "@layer utilities {\n";
  const fontSize = config.theme.extend.fontSize;
  for (const [k, v] of Object.entries(fontSize)) {
    utility += `  .text-${k} {\n    font-size: ${v[0]};\n    line-height: ${v[1].lineHeight};\n`;
    if(v[1].fontWeight) utility += `    font-weight: ${v[1].fontWeight};\n`;
    if(v[1].letterSpacing) utility += `    letter-spacing: ${v[1].letterSpacing};\n`;
    utility += `  }\n`;
  }
  utility += "}\n";
  css += utility;

  fs.writeFileSync("./src/index.css", css);
  console.log("index.css generated");
} else {
  console.log("no match");
}
