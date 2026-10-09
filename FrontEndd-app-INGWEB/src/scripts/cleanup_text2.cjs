const fs = require("fs");
const path = require("path");

const files = ["Dashboard.jsx", "Appointments.jsx", "NewAppointment.jsx", "AppointmentDetail.jsx", "AdminUsers.jsx", "Login.jsx"];

files.forEach(f => {
  const p = path.join("./src/pages", f);
  let content = fs.readFileSync(p, "utf8");
  
  // Replace the remaining messed up unicode characters
  content = content.replace(/m\u00E9m\uFFFDdica/g, "médica");
  content = content.replace(/m\u00E9m\uFFFDdico/g, "médico");
  content = content.replace(/Olvid\u00EF\u00BF\u00BD mi/g, "Olvidé mi");
  content = content.replace(/Olvid\uFFFD\u01F8/g, "Olvidé");
  content = content.replace(/Olvid\uFFFD\u02F8/g, "Olvidé");
  content = content.replace(/Olvid?/g, "Olvidé");
  content = content.replace(/Olvid.*mi/g, "Olvidé mi");
  content = content.replace(/mm\?dica/g, "médica");
  content = content.replace(/mm\?dico/g, "médico");
  content = content.replace(/m?mdico/g, "médico");
  content = content.replace(/m?mdica/g, "médica");
  content = content.replace(/mémdico/g, "médico");
  content = content.replace(/mémdica/g, "médica");
  content = content.replace(/Contrasea/g, "Contraseña");
  content = content.replace(/sesin/g, "sesión");
  content = content.replace(/Gestin/g, "Gestión");
  content = content.replace(/Configuracin/g, "Configuración");
  content = content.replace(/Luca/g, "Lucía");
  content = content.replace(/actualizacin/g, "actualización");
  content = content.replace(/clnico/g, "clínico");
  content = content.replace(/clnica/g, "clínica");

  fs.writeFileSync(p, content);
});
console.log("Cleanup 2 done");

