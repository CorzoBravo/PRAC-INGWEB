import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AppointmentDetail() {
  const navigate = useNavigate();
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest border-r border-[#979dac]/30 z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 flex items-center gap-3 px-space-lg border-b border-[#979dac]/25"><img alt="Sistema Clinicas Logo" className="h-8 w-auto object-contain rounded" src="https://lh3.googleusercontent.com/aida/AEtjO1Wr25McdkOxWD2vzGzyR0l2Brhp-1S3jIH5x-dOxKoiU4H6BImGxuTnfuQWsdVr917lzupvBT530d-RIUMtTGE1aFfHsdg1O-c9R3rg7MFqPnLz8gHUOlTETEsg2kD45dC3m7a8pG4tWBtFHQnDW9ktRILBcU4S9JRHLNTzZtw6aF3cDJINTlXFkkzIfGpBRLPcNTySEbQIhibPP7Q6w1yFxNU8YdIkF8Ubt4v5GGbGqzMh67pSt5-yd04n"/><span className="font-title-section text-title-section text-midnight-navy font-semibold">Sistema Clinicas</span></div><nav className="flex flex-col gap-6 py-space-lg" data-active-classes="bg-[#0466c8]/10 text-primary font-body-medium border-l-[3px] border-primary"><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Principal</span><Link to="/dashboard"  className="flex items-center gap-3 px-space-lg py-2.5 text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">grid_view</span><span className="font-body-default text-body-default">Resumen</span></Link><Link to="/appointments"  aria-current="page" className="flex items-center gap-3 px-space-lg py-2.5 transition-colors bg-[#0466c8]/10 text-primary font-body-medium border-l-[3px] border-primary" ><span className="material-symbols-outlined text-[20px] text-primary">calendar_today</span><span className="font-body-default text-body-default">Citas</span></Link><Link to="/appointments/new"  className="flex items-center gap-3 px-space-lg py-2.5 text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">event_available</span><span className="font-body-default text-body-default">Nueva cita</span></Link></div><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Gestión</span><Link to="/admin/users"  className="flex items-center justify-between px-space-lg py-2.5 text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors border-l-[3px] border-transparent" ><div className="flex items-center gap-3"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-default text-body-default">Usuarios</span></div><span className="px-2 py-0.5 rounded-full bg-surface-container font-badge-label text-badge-label text-on-surface-variant">12</span></Link><Link to="#"  className="flex items-center gap-3 px-space-lg py-2.5 text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-default text-body-default">Configuración</span></Link></div><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Cuenta</span><Link to="#"  className="flex items-center gap-3 px-space-lg py-2.5 text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">person</span><span className="font-body-default text-body-default">Mi perfil</span></Link></div></nav></div><div className="p-space-md border-t border-[#979dac]/25 flex flex-col gap-3"><div className="bg-surface-tint-light rounded-lg border border-[#7d8597]/25 p-3 flex flex-col gap-1"><div className="flex items-center justify-between"><span className="font-body-medium text-body-medium text-darkest-slate">Operador</span><span className="px-2 py-0.5 rounded-full bg-[#0466c8]/10 font-badge-label text-badge-label text-primary font-semibold">ADMIN</span></div><span className="font-code-id text-code-id text-neutral-muted truncate">admin@clinicas.com</span></div><Link to="/login"  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-danger hover:bg-error-container hover:text-on-error-container transition-colors" ><span className="material-symbols-outlined text-[20px]">logout</span><span className="font-body-medium text-body-medium">Cerrar sesión</span></Link></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest border-b border-[#979dac]/25 z-40 flex items-center justify-between px-space-lg"><div className="flex items-center gap-4"><img alt="Sistema Clinicas Logo" className="h-8 w-auto object-contain md:hidden" src="https://lh3.googleusercontent.com/aida/AEtjO1Wr25McdkOxWD2vzGzyR0l2Brhp-1S3jIH5x-dOxKoiU4H6BImGxuTnfuQWsdVr917lzupvBT530d-RIUMtTGE1aFfHsdg1O-c9R3rg7MFqPnLz8gHUOlTETEsg2kD45dC3m7a8pG4tWBtFHQnDW9ktRILBcU4S9JRHLNTzZtw6aF3cDJINTlXFkkzIfGpBRLPcNTySEbQIhibPP7Q6w1yFxNU8YdIkF8Ubt4v5GGbGqzMh67pSt5-yd04n"/></div><div className="flex items-center gap-4"><div className="relative w-[280px]"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-neutral-muted">search</span><input className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#7d8597]/30 bg-surface-container-lowest text-body-default font-body-default text-darkest-slate placeholder:text-neutral-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Buscar paciente o mém�dico..." type="text"/></div><button aria-label="Notificaciones" className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-tint-light hover:text-darkest-slate transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary"></span></button><div className="h-6 w-px bg-[#979dac]/30"></div><div className="flex items-center gap-3 pl-1"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2kgAIbiYdtWPvyoHHOJHl20AVVTXIsietzZzQ53xt6My-CqNpySok17eeHP21X-ySSWl3mDV_Jn0nCNRxePc81AtpGdwOVfg-bRBy1n5fLIa�oK2nQOAfHIuc3O9zE76RC1VNvyRpWRQjOb2ws1RpG837P8sozSCP2hkDauBU9rzRn4QEmoMXg9V9okgZMO23UFz4h_B8B5XJQ-MTVk3F8vqa9hs1JURWhUjeMV0Xa_8ErakVt_OHdkg"/><div className="hidden sm:flex flex-col text-left"><span className="font-body-medium text-body-medium text-darkest-slate leading-tight">Dra. Lucía Valenzuela</span><span className="font-caption text-caption text-neutral-muted leading-tight">Administradora</span></div><span className="material-symbols-outlined text-neutral-muted text-[18px]">expand_more</span></div></div></header><main className="w-full pt-16 min-h-screen bg-surface-tint-light"><div className="max-w-[1280px] mx-auto p-space-lg"><div className="flex flex-col w-full">
<div className="flex flex-col gap-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex flex-col gap-1.5">
<Link className="inline-flex items-center gap-1.5 text-neutral-muted hover:text-midnight-navy font-body-default text-body-default transition-colors w-fit" to="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Volver a Citas</span>
</Link>
<div className="flex items-center gap-3">
<h1 className="font-headline-page text-headline-page text-midnight-navy font-semibold">Detalle de Cita #1042</h1>
<span className="inline-flex items-center gap-1.5 px-3 h-6 rounded-full bg-[#FEF3F2] text-warning border border-[rgba(181,71,8,0.2)] font-badge-label text-badge-label font-semibold" id="appointment-status-badge">
<span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
            AGENDADA
          </span>
</div>
</div>

<div className="flex items-center gap-3">
<span className="font-code-id text-code-id text-neutral-muted bg-surface-container-lowest px-3 py-1.5 rounded border border-[#7d8597]/25">Registro: REG-2026-0312</span>
<button className="h-10 px-3.5 rounded-lg border border-[#7d8597]/35 bg-surface-container-lowest text-darkest-slate hover:bg-surface-tint-light transition-colors flex items-center gap-2 font-body-medium text-body-medium" type="button">
<span className="material-symbols-outlined text-[18px] text-neutral-muted">print</span>
<span className="hidden sm:inline">Imprimir volante</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-[#7d8597]/30 p-7 flex flex-col gap-8 shadow-sm">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#979dac]/25">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#0466c8]/10 flex items-center justify-center text-primary font-headline-page text-headline-page font-semibold border border-primary-fixed">
              CT
            </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-card text-title-card text-midnight-navy font-semibold">Camila Torres</span>
<span className="font-code-id text-code-id text-neutral-muted bg-surface-tint-light px-2 py-0.5 rounded border border-[#7d8597]/25">PAC-8921</span>
</div>
<span className="font-caption text-caption text-neutral-muted mt-0.5">34 años • Rut: 18.492.110-3 • Isapre Colmena Golden Cross</span>
</div>
</div>
<button className="h-9 px-3 rounded-lg border border-[#7d8597]/35 bg-surface-container-lowest text-on-surface-variant hover:text-midnight-navy hover:bg-surface-tint-light transition-colors flex items-center gap-1.5 font-body-medium text-body-medium" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">folder_shared</span>
<span>Ver Ficha Mém�dica</span>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">

<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">stethoscope</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted font-semibold tracking-wider">Mém�dico Tratante</span>
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-semibold">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-secondary">Cardiología Adultos</span>
</div>
</div>

<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted font-semibold tracking-wider">Fecha y Horario</span>
<span className="font-body-medium text-body-medium text-darkest-slate font-medium">12 mar 2026 · 09:00 hrs</span>
<span className="font-caption text-caption text-neutral-muted">Duración estimada: 30 minutos</span>
</div>
</div>

<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">meeting_room</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted font-semibold tracking-wider">Ubicación Física</span>
<span className="font-body-medium text-body-medium text-darkest-slate font-medium">Sala de consulta 104</span>
<span className="font-caption text-caption text-neutral-muted">Pabellón A • Primer Nivel</span>
</div>
</div>

<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">how_to_reg</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted font-semibold tracking-wider">Tipo de Atención</span>
<span className="font-body-medium text-body-medium text-darkest-slate font-medium">Presencial Regular</span>
<span className="font-caption text-caption text-neutral-muted">Caja recepción verificada</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 p-4 rounded-lg bg-surface-tint-light border border-[#7d8597]/25">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">clinical_notes</span>
<span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider font-semibold">Motivo de Consulta</span>
</div>
<p className="font-body-default text-body-default text-darkest-slate pl-6">
            Control de rutina y revisión de exámenes de laboratorio.
          </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-title-section text-title-section text-midnight-navy font-semibold">Documentos y Estudios Vinculados</span>
<span className="font-caption text-caption text-neutral-muted">2 archivos adjuntos</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-[#7d8597]/30 bg-surface-container-lowest hover:bg-surface-tint-light hover:border-primary/40 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-primary">description</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-darkest-slate group-hover:text-primary transition-colors">Electrocardiograma_Feb26.pdf</span>
<span className="font-code-id text-code-id text-neutral-muted">1.8 MB • 24 Feb 2026</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-neutral-muted group-hover:text-primary">download</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-[#7d8597]/30 bg-surface-container-lowest hover:bg-surface-tint-light hover:border-primary/40 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-primary">biotech</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-darkest-slate group-hover:text-primary transition-colors">PerfilLipim�dico_Mar02.pdf</span>
<span className="font-code-id text-code-id text-neutral-muted">450 KB • 02 Mar 2026</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-neutral-muted group-hover:text-primary">download</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#979dac]/25 mt-auto">

<button className="w-full sm:w-auto h-10 px-4 rounded-lg border border-danger/30 text-danger hover:bg-error-container/20 active:bg-error-container transition-colors font-body-medium text-body-medium flex items-center justify-center gap-2" id="open-cancel-modal-btn" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
<span>Cancelar cita</span>
</button>

<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto h-10 px-4 rounded-lg border border-[#7d8597]/35 bg-surface-container-lowest text-darkest-slate hover:bg-surface-tint-light transition-colors font-body-medium text-body-medium flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px] text-neutral-muted">edit</span>
<span>Editar cita</span>
</button>
<button className="w-full sm:w-auto h-10 px-4 rounded-lg bg-[#0466c8] hover:bg-[#0353A4] active:bg-[#023e7d] text-white transition-colors font-body-medium text-body-medium flex items-center justify-center gap-2 shadow-sm" id="complete-btn" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>Marcar como completada</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-surface-container-lowest rounded-xl border border-[#7d8597]/30 p-6 flex flex-col gap-5 shadow-sm">
<div className="flex items-center justify-between pb-3 border-b border-[#979dac]/25">
<span className="font-title-section text-title-section text-midnight-navy font-semibold">Contacto del Paciente</span>
<span className="material-symbols-outlined text-[20px] text-neutral-muted">contacts</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">call</span>
</div>
<div className="flex flex-col">
<span className="font-caption text-caption text-neutral-muted">Teléfono móvil</span>
<span className="font-body-medium text-body-medium text-darkest-slate">+56 9 8412 9931</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">mail</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-caption text-caption text-neutral-muted">Correo electrónico</span>
<span className="font-body-medium text-body-medium text-darkest-slate truncate">camila.torres@empresa.com</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#0466c8]/10 border border-[#0466c8]/20 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">emergency</span>
</div>
<div className="flex flex-col">
<span className="font-caption text-caption text-neutral-muted">Contacto de emergencia</span>
<span className="font-body-medium text-body-medium text-darkest-slate">Jorge Torres (Hermano)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-[#7d8597]/30 p-6 flex flex-col gap-5 shadow-sm">
<div className="flex items-center justify-between pb-3 border-b border-[#979dac]/25">
<span className="font-title-section text-title-section text-midnight-navy font-semibold">Línea de Tiempo</span>
<span className="material-symbols-outlined text-[20px] text-neutral-muted">history</span>
</div>
<div className="relative pl-6 flex flex-col gap-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#979dac]/40">

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[1.8rem] top-1 w-2.5 h-2.5 rounded-full bg-[#0466c8] border-2 border-surface-container-lowest"></div>
<span className="font-body-medium text-body-medium text-darkest-slate">Cita programada</span>
<span className="font-caption text-caption text-neutral-muted">05 mar 2026 · 14:22 por Recepción 2</span>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[1.8rem] top-1 w-2.5 h-2.5 rounded-full bg-[#7d8597] border-2 border-surface-container-lowest"></div>
<span className="font-body-medium text-body-medium text-darkest-slate">Confirmación vía WhatsApp</span>
<span className="font-caption text-caption text-neutral-muted">10 mar 2026 · 10:15 por Sistema Automático</span>
</div>

<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[1.8rem] top-1 w-2.5 h-2.5 rounded-full bg-[#7d8597] border-2 border-surface-container-lowest"></div>
<span className="font-body-medium text-body-medium text-darkest-slate">Paciente en espera de consulta</span>
<span className="font-caption text-caption text-neutral-muted">Programada para hoy 09:00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-overlay transition-opacity duration-200 opacity-0 pointer-events-none" id="cancel-modal" role="dialog">

<div className="w-full max-w-[460px] bg-surface-container-lowest rounded-xl border border-[#7d8597]/30 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col gap-5 transform transition-transform duration-200 scale-95" id="cancel-modal-content">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center text-warning shrink-0">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
<div className="flex flex-col gap-1 pr-4">
<h2 className="font-title-modal text-title-modal text-midnight-navy font-semibold leading-tight">¿Cancelar esta cita mém�dica?</h2>
<p className="font-body-default text-body-default text-on-surface-variant">
            Se notificará al paciente vía correo electrónico y el horario quedará disponible en el calendario. Esta acción no se puede deshacer.
          </p>
</div>
</div>

<div className="p-3 bg-surface-tint-light rounded-lg border border-[#7d8597]/25 flex flex-col gap-2.5">
<div className="flex items-center justify-between text-body-default">
<span className="font-caption text-caption text-neutral-muted">Paciente:</span>
<span className="font-body-medium text-body-medium text-darkest-slate">Camila Torres <span className="font-code-id text-code-id text-neutral-muted">(PAC-8921)</span></span>
</div>
<div className="flex items-center justify-between text-body-default">
<span className="font-caption text-caption text-neutral-muted">Horario:</span>
<span className="font-body-medium text-body-medium text-darkest-slate">Jueves, 12 mar 2026 · 09:00 hrs</span>
</div>
<div className="flex items-center justify-between text-body-default">
<span className="font-caption text-caption text-neutral-muted">Mém�dico:</span>
<span className="font-body-medium text-body-medium text-darkest-slate">Dr. Roberto Sánchez (Cardiología)</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-darkest-slate" htmlFor="cancel-reason-input">
          Motivo de cancelación <span className="font-caption text-caption text-neutral-muted">(opcional)</span>
</label>
<input className="w-full h-10 px-3 rounded-lg border border-[#7d8597]/30 bg-surface-container-lowest text-body-default font-body-default text-darkest-slate placeholder:text-neutral-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="cancel-reason-input" placeholder="Ej: Solicitud del paciente, fuerza mayor..." type="text"/>
</div>

<label className="flex items-center gap-2.5 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-[#7d8597]/40 text-[#0466c8] focus:ring-primary/20 cursor-pointer" type="checkbox"/>
<span className="font-body-default text-body-default text-darkest-slate">Enviar copia de cancelación al mém�dico de turno</span>
</label>

<div className="flex items-center justify-end gap-3 pt-3 border-t border-[#979dac]/25 mt-1">
<button className="h-10 px-4 rounded-lg border border-[#7d8597]/35 bg-surface-container-lowest text-darkest-slate hover:bg-surface-tint-light transition-colors font-body-medium text-body-medium" id="close-cancel-modal-btn" type="button">
          Volver
        </button>
<button className="h-10 px-4 rounded-lg bg-danger hover:bg-error transition-colors text-white font-body-medium text-body-medium flex items-center gap-1.5 shadow-sm" id="confirm-cancel-btn" type="button">
<span>Sí, cancelar cita</span>
</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 hidden items-center gap-3 px-4 py-3 rounded-lg bg-inverse-surface text-inverse-on-surface shadow-lg transition-all duration-300" id="status-toast">
<span className="material-symbols-outlined text-[20px] text-success" id="toast-icon">check_circle</span>
<span className="font-body-medium text-body-medium" id="toast-message">Estado actualizado correctamente</span>
</div>
</div>
</div></main></div>
    </>
  );
}
