// Login / Registro: pantalla dividida. Panel de marca (desktop) + formulario centrado.
const FEATURES = [
  { icon: "calendar_clock", title: "Agenda y seguimiento de consultas", text: "Monitoreo y actualización continua en tiempo real." },
  { icon: "clinical_notes", title: "Historial clínico y registro", text: "Expediente digital seguro para cada paciente." },
  { icon: "admin_panel_settings", title: "Control de roles y accesos seguros", text: "Permisos granulares para personal administrativo y médico." },
];

const BADGE =
  "inline-flex items-center px-2.5 py-1 rounded-full text-badge-label font-badge-label bg-white/10 text-sidebar-text font-semibold border border-white/15";

export default function AuthShell({ children }) {
  return (
    <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-background">
      {/* Panel de marca (solo desktop) */}
      <section className="hidden lg:flex flex-col justify-between bg-sidebar text-white p-12 xl:p-16">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="" className="w-10 h-10 shrink-0" />
          <span className="font-title-modal text-title-modal font-semibold tracking-tight">Sistema Clínicas</span>
        </div>

        <div className="max-w-[460px] space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline-hero text-headline-hero text-[34px] leading-[42px] tracking-tight font-semibold">
              Gestión integral de citas y pacientes
            </h1>
            <p className="font-body-default text-body-default text-sidebar-text leading-relaxed">
              Agenda, gestiona y da seguimiento a las consultas de tu clínica en una plataforma médica unificada.
            </p>
          </div>
          <ul className="space-y-5">
            {FEATURES.map((f) => (
              <li key={f.icon} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sidebar-active flex items-center justify-center shrink-0 text-sidebar-accent">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{f.icon}</span>
                </div>
                <div>
                  <p className="font-body-medium text-body-medium text-white">{f.title}</p>
                  <p className="font-caption text-caption text-sidebar-text">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <span className={BADGE}>HIPAA & GDPR COMPLIANT</span>
          <span className={BADGE}>TLS 1.3 ENCRYPTED</span>
        </div>
      </section>

      {/* Formulario */}
      <section className="flex flex-col items-center justify-center p-6 sm:p-10 gap-8">
        <div className="flex lg:hidden items-center gap-3">
          <img src="/logo.svg" alt="" className="w-10 h-10" />
          <span className="font-title-modal text-title-modal text-midnight-navy font-semibold tracking-tight">Sistema Clínicas</span>
        </div>
        <div className="w-full max-w-[400px] flex flex-col">{children}</div>
      </section>
    </main>
  );
}
