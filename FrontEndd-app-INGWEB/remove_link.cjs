const fs = require("fs");
let c = fs.readFileSync("./src/pages/Login.jsx", "utf8");
c = c.replace(/\{\/\* No existe endpoint[\s\S]*?<\/button>/, "");
fs.writeFileSync("./src/pages/Login.jsx", c);

