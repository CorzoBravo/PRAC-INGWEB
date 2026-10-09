import AppLayout from "../components/layout/AppLayout";

export default function AdminUsers() {
  return (
    <>
      <AppLayout><main className="w-full pt-16 min-h-screen bg-[#f4f6fa]"><div className="max-w-[1280px] mx-auto p-space-lg"><div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex flex-col">
<h1 className="font-headline-page text-headline-page text-midnight-navy font-bold">Usuarios</h1>
<p className="font-body-default text-body-default text-neutral-muted mt-0.5">Administra el personal médico, administrativo y accesos a la plataforma</p>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 bg-surface text-midnight-navy border border-[#7d8597]/40 hover:bg-[#f9f9ff] hover:border-primary font-body-medium text-body-medium rounded-lg inline-flex items-center gap-2 transition-colors focus:ring-2 focus:ring-primary/20 focus:outline-none" type="button">
<span className="material-symbols-outlined text-[18px] text-neutral-muted">download</span>
<span>Exportar</span>
</button>
<button className="h-10 px-4 bg-primary hover:bg-brand-blue-hover active:bg-brand-blue-active text-on-primary font-body-medium text-body-medium rounded-lg inline-flex items-center gap-2 shadow-sm transition-colors focus:ring-2 focus:ring-primary/30 focus:outline-none" type="button">
<span className="material-symbols-outlined text-[20px]">person_add</span>
<span>Invitar usuario</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface rounded-xl border border-[#979dac]/30 shadow-sm p-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Total Usuarios</span>
<span className="font-headline-page text-headline-page text-darkest-slate mt-1 font-bold">12</span>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">group</span>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#979dac]/30 shadow-sm p-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Cuerpo Médico</span>
<span className="font-headline-page text-headline-page text-darkest-slate mt-1 font-bold">7</span>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0466c8]/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">stethoscope</span>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#979dac]/30 shadow-sm p-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Activos Ahora</span>
<span className="font-headline-page text-headline-page text-success mt-1 font-bold">11</span>
</div>
<div className="w-10 h-10 rounded-lg bg-[#0F9D58]/10 flex items-center justify-center text-success">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#979dac]/30 shadow-sm p-4 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Inactivos</span>
<span className="font-headline-page text-headline-page text-neutral-muted mt-1 font-bold">1</span>
</div>
<div className="w-10 h-10 rounded-lg bg-[#f4f6fa] flex items-center justify-center text-neutral-muted">
<span className="material-symbols-outlined text-[22px]">person_off</span>
</div>
</div>
</div>
<div className="bg-surface rounded-xl border border-[#979dac]/30 shadow-sm overflow-hidden">
<div className="p-space-md border-b border-[#979dac]/25 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-surface">
<div className="flex flex-wrap items-center gap-3 flex-1">
<div className="relative w-full sm:w-[320px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-neutral-muted">search</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#7d8597]/35 bg-surface text-body-default font-body-default text-midnight-navy placeholder:text-neutral-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors" id="user-search-input" placeholder="Buscar por nombre, correo o especialidad..." type="text"/>
</div>
<div className="relative min-w-[170px]">
<select className="w-full h-10 appearance-none pl-3 pr-8 rounded-lg border border-[#7d8597]/35 bg-surface text-body-default font-body-default text-midnight-navy focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors cursor-pointer" id="role-filter">
<option value="all">Todos los roles</option>
<option value="ADMINISTRADOR">Administrador</option>
<option value="MEDICO">Médico</option>
<option value="PACIENTE">Paciente</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-neutral-muted">unfold_more</span>
</div>
<div className="relative min-w-[160px]">
<select className="w-full h-10 appearance-none pl-3 pr-8 rounded-lg border border-[#7d8597]/35 bg-surface text-body-default font-body-default text-midnight-navy focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors cursor-pointer" id="status-filter">
<option value="all">Todos los estados</option>
<option value="Activo">Activo</option>
<option value="Inactivo">Inactivo</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-neutral-muted">unfold_more</span>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0466c8]/10 font-badge-label text-badge-label text-primary font-semibold">
          12 usuarios registrados
        </span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[840px]">
<thead>
<tr className="bg-[#f9f9ff] h-10 border-b border-[#979dac]/25">
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Usuario</th>
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Rol</th>
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Especialidad / Área</th>
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Estado</th>
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Último Acceso</th>
<th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider text-right">Acciones</th>
</tr>
</thead>
<tbody className="divide-y divide-[#979dac]/20" id="users-table-body">
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shrink-0" aria-hidden="true"><span className="material-symbols-outlined text-[18px]">person</span></div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Dra. Lucía Valenzuela</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">admin@clinicas.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-[#0466c8]/10 text-primary border border-primary/25 font-semibold">
                ADMINISTRADOR
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Dirección médica
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-success"></span>
                Activo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Hace 5 min
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-danger hover:bg-error-container/60 transition-colors" title="Desactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shrink-0" aria-hidden="true"><span className="material-symbols-outlined text-[18px]">person</span></div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Dr. Roberto Sánchez</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">roberto.sanchez@clinicas.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-secondary-fixed/30 text-on-secondary-container border border-secondary/25 font-semibold">
                MÉDICO
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Cardiología
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-success"></span>
                Activo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Hace 25 min
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-danger hover:bg-error-container/60 transition-colors" title="Desactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shrink-0" aria-hidden="true"><span className="material-symbols-outlined text-[18px]">person</span></div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Dra. Mariana Vega</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">mariana.vega@clinicas.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-secondary-fixed/30 text-on-secondary-container border border-secondary/25 font-semibold">
                MÉDICO
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Pediatría
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-success"></span>
                Activo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Hace 2 horas
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-danger hover:bg-error-container/60 transition-colors" title="Desactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0466c8]/10 text-primary flex items-center justify-center font-body-medium text-body-medium font-semibold border border-[#0466c8]/20">
                  JR
                </div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Dr. Jorge Ramos</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">jorge.ramos@clinicas.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-secondary-fixed/30 text-on-secondary-container border border-secondary/25 font-semibold">
                MÉDICO
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Traumatología
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-success"></span>
                Activo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Ayer, 18:30
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-danger hover:bg-error-container/60 transition-colors" title="Desactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#f4f6fa] text-neutral-muted flex items-center justify-center font-body-medium text-body-medium font-semibold border border-[#979dac]/30">
                  CT
                </div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Camila Torres</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">camila.torres@gmail.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-[#f4f6fa] text-neutral-muted border border-[#979dac]/30 font-semibold">
                PACIENTE
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Consulta externa
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-success"></span>
                Activo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Hace 3 días
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-danger hover:bg-error-container/60 transition-colors" title="Desactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>
<tr className="h-[52px] bg-surface hover:bg-[#f9f9ff] transition-colors group opacity-90">
<td className="px-space-md py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#f4f6fa] text-neutral-muted flex items-center justify-center font-body-medium text-body-medium font-semibold border border-[#979dac]/30">
                  CM
                </div>
<div className="flex flex-col leading-tight min-w-0">
<span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">Carlos Mendoza</span>
<span className="font-code-id text-code-id text-neutral-muted truncate">carlos.mendoza@gmail.com</span>
</div>
</div>
</td>
<td className="px-space-md py-2">
<span className="inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider bg-[#f4f6fa] text-neutral-muted border border-[#979dac]/30 font-semibold">
                PACIENTE
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
              Consulta externa
            </td>
<td className="px-space-md py-2">
<span className="inline-flex items-center gap-1.5 font-body-medium text-body-medium text-midnight-navy">
<span className="w-2 h-2 rounded-full bg-danger"></span>
                Inactivo
              </span>
</td>
<td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
              Hace 2 semanas
            </td>
<td className="px-space-md py-2 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0466c8]/10 transition-colors" title="Editar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-midnight-navy hover:bg-[#f4f6fa] transition-colors" title="Gestionar permisos" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1.5 rounded-lg text-neutral-muted hover:text-success hover:bg-[#0F9D58]/10 transition-colors" title="Reactivar usuario" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-space-md border-t border-[#979dac]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface">
<div className="flex items-center gap-3">
<span className="font-caption text-caption text-neutral-muted">Mostrando 1–6 de 12 usuarios</span>
<div className="h-4 w-px bg-[#979dac]/30 hidden sm:block"></div>
<div className="flex items-center gap-2">
<span className="font-caption text-caption text-neutral-muted">Filas:</span>
<select className="h-8 px-2 rounded-lg border border-[#7d8597]/35 bg-surface text-caption font-caption text-midnight-navy focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none cursor-pointer">
<option value="6">6 por página</option>
<option selected="" value="10">10 por página</option>
<option value="25">25 por página</option>
<option value="50">50 por página</option>
</select>
</div>
</div>
<div className="flex items-center gap-1 self-center sm:self-auto">
<button className="p-2 rounded-lg text-neutral-muted opacity-40 cursor-not-allowed border border-[#979dac]/30 inline-flex items-center justify-center" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-body-medium text-body-medium flex items-center justify-center font-semibold shadow-sm" type="button">
          1
        </button>
<button className="w-8 h-8 rounded-lg text-midnight-navy hover:bg-[#f9f9ff] font-body-medium text-body-medium flex items-center justify-center border border-[#979dac]/30 transition-colors" type="button">
          2
        </button>
<button className="p-2 rounded-lg text-midnight-navy hover:bg-[#f9f9ff] border border-[#979dac]/30 inline-flex items-center justify-center transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div></main></AppLayout>
    </>
  );
}
