const fs = require("fs");
const path = require("path");

const files = ["Dashboard.jsx", "Appointments.jsx", "NewAppointment.jsx", "AppointmentDetail.jsx", "AdminUsers.jsx"];

files.forEach(f => {
  const p = path.join("./src/pages", f);
  let content = fs.readFileSync(p, "utf8");
  
  // replace <a data-path="X" ...> with <Link to="X" ...>
  content = content.replace(/<a([^>]+)data-path="([^"]+)"([^>]*)>/g, (match, p1, p2, p3) => {
    let toPath = "";
    if (p2 === "login") toPath = "/login";
    else if (p2 === "resumen") toPath = "/dashboard";
    else if (p2 === "citas") toPath = "/appointments";
    else if (p2 === "nueva-cita") toPath = "/appointments/new";
    else if (p2 === "usuarios") toPath = "/admin/users";
    else toPath = "#";
    
    // remove href="#"
    let newAttr = p1 + p3;
    newAttr = newAttr.replace(/\s*href="[^"]*"\s*/, " ");
    
    return `<Link to="${toPath}" ${newAttr}>`;
  });
  
  content = content.replace(/<\/a>/g, "</Link>");
  
  // Fix the encoding issues we saw:
  content = content.replace(/Gestin/g, "Gestión");
  content = content.replace(/clnica/g, "clínica");
  content = content.replace(/Clnicas/g, "Clínicas");
  content = content.replace(/m?dica/g, "médica");
  content = content.replace(/M?tricas/g, "Métricas");
  content = content.replace(/m?dico/g, "médico");
  content = content.replace(/Configuracin/g, "Configuración");
  content = content.replace(/actualizacin/g, "actualización");
  content = content.replace(/sesin/g, "sesión");
  content = content.replace(/Contrasea/g, "Contraseña");
  content = content.replace(/Olvid?/g, "Olvidé");
  content = content.replace(/Luca/g, "Lucía");
  content = content.replace(/operacin/g, "operación");
  content = content.replace(/ao/g, "año");
  
  fs.writeFileSync(p, content);
});
console.log("Links fixed");

