import { Link } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

export default function Dashboard() {
  return (
    <>
      <AppLayout><main className="w-full pt-16 min-h-screen bg-[#f4f6fa]"><div className="max-w-[1280px] mx-auto p-space-lg"><div className="flex flex-col w-full gap-space-lg">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex flex-col gap-0.5">
<h1 className="font-headline-page text-headline-page text-midnight-navy font-bold">Resumen</h1>
<p className="font-body-default text-body-default text-neutral-muted">Métricas operativas y citas médicas de hoy</p>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 rounded-lg bg-surface text-midnight-navy border border-[#979DAC]/40 hover:bg-[#ebf3fe]/40 transition-colors flex items-center gap-2 font-body-medium text-body-medium shadow-sm font-medium" type="button">
<span className="material-symbols-outlined text-[18px] text-neutral-muted">download</span>
        Exportar reporte
      </button>
<button className="h-10 px-4 rounded-lg bg-[#0466c8] text-white hover:bg-[#0353a4] transition-colors flex items-center gap-2 font-body-medium text-body-medium shadow-sm font-medium" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
        Nueva cita
      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Citas Hoy</span>
<div className="w-10 h-10 rounded-lg bg-[#ebf3fe] flex items-center justify-center text-[#0466c8]">
<span className="material-symbols-outlined text-[22px]">calendar_today</span>
</div>
</div>
<div className="mt-4 flex items-baseline justify-between">
<span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">24</span>
<span className="inline-flex items-center gap-1 font-badge-label text-badge-label text-success bg-[#EDFDF2] px-2 py-0.5 rounded-full border border-success/20">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>+12% vs. sem. anterior
        </span>
</div>
</div>

<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Pendientes</span>
<div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-warning">
<span className="material-symbols-outlined text-[22px]">schedule</span>
</div>
</div>
<div className="mt-4 flex items-baseline justify-between">
<span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">9</span>
<span className="inline-flex items-center gap-1 font-badge-label text-badge-label text-warning bg-[#FEF3F2] px-2 py-0.5 rounded-full border border-warning/20">
          +3 hoy
        </span>
</div>
</div>

<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Completadas</span>
<div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-success">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
</div>
<div className="mt-4 flex items-baseline justify-between">
<span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">132</span>
<span className="inline-flex items-center gap-1 font-badge-label text-badge-label text-success bg-[#EDFDF2] px-2 py-0.5 rounded-full border border-success/20">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>+8% este mes
        </span>
</div>
</div>

<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Pacientes Activos</span>
<div className="w-10 h-10 rounded-lg bg-[#ebf3fe] flex items-center justify-center text-[#0466c8]">
<span className="material-symbols-outlined text-[22px]">group</span>
</div>
</div>
<div className="mt-4 flex items-baseline justify-between">
<span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">1.204</span>
<span className="inline-flex items-center gap-1 font-badge-label text-badge-label text-neutral-muted bg-[#f4f6fa] px-2 py-0.5 rounded-full border border-[#979DAC]/20">
          +24 este mes
        </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col shadow-sm">
<div className="flex items-center justify-between mb-space-md pb-2 border-b border-[#979DAC]/20">
<div className="flex items-center gap-2">
<h2 className="font-title-section text-title-section text-midnight-navy font-bold">Citas de hoy</h2>
<span className="px-2 py-0.5 rounded-full bg-[#ebf3fe] font-badge-label text-badge-label text-[#0466c8] font-semibold">5 registros</span>
</div>
<Link className="font-body-medium text-body-medium text-[#0466c8] hover:text-[#0353a4] inline-flex items-center gap-1 transition-colors font-semibold" to="#">
          Ver todas
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
<div className="flex flex-col divide-y divide-[#979DAC]/20">

<div className="h-[52px] flex items-center justify-between px-2 hover:bg-[#f4f6fa] transition-colors rounded-lg">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-[#ebf3fe] text-[#0466c8] font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
              CT
            </div>
<div className="flex flex-col min-w-0">
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Camila Torres</span>
<span className="font-code-id text-code-id text-neutral-muted">PAC-8921</span>
</div>
</div>
<div className="hidden md:flex flex-col text-left px-4 min-w-0">
<span className="font-body-default text-body-default text-midnight-navy truncate">Dra. Lucía Valenzuela</span>
<span className="font-caption text-caption text-neutral-muted truncate">Medicina General</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
              09:00
            </div>
<span className="h-6 px-2.5 rounded-full bg-[#EDFDF2] text-success border border-success/20 font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check</span>
              COMPLETADA
            </span>
</div>
</div>

<div className="h-[52px] flex items-center justify-between px-2 hover:bg-[#f4f6fa] transition-colors rounded-lg">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-neutral-dark font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
              CM
            </div>
<div className="flex flex-col min-w-0">
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Carlos Mendoza</span>
<span className="font-code-id text-code-id text-neutral-muted">PAC-4412</span>
</div>
</div>
<div className="hidden md:flex flex-col text-left px-4 min-w-0">
<span className="font-body-default text-body-default text-midnight-navy truncate">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-neutral-muted truncate">Cardiología</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
              10:15
            </div>
<span className="h-6 px-2.5 rounded-full bg-[#EDFDF2] text-success border border-success/20 font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check</span>
              COMPLETADA
            </span>
</div>
</div>

<div className="h-[52px] flex items-center justify-between px-2 hover:bg-[#f4f6fa] transition-colors rounded-lg">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-[#ebf3fe] text-[#0466c8] font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
              AS
            </div>
<div className="flex flex-col min-w-0">
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Andrea Silva</span>
<span className="font-code-id text-code-id text-neutral-muted">PAC-7721</span>
</div>
</div>
<div className="hidden md:flex flex-col text-left px-4 min-w-0">
<span className="font-body-default text-body-default text-midnight-navy truncate">Dra. Mariana Vega</span>
<span className="font-caption text-caption text-neutral-muted truncate">Pediatría</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
              11:30
            </div>
<span className="h-6 px-2.5 rounded-full bg-[#FEF3F2] text-warning border border-warning/20 font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">schedule</span>
              AGENDADA
            </span>
</div>
</div>

<div className="h-[52px] flex items-center justify-between px-2 hover:bg-[#f4f6fa] transition-colors rounded-lg">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-neutral-dark font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
              MR
            </div>
<div className="flex flex-col min-w-0">
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Mateo Ramírez</span>
<span className="font-code-id text-code-id text-neutral-muted">PAC-1092</span>
</div>
</div>
<div className="hidden md:flex flex-col text-left px-4 min-w-0">
<span className="font-body-default text-body-default text-midnight-navy truncate">Dr. Jorge Ramos</span>
<span className="font-caption text-caption text-neutral-muted truncate">Traumatología</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
              12:45
            </div>
<span className="h-6 px-2.5 rounded-full bg-[#FEF3F2] text-warning border border-warning/20 font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">schedule</span>
              AGENDADA
            </span>
</div>
</div>

<div className="h-[52px] flex items-center justify-between px-2 hover:bg-[#f4f6fa] transition-colors rounded-lg">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-[#FEE2E2] text-danger font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
              SM
            </div>
<div className="flex flex-col min-w-0">
<span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Sofía Morales</span>
<span className="font-code-id text-code-id text-neutral-muted">PAC-5501</span>
</div>
</div>
<div className="hidden md:flex flex-col text-left px-4 min-w-0">
<span className="font-body-default text-body-default text-midnight-navy truncate">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-neutral-muted truncate">Cardiología</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
              14:00
            </div>
<span className="h-6 px-2.5 rounded-full bg-[#FEF3F2] text-danger border border-danger/20 font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">close</span>
              CANCELADA
            </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4">
<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col justify-between h-full shadow-sm">
<div>
<div className="flex items-center justify-between pb-3 border-b border-[#979DAC]/20">
<h2 className="font-title-section text-title-section text-midnight-navy font-bold">Estado de citas</h2>
<span className="font-caption text-caption text-neutral-muted">Últimos 30 días</span>
</div>

<div className="mt-4 flex flex-col gap-2">
<div className="w-full h-3 bg-[#f4f6fa] rounded-full overflow-hidden flex">
<div className="bg-success h-full" style={{width: "68%"}} title="Completadas: 68%"></div>
<div className="bg-warning h-full" style={{width: "22%"}} title="Agendadas: 22%"></div>
<div className="bg-danger h-full" style={{width: "10%"}} title="Canceladas: 10%"></div>
</div>
<div className="flex justify-between font-caption text-caption text-neutral-muted">
<span>Total: 193 citas</span>
<span>100% distribución</span>
</div>
</div>

<div className="mt-6 flex flex-col gap-3">
<div className="flex items-center justify-between text-body-default">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-success"></span>
<span className="font-body-default text-body-default text-midnight-navy">Completadas</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">132</span>
<span className="font-caption text-caption text-neutral-muted">(68%)</span>
</div>
</div>
<div className="flex items-center justify-between text-body-default">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-warning"></span>
<span className="font-body-default text-body-default text-midnight-navy">Agendadas</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">42</span>
<span className="font-caption text-caption text-neutral-muted">(22%)</span>
</div>
</div>
<div className="flex items-center justify-between text-body-default">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-danger"></span>
<span className="font-body-default text-body-default text-midnight-navy">Canceladas</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">19</span>
<span className="font-caption text-caption text-neutral-muted">(10%)</span>
</div>
</div>
</div>
</div>

<div className="mt-6 p-3.5 rounded-lg bg-[#ebf3fe] border border-[#0466c8]/25 flex items-start gap-3">
<span className="material-symbols-outlined text-[20px] text-[#0466c8] mt-0.5">notification_important</span>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">Próxima cita en sala</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#0466c8] animate-pulse"></span>
</div>
<span className="font-caption text-caption text-neutral-muted">Turno en 15 min · <strong className="text-[#0466c8] font-semibold">Sala 3</strong> · Dra. Mariana Vega</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-space-lg flex flex-col shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#979DAC]/20 gap-2">
<div>
<h2 className="font-title-section text-title-section text-midnight-navy font-bold">Agenda de la semana</h2>
<p className="font-caption text-caption text-neutral-muted">Distribución horaria de consultas y salas clínicas</p>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-neutral-muted hover:bg-[#ebf3fe] hover:text-[#0466c8] transition-colors" title="Semana anterior" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<span className="font-body-medium text-body-medium text-midnight-navy px-2 font-medium">10 - 16 Mar, 2025</span>
<button className="p-1.5 rounded-lg text-neutral-muted hover:bg-[#ebf3fe] hover:text-[#0466c8] transition-colors" title="Semana siguiente" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-2 pt-4 pb-2 border-b border-[#979DAC]/20 text-center overflow-x-auto min-w-[600px]">
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">LUN</span>
<span className="font-body-medium text-body-medium text-midnight-navy mt-1 font-semibold">10</span>
</div>
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">MAR</span>
<span className="font-body-medium text-body-medium text-midnight-navy mt-1 font-semibold">11</span>
</div>

<div className="flex flex-col items-center py-2 rounded-lg bg-[#ebf3fe] border border-[#0466c8]/30">
<div className="flex items-center gap-1">
<span className="font-badge-label text-badge-label text-[#0466c8] font-bold">MIÉ</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#0466c8]"></span>
</div>
<span className="font-body-medium text-body-medium text-[#0466c8] font-bold mt-1">12 (Hoy)</span>
</div>
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">JUE</span>
<span className="font-body-medium text-body-medium text-midnight-navy mt-1 font-semibold">13</span>
</div>
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">VIE</span>
<span className="font-body-medium text-body-medium text-midnight-navy mt-1 font-semibold">14</span>
</div>
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">SÁB</span>
<span className="font-body-medium text-body-medium text-midnight-navy mt-1 font-semibold">15</span>
</div>
<div className="flex flex-col items-center py-2 rounded-lg hover:bg-[#f4f6fa] transition-colors">
<span className="font-badge-label text-badge-label text-neutral-muted font-semibold">DOM</span>
<span className="font-body-medium text-body-medium text-neutral-muted mt-1 font-semibold">16</span>
</div>
</div>

<div className="mt-4 flex flex-col gap-3 min-w-[600px] overflow-x-auto">

<div className="grid grid-cols-12 items-center gap-4 py-2 border-b border-[#979DAC]/20">
<div className="col-span-2 sm:col-span-1 font-code-id text-code-id text-neutral-muted text-right pr-2 font-medium">09:00</div>
<div className="col-span-10 sm:col-span-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 bg-[#ebf3fe] border border-[#0466c8]/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-deep-blue font-semibold">Camila Torres</span>
<span className="font-caption text-caption text-neutral-muted">Dra. Lucía Valenzuela · Medicina General</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Consultorio 1</span>
</div>
<div className="p-3 bg-[#F0FDF4] border border-success/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">Elena Ramos</span>
<span className="font-caption text-caption text-neutral-muted">Dr. Andrés López · Odontología</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Sala Dental</span>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center gap-4 py-2 border-b border-[#979DAC]/20">
<div className="col-span-2 sm:col-span-1 font-code-id text-code-id text-neutral-muted text-right pr-2 font-medium">10:00</div>
<div className="col-span-10 sm:col-span-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 bg-[#ebf3fe] border border-[#0466c8]/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-deep-blue font-semibold">Carlos Mendoza (10:15)</span>
<span className="font-caption text-caption text-neutral-muted">Dr. Roberto Sánchez · Cardiología</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Consultorio 4</span>
</div>
<div className="p-3 bg-[#f4f6fa] border border-dashed border-[#979DAC]/40 rounded-lg flex items-center justify-center text-neutral-muted font-caption text-caption">
            Espacio disponible para urgencias / guardia
          </div>
</div>
</div>

<div className="grid grid-cols-12 items-center gap-4 py-2 border-b border-[#979DAC]/20">
<div className="col-span-2 sm:col-span-1 font-code-id text-code-id text-neutral-muted text-right pr-2 font-medium">11:00</div>
<div className="col-span-10 sm:col-span-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 bg-[#FEF3F2] border border-warning/30 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold">Andrea Silva (11:30)</span>
<span className="px-1.5 py-0.2 rounded bg-warning text-surface text-[10px] font-bold">EN SALA</span>
</div>
<span className="font-caption text-caption text-neutral-muted">Dra. Mariana Vega · Pediatría</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Sala 3</span>
</div>
<div className="p-3 bg-[#ebf3fe] border border-[#0466c8]/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-deep-blue font-semibold">Guillermo Díaz</span>
<span className="font-caption text-caption text-neutral-muted">Dra. Laura Ponce · Dermatología</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Consultorio 2</span>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center gap-4 py-2 border-b border-[#979DAC]/20">
<div className="col-span-2 sm:col-span-1 font-code-id text-code-id text-neutral-muted text-right pr-2 font-medium">12:00</div>
<div className="col-span-10 sm:col-span-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 bg-[#ebf3fe] border border-[#0466c8]/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-deep-blue font-semibold">Mateo Ramírez (12:45)</span>
<span className="font-caption text-caption text-neutral-muted">Dr. Jorge Ramos · Traumatología</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Consultorio 5</span>
</div>
<div className="p-3 bg-[#f4f6fa] border border-[#979DAC]/30 rounded-lg flex items-center justify-between text-neutral-muted font-caption text-caption">
<span>Mantenimiento preventivo de equipos</span>
<span className="material-symbols-outlined text-[16px] text-neutral-muted">build</span>
</div>
</div>
</div>

<div className="grid grid-cols-12 items-center gap-4 py-2">
<div className="col-span-2 sm:col-span-1 font-code-id text-code-id text-neutral-muted text-right pr-2 font-medium">14:00</div>
<div className="col-span-10 sm:col-span-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 bg-[#FEF3F2]/60 border border-danger/20 rounded-lg flex items-center justify-between opacity-80">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-neutral-dark line-through">Sofía Morales</span>
<span className="text-danger font-caption text-[11px] font-semibold">CANCELADO</span>
</div>
<span className="font-caption text-caption text-neutral-muted">Dr. Roberto Sánchez · Cardiología</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-muted">Cupo liberado</span>
</div>
<div className="p-3 bg-[#ebf3fe] border border-[#0466c8]/20 rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-deep-blue font-semibold">Martín Castro (14:30)</span>
<span className="font-caption text-caption text-neutral-muted">Dra. Lucía Valenzuela · Medicina General</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface border border-[#979DAC]/30 font-caption text-caption text-neutral-dark font-medium">Consultorio 1</span>
</div>
</div>
</div>
</div>
</div>
</div></div></main></AppLayout>
    </>
  );
}
