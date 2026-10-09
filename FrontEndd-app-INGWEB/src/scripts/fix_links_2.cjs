const fs = require("fs");
const path = require("path");

const files = ["Dashboard.jsx", "Appointments.jsx", "NewAppointment.jsx", "AppointmentDetail.jsx", "AdminUsers.jsx", "Login.jsx"];

files.forEach(f => {
  const p = path.join("./src/pages", f);
  let content = fs.readFileSync(p, "utf8");
  
  // replace <a href="X" to <Link to="X"
  // since we already have </Link>, let just change <a to <Link and href= to to=
  content = content.replace(/<a([^>]*)href="([^"]*)"([^>]*)>/gi, "<Link$1to=\"$2\"$3>");
  // there might be some remaining </a> if we skipped any
  content = content.replace(/<\/a>/gi, "</Link>");
  
  fs.writeFileSync(p, content);
});
console.log("Links fixed completely");

