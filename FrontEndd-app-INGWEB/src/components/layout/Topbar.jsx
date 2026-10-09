import { useAuth } from "../../auth/useAuth";

const ROLE_LABEL = { ADMIN: "Administrador", MEDICO: "Médico", PACIENTE: "Paciente" };

export default function Topbar({ onMenu }) {
  const { user, role } = useAuth();
  const name = (user?.email || "").split("@")[0];
  const initials = name.slice(0, 2).toUpperCase() || "US";

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface border-b border-[#7C9692]/30 z-30 flex items-center justify-between gap-3 px-4 lg:px-space-lg">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Abrir menú"
          className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-[#E6F5F3] hover:text-[#0F766E] transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
            menu
          </span>
        </button>
        <img src="/logo.svg" alt="Sistema Clínicas" className="h-8 w-8 lg:hidden" />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <div className="relative w-[280px] hidden md:block">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-neutral-muted"
            aria-hidden="true"
          >
            search
          </span>
          <input
            className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#7C9692]/40 bg-surface text-body-default font-body-default text-midnight-navy placeholder:text-neutral-muted focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
            placeholder="Buscar paciente o médico..."
            type="search"
            aria-label="Buscar paciente o médico"
          />
        </div>
        <button
          aria-label="Notificaciones"
          className="relative p-2 rounded-lg text-on-surface-variant hover:bg-[#E6F5F3] hover:text-[#0F766E] transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            notifications
          </span>
        </button>
        <div className="h-6 w-px bg-[#7C9692]/30" />
        <div className="flex items-center gap-3 pl-1 min-w-0">
          <div
            className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-badge-label text-badge-label font-bold shrink-0"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="hidden sm:flex flex-col text-left min-w-0">
            <span className="font-body-medium text-body-medium text-midnight-navy leading-tight font-medium truncate max-w-[160px]">
              {name}
            </span>
            <span className="font-caption text-caption text-neutral-muted leading-tight">
              {ROLE_LABEL[role] || role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
