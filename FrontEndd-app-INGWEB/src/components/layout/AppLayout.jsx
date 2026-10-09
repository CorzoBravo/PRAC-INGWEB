import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Shell de las vistas autenticadas: Sidebar + Topbar + contenido (<main>).
export default function AppLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenu={() => setMenuOpen(true)} />
        {children}
      </div>
    </>
  );
}
