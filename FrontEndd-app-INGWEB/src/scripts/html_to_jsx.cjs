const fs = require("fs");
const path = require("path");

function convertHtmlToJsx(html) {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let content = bodyMatch ? bodyMatch[1] : html;
  
  // Extract script tags to ignore them
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // Convert class to className
  content = content.replace(/class="/g, "className=\"");
  
  // Convert for to htmlFor
  content = content.replace(/for="/g, "htmlFor=\"");
  
  // Fix inline styles
  content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(";").forEach(rule => {
      const parts = rule.split(":");
      if (parts.length === 2) {
        const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = parts[1].trim();
      }
    });
    return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(", ")}}}`;
  });

  // Make empty tags self-closing
  content = content.replace(/<(input|img|br|hr|meta|link)([^>]*[^\/])>/g, "<$1$2 />");
  
  // Remove onclick, onsubmit etc
  content = content.replace(/\s+on[a-z]+="[^"]*"/g, "");
  
  // Replace svg fill-rule and clip-rule
  content = content.replace(/fill-rule="/g, "fillRule=\"");
  content = content.replace(/clip-rule="/g, "clipRule=\"");
  content = content.replace(/stroke-width="/g, "strokeWidth=\"");
  content = content.replace(/stroke-linecap="/g, "strokeLinecap=\"");
  content = content.replace(/stroke-linejoin="/g, "strokeLinejoin=\"");
  
  // HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, "");

  // Fix SVG tags that might be missing closing or have bad attributes
  // Or simply remove unescaped entities
  content = content.replace(/&/g, "&amp;").replace(/&amp;amp;/g, "&amp;");
  
  return content;
}

const map = {
  "Login": "iniciar_sesi_n_clinical_enterprise_blue",
  "Dashboard": "dashboard_resumen",
  "Appointments": "lista_de_citas",
  "NewAppointment": "nueva_cita_formulario",
  "AppointmentDetail": "detalle_de_cita",
  "AdminUsers": "gesti_n_de_usuarios_admin"
};

for (const [component, dir] of Object.entries(map)) {
  const htmlPath = path.join("..", "stitch_custom_web_page_generator", dir, "code.html");
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, "utf8");
    const jsxContent = convertHtmlToJsx(html);
    
    const componentCode = `import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ${component}() {
  const navigate = useNavigate();
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;
    fs.writeFileSync(path.join("./src/pages", `${component}.jsx`), componentCode);
    console.log(`Generated ${component}.jsx`);
  } else {
    console.log(`Missing ${htmlPath}`);
  }
}

