import AppLayout from "../components/layout/AppLayout";

export default function Appointments() {
  return (
    <>
      <AppLayout><main className="w-full pt-16 min-h-screen bg-[#f4f6fa]"><div className="max-w-[1280px] mx-auto p-space-lg"><div className="flex flex-col w-full">
<div className="flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex flex-col gap-1">
<h1 className="font-headline-page text-headline-page text-[#001845]">Citas</h1>
<p className="font-body-default text-body-default text-[#5C677D]">Gestiona y da seguimiento a las consultas médicas</p>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 rounded-lg bg-surface border border-[#7D8597]/40 text-[#001845] hover:bg-[#F4F6FA] font-body-medium text-body-medium flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-[#5C677D]">file_download</span>
<span>Exportar</span>
</button>
<button className="h-10 px-4 rounded-lg bg-[#0466c8] hover:bg-[#0353A4] text-white font-body-medium text-body-medium flex items-center gap-2 transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Nueva cita</span>
</button>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#979DAC]/30 p-5 flex flex-col gap-4 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 items-end">
<div className="lg:col-span-2 flex flex-col gap-1.5">
<label className="font-badge-label text-badge-label text-[#5C677D] uppercase tracking-wider">Estado</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-[#001233] focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 appearance-none cursor-pointer">
<option value="todas">Todas</option>
<option value="agendadas">Agendadas</option>
<option value="completadas">Completadas</option>
<option value="canceladas">Canceladas</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-[#5C677D] pointer-events-none">expand_more</span>
</div>
</div>
<div className="lg:col-span-3 flex flex-col gap-1.5">
<label className="font-badge-label text-badge-label text-[#5C677D] uppercase tracking-wider">Rango de fechas</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="w-full h-10 pl-8 pr-2 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-[#001233] focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20" type="text" value="12/03/2026"/>
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-[#5C677D]">calendar_today</span>
</div>
<div className="relative">
<input className="w-full h-10 pl-8 pr-2 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-[#001233] focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20" type="text" value="19/03/2026"/>
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-[#5C677D]">calendar_today</span>
</div>
</div>
</div>
<div className="lg:col-span-3 flex flex-col gap-1.5">
<label className="font-badge-label text-badge-label text-[#5C677D] uppercase tracking-wider">Médico</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-[#001233] focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20 appearance-none cursor-pointer">
<option value="todos">Todos los médicos</option>
<option value="roberto">Dr. Roberto Sánchez (Cardiología)</option>
<option value="lucia">Dra. Lucía Valenzuela (Med. General)</option>
<option value="mariana">Dra. Mariana Vega (Pediatría)</option>
<option value="jorge">Dr. Jorge Ramos (Traumatología)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-[#5C677D] pointer-events-none">expand_more</span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-1.5">
<label className="font-badge-label text-badge-label text-[#5C677D] uppercase tracking-wider">Búsqueda rápida</label>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#5C677D]">search</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#7D8597]/40 bg-surface text-body-default font-body-default text-[#001233] placeholder:text-[#5C677D] focus:outline-none focus:border-[#0466c8] focus:ring-2 focus:ring-[#0466c8]/20" placeholder="Buscar por paciente o ID..." type="text"/>
</div>
<button className="h-10 px-3 rounded-lg text-[#0466c8] hover:bg-[#0466c8]/10 font-body-medium text-body-medium flex items-center gap-1 transition-colors whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[16px] text-[#0466c8]">restart_alt</span>
<span>Limpiar</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-body-default font-body-default">
<div className="flex items-center gap-2">
<span className="font-body-medium text-body-medium text-[#001845]">24 citas</span>
<span className="text-[#5C677D]">·</span>
<span className="text-[#5C677D]">Mostrando semana en curso</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[#5C677D] text-caption font-caption">
<span>Filas:</span>
<div className="relative">
<select className="h-8 pl-2 pr-6 rounded border border-[#7D8597]/40 bg-surface text-caption font-caption text-[#001233] focus:outline-none focus:border-[#0466c8]">
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select>
<span className="material-symbols-outlined absolute right-1 top-1/2 -translate-y-1/2 text-[14px] text-[#5C677D] pointer-events-none">expand_more</span>
</div>
</div>
<div className="h-4 w-px bg-[#979DAC]/30"></div>
<div className="inline-flex rounded-lg border border-[#7D8597]/30 bg-surface p-0.5">
<button aria-label="Vista tabla" className="p-1.5 rounded-md bg-[#0466c8]/10 text-[#0466c8]" type="button">
<span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
</button>
<button aria-label="Vista cuadrícula" className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
<button aria-label="Vista calendario" className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</button>
</div>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#7D8597]/30 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="h-10 bg-[#F4F6FA] border-b border-[#7D8597]/25">
<th className="px-5 font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Paciente</th>
<th className="px-5 font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Médico</th>
<th className="px-5 font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Fecha y Hora</th>
<th className="px-5 font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Tipo de Consulta</th>
<th className="px-5 font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Estado</th>
<th className="px-5 text-right font-table-header text-table-header text-[#33415c] uppercase tracking-wider" scope="col">Acciones</th>
</tr>
</thead>
<tbody className="divide-y divide-[#979DAC]/20">
<tr className="h-[52px] hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0466c8]/10 text-[#0466c8] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    CT
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Camila Torres</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-8921</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-[#5C677D]">Cardiología</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">12 mar 2026, 09:00</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Consulta general
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#EDFDF2] text-success border border-[#0F9D58]/20">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Completada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-danger hover:bg-error-container transition-colors" title="Cancelar cita" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0466c8]/10 text-[#0466c8] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    CM
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Carlos Mendoza</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-4412</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dra. Lucía Valenzuela</span>
<span className="font-caption text-caption text-[#5C677D]">Medicina General</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">12 mar 2026, 10:15</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Control
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#EDFDF2] text-success border border-[#0F9D58]/20">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Completada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-danger hover:bg-error-container transition-colors" title="Cancelar cita" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#a9c7ff]/40 text-[#134685] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    AS
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Andrea Silva</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-7721</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dra. Mariana Vega</span>
<span className="font-caption text-caption text-[#5C677D]">Pediatría</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">12 mar 2026, 11:30</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Consulta general
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-warning border border-[#B54708]/20">
<span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                  Agendada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-danger hover:bg-error-container transition-colors" title="Cancelar cita" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0466c8]/10 text-[#0466c8] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    MR
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Mateo Ramírez</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-1092</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dr. Jorge Ramos</span>
<span className="font-caption text-caption text-[#5C677D]">Traumatología</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">12 mar 2026, 12:45</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Procedimiento
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-warning border border-[#B54708]/20">
<span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                  Agendada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-danger hover:bg-error-container transition-colors" title="Cancelar cita" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#d6e3ff] text-[#32507f] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    SM
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Sofía Morales</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-5501</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dr. Roberto Sánchez</span>
<span className="font-caption text-caption text-[#5C677D]">Cardiología</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">12 mar 2026, 14:00</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Control
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-danger border border-[#D92D20]/20">
<span className="w-1.5 h-1.5 rounded-full bg-danger"></span>
                  Cancelada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Reactivar cita" type="button">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#F4F6FA] transition-colors">
<td className="px-5 py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0466c8]/10 text-[#0466c8] font-body-medium text-[13px] flex items-center justify-center flex-shrink-0 font-semibold">
                    EG
                  </div>
<div className="flex flex-col">
<span className="font-body-medium text-body-medium text-[#001233] leading-snug font-semibold">Elena Gómez</span>
<span className="font-code-id text-code-id text-[#5C677D]">#PAC-3190</span>
</div>
</div>
</td>
<td className="px-5 py-2">
<div className="flex flex-col">
<span className="font-body-default text-body-default text-[#33415c] leading-snug">Dra. Lucía Valenzuela</span>
<span className="font-caption text-caption text-[#5C677D]">Medicina General</span>
</div>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="font-body-default text-body-default text-[#001233]">13 mar 2026, 09:30</span>
</td>
<td className="px-5 py-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#EBF0F8] text-[#33415c] font-caption text-caption">
                  Vacunación
                </span>
</td>
<td className="px-5 py-2 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-warning border border-[#B54708]/20">
<span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                  Agendada
                </span>
</td>
<td className="px-5 py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#001845] hover:bg-[#EBF0F8] transition-colors" title="Ver detalles" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-[#0466c8] hover:bg-[#EBF0F8] transition-colors" title="Editar cita" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-md text-[#5C677D] hover:text-danger hover:bg-error-container transition-colors" title="Cancelar cita" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-3 border-t border-[#7D8597]/25 bg-surface">
<span className="font-body-default text-body-default text-[#5C677D]">
          Mostrando <strong className="text-[#001845] font-body-medium">1–6</strong> de <strong className="text-[#001845] font-body-medium">24</strong> citas
        </span>
<nav aria-label="Paginación" className="flex items-center gap-1">
<button aria-label="Página anterior" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#7D8597]/30 bg-surface text-[#5C677D] opacity-40 cursor-not-allowed" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button aria-current="page" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0466c8] text-white font-body-medium text-body-medium" type="button">
            1
          </button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#7D8597]/30 bg-surface text-[#001845] hover:bg-[#F4F6FA] font-body-medium text-body-medium transition-colors" type="button">
            2
          </button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#7D8597]/30 bg-surface text-[#001845] hover:bg-[#F4F6FA] font-body-medium text-body-medium transition-colors" type="button">
            3
          </button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#7D8597]/30 bg-surface text-[#001845] hover:bg-[#F4F6FA] font-body-medium text-body-medium transition-colors" type="button">
            4
          </button>
<button aria-label="Página siguiente" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#7D8597]/30 bg-surface text-[#001845] hover:bg-[#F4F6FA] transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</nav>
</div>
</div>
</div>
</div></div></main></AppLayout>
    </>
  );
}
