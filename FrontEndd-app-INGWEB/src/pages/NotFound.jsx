import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center bg-background">
      <span className="material-symbols-outlined text-[48px] text-border-muted" aria-hidden="true">search_off</span>
      <h1 className="font-headline-page text-headline-page text-midnight-navy font-semibold">Página no encontrada</h1>
      <p className="font-body-default text-body-default text-neutral-muted">La dirección que buscas no existe o fue movida.</p>
      <Link to="/dashboard" className="h-10 px-4 rounded-lg bg-primary hover:bg-brand-blue-hover text-on-primary font-body-medium text-body-medium inline-flex items-center transition-colors">
        Volver al inicio
      </Link>
    </main>
  );
}
