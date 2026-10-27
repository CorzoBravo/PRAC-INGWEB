import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import AppLayout from "../components/layout/AppLayout";
import { getAppointments } from "../api/appointments.api";
import { getDoctors } from "../api/users.api";

export default function Dashboard() {
  const { user, role } = useAuth();
  const name = (user?.email || "").split("@")[0];
  const isPatient = role === "PACIENTE";

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getAppointments(),
      getDoctors()
    ]).then(([appts, docs]) => {
      setAppointments(appts || []);
      setDoctors(docs || []);
    }).catch((err) => {
      console.error("Error cargando dashboard:", err);
    }).finally(() => setLoading(false));
  }, []);

  const getDoctorName = (id) => {
    const doc = doctors.find(d => d.id === id);
    return doc ? (doc.name || doc.email) : `Médico #${id}`;
  };

  // Métricas generales
  const todayStr = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(a => a.date && a.date.startsWith(todayStr));
  const pendingAppointments = appointments.filter(a => a.status === 'SCHEDULED');
  const completedAppointments = appointments.filter(a => a.status === 'COMPLETED');
  const cancelledAppointments = appointments.filter(a => a.status === 'CANCELLED');
  const uniquePatients = new Set(appointments.map(a => a.patientId)).size;

  const totalAppts = appointments.length;
  const completedPercent = totalAppts ? Math.round((completedAppointments.length / totalAppts) * 100) : 0;
  const pendingPercent = totalAppts ? Math.round((pendingAppointments.length / totalAppts) * 100) : 0;
  const cancelledPercent = totalAppts ? Math.round((cancelledAppointments.length / totalAppts) * 100) : 0;

  const sortedUpcoming = [...pendingAppointments].sort((a, b) => new Date(a.date) - new Date(b.date));
  const sortedToday = [...todayAppointments].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 5);

  return (
    <AppLayout>
      <main className="w-full pt-16 min-h-screen bg-[#F4F9F8]">
        <div className="max-w-[1280px] mx-auto p-space-lg">
          <div className="flex flex-col w-full gap-space-lg">

            {/* Cabecera común adaptada por rol */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <h1 className="font-headline-page text-headline-page text-midnight-navy font-bold">
                    Hola, {name}
                  </h1>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    isPatient ? 'bg-blue-100 text-blue-800' : role === 'MEDICO' ? 'bg-teal-100 text-teal-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {role}
                  </span>
                </div>
                <p className="font-body-default text-body-default text-neutral-muted">
                  {isPatient
                    ? "Portal del Paciente | Consulta tus citas médicas y agenda nuevas atenciones"
                    : "Panel de Gestión Clínica | Métricas operativas y citas médicas de hoy"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/appointments/new"
                  className="h-10 px-4 rounded-lg bg-[#0F766E] text-white hover:bg-[#115E59] transition-colors flex items-center gap-2 font-body-medium text-body-medium shadow-sm font-medium"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">add</span>
                  {isPatient ? "Agendar mi cita" : "Nueva cita"}
                </Link>
              </div>
            </div>

            {loading ? (
              <div className="py-12 flex justify-center items-center text-neutral-muted">
                <p>Cargando información del portal...</p>
              </div>
            ) : isPatient ? (
              /* ========================================================= */
              /* VISTA EXCLUSIVA PARA PACIENTE (Sin métricas administrativas) */
              /* ========================================================= */
              <>
                {/* Tarjetas personales del paciente */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">
                        Mis Citas Próximas
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-warning">
                        <span className="material-symbols-outlined text-[22px]">event</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">
                        {pendingAppointments.length}
                      </span>
                      <span className="text-xs text-neutral-muted">Pendientes</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">
                        Citas Atendidas
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-success">
                        <span className="material-symbols-outlined text-[22px]">check_circle</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">
                        {completedAppointments.length}
                      </span>
                      <span className="text-xs text-neutral-muted">Historial médico</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">
                        Médicos Disponibles
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#E6F5F3] flex items-center justify-center text-[#0F766E]">
                        <span className="material-symbols-outlined text-[22px]">medical_services</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">
                        {doctors.length}
                      </span>
                      <span className="text-xs text-neutral-muted">En staff</span>
                    </div>
                  </div>
                </div>

                {/* Lista de citas del paciente */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                  <div className="lg:col-span-8 bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col shadow-sm">
                    <div className="flex items-center justify-between mb-space-md pb-2 border-b border-[#7C9692]/20">
                      <div className="flex items-center gap-2">
                        <h2 className="font-title-section text-title-section text-midnight-navy font-bold">
                          Mis Próximas Consultas
                        </h2>
                        <span className="px-2 py-0.5 rounded-full bg-[#E6F5F3] font-badge-label text-badge-label text-[#0F766E] font-semibold">
                          {sortedUpcoming.length} programadas
                        </span>
                      </div>
                      <Link
                        className="font-body-medium text-body-medium text-[#0F766E] hover:text-[#115E59] inline-flex items-center gap-1 transition-colors font-semibold"
                        to="/appointments"
                      >
                        Ver todas
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>

                    <div className="flex flex-col divide-y divide-[#7C9692]/20">
                      {sortedUpcoming.length === 0 ? (
                        <div className="py-8 text-center flex flex-col items-center gap-3">
                          <span className="material-symbols-outlined text-4xl text-neutral-muted">event_busy</span>
                          <p className="text-[#52666F]">No tienes consultas programadas próximamente.</p>
                          <Link
                            to="/appointments/new"
                            className="text-sm font-semibold text-[#0F766E] hover:underline"
                          >
                            Agendar una consulta con un especialista →
                          </Link>
                        </div>
                      ) : (
                        sortedUpcoming.slice(0, 5).map(appt => (
                          <div key={appt.id} className="h-[64px] flex items-center justify-between px-2 hover:bg-[#F4F9F8] transition-colors rounded-lg">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-full bg-[#E6F5F3] text-[#0F766E] flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[20px]">stethoscope</span>
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">
                                  {getDoctorName(appt.doctorId)}
                                </span>
                                <span className="text-xs text-neutral-muted truncate">
                                  {appt.notes || "Consulta médica general"}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                              <div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
                                {new Date(appt.date).toLocaleDateString()} {new Date(appt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                              <span className="h-6 px-2.5 rounded-full font-badge-label text-badge-label flex items-center gap-1 bg-[#FEF3F2] text-warning border border-warning/20">
                                {appt.status}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Panel lateral informativo para el paciente */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                      <div>
                        <h2 className="font-title-section text-title-section text-midnight-navy font-bold pb-2 border-b border-[#7C9692]/20">
                          Información al Paciente
                        </h2>
                        <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-muted">
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-teal-600 text-[18px] shrink-0 mt-0.5">check</span>
                            <span>Llega 15 minutos antes de la hora de tu cita médica.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-teal-600 text-[18px] shrink-0 mt-0.5">check</span>
                            <span>Trae tu documento de identidad y exámenes previos si aplica.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-teal-600 text-[18px] shrink-0 mt-0.5">check</span>
                            <span>Puedes cancelar citas programadas desde la sección "Mis Citas".</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* ========================================================= */
              /* VISTA ADMINISTRATIVA / MÉDICA (Métricas operativas)      */
              /* ========================================================= */
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Citas Hoy</span>
                      <div className="w-10 h-10 rounded-lg bg-[#E6F5F3] flex items-center justify-center text-[#0F766E]">
                        <span className="material-symbols-outlined text-[22px]">calendar_today</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">{todayAppointments.length}</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Pendientes (Total)</span>
                      <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-warning">
                        <span className="material-symbols-outlined text-[22px]">schedule</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">{pendingAppointments.length}</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Completadas (Total)</span>
                      <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-success">
                        <span className="material-symbols-outlined text-[22px]">check_circle</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">{completedAppointments.length}</span>
                    </div>
                  </div>

                  <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-badge-label text-badge-label text-neutral-dark uppercase tracking-wider font-semibold">Pacientes (Históricos)</span>
                      <div className="w-10 h-10 rounded-lg bg-[#E6F5F3] flex items-center justify-center text-[#0F766E]">
                        <span className="material-symbols-outlined text-[22px]">group</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="font-headline-hero text-headline-hero text-midnight-navy font-bold">{uniquePatients}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                  <div className="lg:col-span-8 bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col shadow-sm">
                    <div className="flex items-center justify-between mb-space-md pb-2 border-b border-[#7C9692]/20">
                      <div className="flex items-center gap-2">
                        <h2 className="font-title-section text-title-section text-midnight-navy font-bold">Citas de hoy</h2>
                        <span className="px-2 py-0.5 rounded-full bg-[#E6F5F3] font-badge-label text-badge-label text-[#0F766E] font-semibold">{todayAppointments.length} registros</span>
                      </div>
                      <Link className="font-body-medium text-body-medium text-[#0F766E] hover:text-[#115E59] inline-flex items-center gap-1 transition-colors font-semibold" to="/appointments">
                        Ver todas
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                    
                    <div className="flex flex-col divide-y divide-[#7C9692]/20">
                      {sortedToday.length === 0 ? (
                        <p className="py-4 text-[#52666F]">No hay citas para hoy.</p>
                      ) : (
                        sortedToday.map(appt => (
                          <div key={appt.id} className="h-[52px] flex items-center justify-between px-2 hover:bg-[#F4F9F8] transition-colors rounded-lg">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 rounded-full bg-[#E6F5F3] text-[#0F766E] font-body-medium text-body-medium flex items-center justify-center shrink-0 font-semibold">
                                P{appt.patientId}
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="font-body-medium text-body-medium text-darkest-slate truncate font-medium">Paciente #{appt.patientId}</span>
                                <span className="font-code-id text-code-id text-neutral-muted">APP-{appt.id}</span>
                              </div>
                            </div>
                            <div className="hidden md:flex flex-col text-left px-4 min-w-0">
                              <span className="font-body-default text-body-default text-midnight-navy truncate">{getDoctorName(appt.doctorId)}</span>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                              <div className="font-code-id text-code-id text-midnight-navy flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px] text-neutral-muted">schedule</span>
                                {new Date(appt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                              <span className={`h-6 px-2.5 rounded-full font-badge-label text-badge-label flex items-center gap-1 ${appt.status === 'COMPLETED' ? 'bg-[#EDFDF2] text-success border border-success/20' : appt.status === 'CANCELLED' ? 'bg-[#FEF3F2] text-danger border border-danger/20' : 'bg-[#FEF3F2] text-warning border border-warning/20'}`}>
                                {appt.status}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-surface rounded-xl border border-[#7C9692]/30 p-space-lg flex flex-col justify-between h-full shadow-sm">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#7C9692]/20">
                          <h2 className="font-title-section text-title-section text-midnight-navy font-bold">Estado de citas</h2>
                          <span className="font-caption text-caption text-neutral-muted">Histórico global</span>
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                          <div className="w-full h-3 bg-[#F4F9F8] rounded-full overflow-hidden flex">
                            <div className="bg-success h-full" style={{width: `${completedPercent}%`}}></div>
                            <div className="bg-warning h-full" style={{width: `${pendingPercent}%`}}></div>
                            <div className="bg-danger h-full" style={{width: `${cancelledPercent}%`}}></div>
                          </div>
                          <div className="flex justify-between font-caption text-caption text-neutral-muted">
                            <span>Total: {totalAppts} citas</span>
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
                              <span className="font-body-medium text-body-medium text-midnight-navy font-semibold">{completedAppointments.length}</span>
                              <span className="font-caption text-caption text-neutral-muted">({completedPercent}%)</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-body-default">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-warning"></span>
                              <span className="font-body-default text-body-default text-midnight-navy">Agendadas</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-body-medium text-body-medium text-midnight-navy font-semibold">{pendingAppointments.length}</span>
                              <span className="font-caption text-caption text-neutral-muted">({pendingPercent}%)</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-body-default">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-danger"></span>
                              <span className="font-body-default text-body-default text-midnight-navy">Canceladas</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-body-medium text-body-medium text-midnight-navy font-semibold">{cancelledAppointments.length}</span>
                              <span className="font-caption text-caption text-neutral-muted">({cancelledPercent}%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </main>
    </AppLayout>
  );
}
