import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewAppointment() {
  const navigate = useNavigate();
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface border-r border-[#E2E8F0] z-50 flex flex-col justify-between overflow-y-auto"><div className="flex flex-col"><div className="h-16 flex items-center gap-3 px-space-lg border-b border-[#E2E8F0]"><img alt="Sistema Clinicas Logo" className="h-8 w-auto object-contain rounded" src="https://lh3.googleusercontent.com/aida/AEtjO1Wr25McdkOxWD2vzGzyR0l2Brhp-1S3jIH5x-dOxKoiU4H6BImGxuTnfuQWsdVr917lzupvBT530d-RIUMtTGE1aFfHsdg1O-c9R3rg7MFqPnLz8gHUOlTETEsg2kD45dC3m7a8pG4tWBtFHQnDW9ktRILBcU4S9JRHLNTzZtw6aF3cDJINTlXFkkzIfGpBRLPcNTySEbQIhibPP7Q6w1yFxNU8YdIkF8Ubt4v5GGbGqzMh67pSt5-yd04n"/><span className="font-brand-title text-brand-title text-midnight-navy font-semibold">Sistema Clinicas</span></div><nav className="flex flex-col gap-6 py-space-lg" data-active-classes="bg-[#ebf3fc] text-[#0466c8] font-body-medium border-l-[3px] border-[#0466c8]"><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Principal</span><Link to="/dashboard"  className="flex items-center gap-3 px-space-lg py-2.5 text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">grid_view</span><span className="font-body-default text-body-default">Resumen</span></Link><Link to="/appointments"  className="flex items-center gap-3 px-space-lg py-2.5 text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">calendar_today</span><span className="font-body-default text-body-default">Citas</span></Link><Link to="/appointments/new"  aria-current="page" className="flex items-center gap-3 px-space-lg py-2.5 transition-colors bg-[#ebf3fc] text-[#0466c8] font-body-medium border-l-[3px] border-[#0466c8]" ><span className="material-symbols-outlined text-[20px]">event_available</span><span className="font-body-default text-body-default">Nueva cita</span></Link></div><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Gestión</span><Link to="/admin/users"  className="flex items-center justify-between px-space-lg py-2.5 text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors border-l-[3px] border-transparent" ><div className="flex items-center gap-3"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-default text-body-default">Usuarios</span></div><span className="px-2 py-0.5 rounded-full bg-[#e8eeff] font-badge-label text-badge-label text-slate-label">12</span></Link><Link to="#"  className="flex items-center gap-3 px-space-lg py-2.5 text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-default text-body-default">Configuración</span></Link></div><div className="flex flex-col gap-1"><span className="px-space-lg font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider mb-space-xs">Cuenta</span><Link to="#"  className="flex items-center gap-3 px-space-lg py-2.5 text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors border-l-[3px] border-transparent" ><span className="material-symbols-outlined text-[20px]">person</span><span className="font-body-default text-body-default">Mi perfil</span></Link></div></nav></div><div className="p-space-md border-t border-[#E2E8F0] flex flex-col gap-3"><div className="bg-[#f4f6fa] rounded-lg border border-[#E2E8F0] p-3 flex flex-col gap-1"><div className="flex items-center justify-between"><span className="font-body-medium text-body-medium text-midnight-navy">Operador</span><span className="px-2 py-0.5 rounded-full bg-[#ebf3fc] font-badge-label text-badge-label text-[#0466c8] font-semibold">ADMIN</span></div><span className="font-code-id text-code-id text-neutral-muted truncate">admin@clinicas.com</span></div><Link to="/login"  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-danger hover:bg-error-container hover:text-on-error-container transition-colors" ><span className="material-symbols-outlined text-[20px]">logout</span><span className="font-body-medium text-body-medium">Cerrar sesión</span></Link></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface border-b border-[#E2E8F0] z-40 flex items-center justify-between px-space-lg"><div className="flex items-center gap-4"><img alt="Sistema Clinicas Logo" className="h-8 w-auto object-contain md:hidden" src="https://lh3.googleusercontent.com/aida/AEtjO1Wr25McdkOxWD2vzGzyR0l2Brhp-1S3jIH5x-dOxKoiU4H6BImGxuTnfuQWsdVr917lzupvBT530d-RIUMtTGE1aFfHsdg1O-c9R3rg7MFqPnLz8gHUOlTETEsg2kD45dC3m7a8pG4tWBtFHQnDW9ktRILBcU4S9JRHLNTzZtw6aF3cDJINTlXFkkzIfGpBRLPcNTySEbQIhibPP7Q6w1yFxNU8YdIkF8Ubt4v5GGbGqzMh67pSt5-yd04n"/></div><div className="flex items-center gap-4"><div className="relative w-[280px]"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-neutral-muted">search</span><input className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-midnight-navy placeholder:text-neutral-muted focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 transition-colors" placeholder="Buscar paciente o mém�dico..." type="text"/></div><button aria-label="Notificaciones" className="relative p-2 rounded-lg text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#0466c8]"></span></button><div className="h-6 w-px bg-[#E2E8F0]"></div><div className="flex items-center gap-3 pl-1"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2kgAIbiYdtWPvyoHHOJHl20AVVTXIsietzZzQ53xt6My-CqNpySok17eeHP21X-ySSWl3mDV_Jn0nCNRxePc81AtpGdwOVfg-bRBy1n5fLIa�oK2nQOAfHIuc3O9zE76RC1VNvyRpWRQjOb2ws1RpG837P8sozSCP2hkDauBU9rzRn4QEmoMXg9V9okgZMO23UFz4h_B8B5XJQ-MTVk3F8vqa9hs1JURWhUjeMV0Xa_8ErakVt_OHdkg"/><div className="hidden sm:flex flex-col text-left"><span className="font-body-medium text-body-medium text-midnight-navy leading-tight">Dra. Lucía Valenzuela</span><span className="font-caption text-caption text-neutral-muted leading-tight">Administradora</span></div><span className="material-symbols-outlined text-neutral-muted text-[18px]">expand_more</span></div></div></header><main className="w-full pt-16 min-h-screen bg-background"><div className="max-w-[1280px] mx-auto p-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col gap-2 mb-space-lg">
<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-neutral-muted font-body-default text-body-default">
<Link to="/appointments"  className="hover:text-midnight-navy transition-colors flex items-center gap-1" >
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Citas</span>
</Link>
<span className="text-border-light">/</span>
<span className="text-midnight-navy font-body-medium">Nueva cita</span>
</nav>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<h1 className="font-headline-page text-headline-page text-midnight-navy">Nueva cita mém�dica</h1>
<p className="font-body-default text-body-default text-neutral-muted mt-0.5">Programa una nueva consulta para un paciente</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebf3fc] text-[#0466c8] font-caption text-caption font-medium border border-[#0466c8]/15">
<span className="w-2 h-2 rounded-full bg-[#0466c8] animate-pulse"></span>
          Sistema de Citas en Línea
        </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<section className="lg:col-span-8 bg-surface rounded-xl border border-[#E2E8F0] p-7 flex flex-col shadow-none">
<header className="flex flex-col gap-1 pb-space-md border-b border-[#E2E8F0] mb-6">
<div className="flex items-center justify-between">
<h2 className="font-title-modal text-title-modal text-darkest-slate flex items-center gap-2">
<span className="material-symbols-outlined text-[#0466c8] text-[22px]">mem�dical_services</span>
            Datos de la consulta
          </h2>
<span className="font-caption text-caption text-neutral-muted">* Campos obligatorios</span>
</div>
<p className="font-body-default text-body-default text-neutral-muted">
          Ingresa la información clínica, agenda y profesional asignado para registrar el turno.
        </p>
</header>
<form className="flex flex-col gap-5" id="appointmentForm">

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-slate-label flex items-center gap-1" htmlFor="doctorSelect">
              Mém�dico tratante <span className="text-danger">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">stethoscope</span>
<select className="w-full h-10 pl-10 pr-9 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 appearance-none cursor-pointer transition-colors" id="doctorSelect">
<option selected="" value="dr-roberto">Dr. Roberto Sánchez — Cardiología</option>
<option value="dra-elena">Dra. Elena Gómez — Pediatría</option>
<option value="dr-marcos">Dr. Marcos Véliz — Medicina General</option>
<option value="dra-carla">Dra. Carla Méndez — Dermatología</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">unfold_more</span>
</div>
<span className="font-caption text-caption text-neutral-muted">Pabellón Central · Consultorio 204</span>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-slate-label flex items-center gap-1" htmlFor="patientInput">
              Paciente <span className="text-danger">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">person_search</span>
<input className="w-full h-10 pl-10 pr-9 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate placeholder:text-neutral-muted focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 transition-colors" id="patientInput" placeholder="Buscar por RUT, Nombre o ID..." type="text" value="Camila Torres — ID: PAC-8921"/>
<button aria-label="Limpiar o buscar paciente" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted hover:text-midnight-navy" type="button">
<span className="material-symbols-outlined text-[18px]">manage_search</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="font-caption text-caption text-success flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Expediente activo
              </span>
<span className="text-border-light font-caption text-caption">·</span>
<span className="font-caption text-caption text-neutral-muted">Último control: 12 Ene 2026</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-slate-label flex items-center gap-1" htmlFor="appointmentDate">
              Fecha de la consulta <span className="text-danger">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">calendar_month</span>
<input className="w-full h-10 pl-10 pr-3 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 cursor-pointer transition-colors" id="appointmentDate" type="date" value="2026-03-20"/>
</div>
<span className="font-caption text-caption text-neutral-muted">Horario de atención: 08:30 a 19:00 hrs</span>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-slate-label flex items-center gap-1" htmlFor="appointmentTime">
              Hora <span className="text-danger">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">schedule</span>
<select className="w-full h-10 pl-10 pr-9 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 appearance-none cursor-pointer transition-colors" id="appointmentTime">
<option value="09:00">09:00 hrs</option>
<option value="09:45">09:45 hrs</option>
<option selected="" value="10:30">10:30 hrs (Disponible)</option>
<option value="11:15">11:15 hrs</option>
<option value="12:00">12:00 hrs</option>
<option value="15:30">15:30 hrs</option>
<option value="16:15">16:15 hrs</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">arrow_drop_down</span>
</div>
<span className="font-caption text-caption text-neutral-muted">Duración estándar: 30-45 minutos</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-body-medium text-body-medium text-slate-label flex items-center gap-1" htmlFor="consultationType">
            Tipo de consulta <span className="text-danger">*</span>
</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">clinical_notes</span>
<select className="w-full h-10 pl-10 pr-9 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 appearance-none cursor-pointer transition-colors" id="consultationType">
<option selected="" value="general">Consulta general</option>
<option value="control">Control de seguimiento</option>
<option value="vacunacion">Vacunación e inmunización</option>
<option value="procedimiento">Procedimiento ambulatorio / Electrocardiograma</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-neutral-muted text-[20px] pointer-events-none">arrow_drop_down</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-body-medium text-body-medium text-slate-label" htmlFor="consultationReason">
              Motivo de la consulta
            </label>
<span className="font-caption text-caption text-neutral-muted">Opcional</span>
</div>
<div className="relative">
<textarea className="w-full p-3 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-darkest-slate placeholder:text-neutral-muted focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 resize-none transition-colors" id="consultationReason" maxlength="500" placeholder="Describe brevemente los síntomas o razón del control mém�dico..." rows="4">Revisión perióm�dica de arritmia benigna diagnosticada en control de enero. Evaluación de electrocardiograma reciente.</textarea>
</div>
<div className="flex items-center justify-between mt-1">
<span className="font-caption text-caption text-neutral-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">info</span> Incluye inm�dicaciones previas si aplica
            </span>
<span className="font-code-id text-code-id text-neutral-muted" id="charCounter">48 / 500</span>
</div>
</div>

<div className="p-3.5 bg-[#f4f6fa] rounded-lg border border-[#E2E8F0] flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#0466c8] text-[20px]">mark_email_read</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-darkest-slate">Notificaciones por SMS &amp; Correo</span>
<span className="font-caption text-caption text-neutral-muted">Enviar recordatorio 24 horas antes de la cita</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#979dac] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-border-muted after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0466c8]"></div>
</label>
</div>

<div className="pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
<div className="flex items-center gap-2 text-neutral-muted">
<span className="material-symbols-outlined text-[18px] text-[#0466c8]">forward_to_inbox</span>
<span className="font-caption text-caption">Se enviará confirmación automática por correo al paciente.</span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto justify-end">
<button className="px-4 h-10 rounded-lg border border-[#7D8597]/40 bg-surface font-body-medium text-body-medium text-slate-label hover:bg-[#f4f6fa] hover:text-midnight-navy transition-colors" type="button">
              Cancelar
            </button>
<button className="px-5 h-10 rounded-lg bg-[#0466c8] text-on-primary font-body-medium text-body-medium hover:bg-[#0353a4] active:bg-[#023e7d] transition-all flex items-center gap-2 shadow-sm" id="btnSubmitAppointment" type="button">
<span className="material-symbols-outlined text-[20px]">event_available</span>
<span>Agendar cita</span>
</button>
</div>
</div>
</form>
</section>

<aside className="lg:col-span-4 sticky top-20 flex flex-col gap-4">
<div className="bg-[#ebf3fc] rounded-xl p-6 flex flex-col relative overflow-hidden border border-[#0466c8]/15">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-[#0466c8] shadow-xs">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
</div>
<h3 className="font-title-section text-title-section text-midnight-navy font-semibold">Resumen de la cita</h3>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-[#FEF3F2] text-warning border border-[rgba(181,71,8,0.2)] font-badge-label text-badge-label font-medium">
            Agendada
          </span>
</div>
<p className="font-caption text-caption text-neutral-muted mb-5">
          Comprueba la concordancia de los datos antes de emitir la orden mém�dica de atención.
        </p>

<div className="flex flex-col gap-3.5 bg-surface/90 rounded-lg p-4 border border-[#0466c8]/15 shadow-sm">

<div className="flex flex-col gap-0.5">
<span className="font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider">Mém�dico</span>
<div className="flex items-start gap-2 mt-0.5">
<span className="material-symbols-outlined text-[#0466c8] text-[18px] mt-0.5">person</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold" id="summaryDoctorName">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-neutral-muted" id="summaryDoctorDept">Cardiología · Consultorio 204</span>
</div>
</div>
</div>
<div className="w-full h-px bg-[#E2E8F0]"></div>

<div className="flex flex-col gap-0.5">
<span className="font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider">Paciente</span>
<div className="flex items-start gap-2 mt-0.5">
<span className="material-symbols-outlined text-[#0466c8] text-[18px] mt-0.5">badge</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold" id="summaryPatientName">Camila Torres</span>
<span className="font-code-id text-code-id text-neutral-muted">ID: PAC-8921 · Tel: +56 9 8765 4321</span>
</div>
</div>
</div>
<div className="w-full h-px bg-[#E2E8F0]"></div>

<div className="flex flex-col gap-0.5">
<span className="font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider">Fecha y Hora</span>
<div className="flex items-start gap-2 mt-0.5">
<span className="material-symbols-outlined text-[#0466c8] text-[18px] mt-0.5">calendar_month</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold" id="summaryDateTime">Jueves, 20 de marzo de 2026</span>
<span className="font-caption text-caption text-[#0466c8] font-medium">10:30 hrs (Hora estándar)</span>
</div>
</div>
</div>
<div className="w-full h-px bg-[#E2E8F0]"></div>

<div className="flex flex-col gap-0.5">
<span className="font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider">Tipo de Atención</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="material-symbols-outlined text-[#0466c8] text-[18px]">assignment_turned_in</span>
<span className="font-body-medium text-body-medium text-midnight-navy font-medium" id="summaryType">Consulta general</span>
</div>
</div>
<div className="w-full h-px bg-[#E2E8F0]"></div>

<div className="flex items-center justify-between pt-0.5">
<span className="font-badge-label text-badge-label text-neutral-muted uppercase tracking-wider">Estado Inicial</span>
<span className="px-2 py-0.5 rounded-full bg-[#FEF3F2] text-warning border border-[rgba(181,71,8,0.2)] font-badge-label text-badge-label font-medium">
              Agendada
            </span>
</div>
</div>

<div className="mt-4 p-3.5 bg-surface/90 rounded-lg border border-[#0466c8]/15 flex items-start gap-2.5">
<span className="material-symbols-outlined text-[#0466c8] text-[20px] shrink-0 mt-0.5">info</span>
<p className="font-caption text-caption text-slate-label leading-relaxed">
            Podrás reprogramar o cancelar esta cita en cualquier momento desde el listado general de citas.
          </p>
</div>

<div className="mt-3 flex items-center justify-between px-1">
<span className="font-code-id text-code-id text-neutral-muted">FOLIO PREVIO: #CT-2026-081</span>
<Link className="font-caption text-caption text-[#0466c8] hover:text-[#0353a4] hover:underline flex items-center gap-1 font-medium" to="#">
            Ver historial
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface rounded-xl border border-[#E2E8F0] p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#ebf3fc] flex items-center justify-center text-[#0466c8]">
<span className="material-symbols-outlined text-[20px]">av_timer</span>
</div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-midnight-navy font-medium">Citas del Dr. Sánchez hoy</span>
<span className="font-caption text-caption text-neutral-muted">5 completadas · 3 pendientes</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-[#f4f6fa] text-midnight-navy font-code-id text-code-id border border-[#7D8597]/30">
          Sala 204
        </span>
</div>
</aside>
</div>

<div className="fixed bottom-6 right-6 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 transition-opacity duration-300 opacity-0 pointer-events-none z-50" id="toastNotification">
<span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium leading-tight">Cita registrada exitosamente</span>
<span className="font-caption text-caption text-slate-300">Se enviaron los accesos de confirmación al paciente</span>
</div>
<button className="ml-2 text-slate-400 hover:text-surface" type="button">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</div></main></div>
    </>
  );
}
