const fs = require("fs");
const path = require("path");

const files = ["Dashboard.jsx", "Appointments.jsx", "NewAppointment.jsx", "AppointmentDetail.jsx", "AdminUsers.jsx", "Login.jsx"];

files.forEach(f => {
  const p = path.join("./src/pages", f);
  let content = fs.readFileSync(p, "utf8");
  
  // The  character is \uFFFD
  content = content.replace(/m\uFFFDdica/g, "médica");
  content = content.replace(/m\uFFFDdico/g, "médico");
  content = content.replace(/m\uFFFDm\uFFFDdico/g, "médico");
  content = content.replace(/m\uFFFDm\uFFFDdica/g, "médica");
  content = content.replace(/mem\uFFFDdico/g, "médico");
  content = content.replace(/Olvid\uFFFD mi/g, "Olvidé mi");
  content = content.replace(/Olvid\uFFFD/g, "Olvidé");
  content = content.replace(/sesi\uFFFDn/g, "sesión");
  content = content.replace(/Gesti\uFFFDn/g, "Gestión");
  content = content.replace(/Configuraci\uFFFDn/g, "Configuración");
  content = content.replace(/Luc\uFFFDa/g, "Lucía");
  content = content.replace(/actualizaci\uFFFDn/g, "actualización");
  content = content.replace(/cl\uFFFDnico/g, "clínico");
  content = content.replace(/cl\uFFFDnica/g, "clínica");
  content = content.replace(/Cl\uFFFDnicas/g, "Clínicas");
  content = content.replace(/Contrase\uFFFDa/g, "Contraseña");
  content = content.replace(/operaci\uFFFDn/g, "operación");
  content = content.replace(/a\uFFFDo/g, "año");

  // Fix some variations
  content = content.replace(/mdica/g, "médica");
  content = content.replace(/mdico/g, "médico");

  fs.writeFileSync(p, content);
});
console.log("Cleanup 3 done");

