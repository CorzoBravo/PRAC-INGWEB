import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const ROLE_LABEL = { ADMIN: "Administrador", MEDICO: "Médico", PACIENTE: "Paciente" };

const SECTIONS = [
  {
    title: "Principal",
    items: [
      { to: "/dashboard", icon: "grid_view", label: "Resumen", match: (p) => p === "/dashboard" },
      {
        to: "/appointments",
        icon: "calendar_today",
        label: "Citas",
        match: (p) => p.startsWith("/appointments") && p !== "/appointments/new",
      },
      {
        to: "/appointments/new",
        icon: "event_available",
        label: "Nueva cita",
        roles: ["ADMIN", "MEDICO"],
        match: (p) => p === "/appointments/new",
      },
    ],
  },
  {
    title: "Gestión",
    roles: ["ADMIN"],
    items: [{ to: "/admin/users", icon: "group", label: "Usuarios", match: (p) => p.startsWith("/admin/users") }],
  },
];

const ACTIVE = "bg-[#ebf3fe] text-[#0466c8] font-medium border-[#0466c8]";
const IDLE = "text-on-surface-variant hover:bg-[#ebf3fe]/60 hover:text-[#0466c8] border-transparent";

export default function Sidebar({ open, onClose }) {
  const { pathname } = useLocation();
  const { user, role, logout } = useAuth();

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-midnight-navy/40 z-40 lg:hidden" onClick={onClose} aria-hidden="true" />
      )}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-surface border-r border-[#979DAC]/30 z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Navegación principal"
      >
        <div className="flex flex-col">
          <div className="h-16 flex items-center gap-3 px-space-lg border-b border-[#979DAC]/30">
            <img src="/logo.svg" alt="" className="h-8 w-8" />
            <span className="font-title-section text-title-section text-midnight-navy font-bold tracking-tight">
              Sistema Clínicas
            </span>
          </div>
          <nav className="flex flex-col gap-6 py-space-lg">
            {SECTIONS.filter((s) => !s.roles || s.roles.includes(role)).map((section) => (
              <div key={section.title} className="flex flex-col gap-1">
                <span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">
                  {section.title}
                </span>
                {section.items
                  .filter((i) => !i.roles || i.roles.includes(role))
                  .map((item) => {
                    const active = item.match(pathname);
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center gap-3 px-space-lg py-2.5 transition-colors border-l-[3px] ${
                          active ? ACTIVE : IDLE
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span className="font-body-default text-body-default">{item.label}</span>
                      </Link>
                    );
                  })}
              </div>
            ))}
          </nav>
        </div>

        <div className="p-space-md border-t border-[#979DAC]/30 flex flex-col gap-3">
          <div className="bg-[#f4f6fa] rounded-lg border border-[#979DAC]/30 p-3 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-body-medium text-body-medium text-midnight-navy font-semibold">
                {ROLE_LABEL[role] || "Usuario"}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#ebf3fe] font-badge-label text-badge-label text-[#0466c8] font-bold">
                {role}
              </span>
            </div>
            <span className="font-code-id text-code-id text-neutral-muted truncate" title={user?.email}>
              {user?.email}
            </span>
          </div>
          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-danger hover:bg-error-container hover:text-on-error-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              logout
            </span>
            <span className="font-body-medium text-body-medium">Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}
