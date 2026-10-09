const fs = require("fs");
const path = require("path");

const files = ["Dashboard.jsx", "Appointments.jsx", "NewAppointment.jsx", "AppointmentDetail.jsx", "AdminUsers.jsx", "Login.jsx"];

files.forEach(f => {
  const p = path.join("./src/pages", f);
  let content = fs.readFileSync(p, "utf8");
  
  content = content.replace(/m?mdico/g, "médico");
  content = content.replace(/m?mdicas/g, "médicas");
  content = content.replace(/mm\?dico/g, "médico");
  content = content.replace(/Gestin/g, "Gestión");
  content = content.replace(/sesin/g, "sesión");
  content = content.replace(/Configuracin/g, "Configuración");
  content = content.replace(/Luca/g, "Lucía");
  content = content.replace(/m?dica/g, "médica");
  content = content.replace(/m?dico/g, "médico");
  content = content.replace(/m?dicas/g, "médicas");
  content = content.replace(/m?tricas/gi, "métricas");
  content = content.replace(/operacin/g, "operación");
  content = content.replace(/clnico/g, "clínico");
  content = content.replace(/Clnicas/g, "Clínicas");
  content = content.replace(/clnica/g, "clínica");
  content = content.replace(/Contrasea/g, "Contraseña");
  content = content.replace(/\?\?\?\?\?\?\?\?/g, "••••••••");
  content = content.replace(/Olvid?/g, "Olvidé");
  content = content.replace(/actualizacin/g, "actualización");

  fs.writeFileSync(p, content);
});
console.log("Cleanup done");

