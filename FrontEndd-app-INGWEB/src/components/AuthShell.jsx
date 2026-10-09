// Estructura compartida de Login / Registro: hero a la izquierda (solo desktop) + tarjeta a la derecha.
const FEATURES = [
  { icon: "calendar_clock", title: "Agenda y seguimiento de consultas", text: "Monitoreo y actualización continua en tiempo real." },
  { icon: "clinical_notes", title: "Historial clínico y registro", text: "Expediente digital seguro para cada paciente." },
  { icon: "admin_panel_settings", title: "Control de roles y accesos seguros", text: "Permisos granulares para personal administrativo y médico." },
];

const BADGE =
  "inline-flex items-center px-2 py-0.5 rounded-full text-badge-label font-badge-label bg-surface-tint-container text-primary font-semibold border border-surface-container-highest";

export default function AuthShell({ children }) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-space-lg bg-background">
      <div className="w-full max-w-[980px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Hero (desktop) */}
        <section className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-7 pr-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="" className="w-9 h-9 shrink-0" />
            <span className="font-title-modal text-title-modal text-midnight-navy font-semibold tracking-tight">
              Sistema Clínicas
            </span>
          </div>
          <div className="space-y-3">
            <h1 className="font-headline-hero text-headline-hero text-midnight-navy tracking-tight font-semibold">
              Gestión integral de citas y pacientes
            </h1>
            <p className="font-body-default text-body-default text-neutral-muted leading-relaxed">
              Agenda, gestiona y da seguimiento a las consultas de tu clínica en una plataforma médica unificada.
            </p>
          </div>
          <ul className="space-y-4 pt-1">
            {FEATURES.map((f) => (
              <li key={f.icon} className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-surface-tint-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{f.icon}</span>
                </div>
                <div className="pt-0.5">
                  <p className="font-body-medium text-body-medium text-midnight-navy">{f.title}</p>
                  <p className="font-caption text-caption text-neutral-muted">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 pt-2">
            <span className={BADGE}>HIPAA & GDPR COMPLIANT</span>
            <span className={BADGE}>TLS 1.3 ENCRYPTED</span>
          </div>
        </section>

        {/* Tarjeta */}
        <section className="lg:col-span-7 flex flex-col items-center lg:items-end gap-6">
          {/* Marca compacta (móvil/tablet) */}
          <div className="flex lg:hidden items-center space-x-3">
            <img src="/logo.svg" alt="" className="w-9 h-9" />
            <span className="font-title-modal text-title-modal text-midnight-navy font-semibold tracking-tight">
              Sistema Clínicas
            </span>
          </div>
          <div className="w-full max-w-[440px] bg-surface rounded-xl p-6 sm:p-9 shadow-sm border border-outline-variant/50 flex flex-col">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
