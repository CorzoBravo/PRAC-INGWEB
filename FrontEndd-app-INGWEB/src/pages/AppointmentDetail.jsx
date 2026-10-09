import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { getAppointmentById, updateAppointmentStatus } from "../api/appointments.api";
import { getDoctors } from "../api/users.api";
import { useAuth } from "../auth/useAuth";
import Alert from "../components/Alert";

export default function AppointmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [appointment, setAppointment] = useState(null);
  const [doctorName, setDoctorName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusLoading, setStatusLoading] = useState(false);

  useEffect(() => {
    Promise.all([
      getAppointmentById(id),
      getDoctors()
    ])
    .then(([appt, docs]) => {
      setAppointment(appt);
      const doc = docs.find(d => d.id === appt.doctorId);
      setDoctorName(doc ? (doc.name || doc.email) : `Médico #${appt.doctorId}`);
    })
    .catch((err) => {
      console.error(err);
      setError("Error al cargar la cita.");
    })
    .finally(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (newStatus) => {
    if (!window.confirm(`¿Estás seguro de cambiar el estado a ${newStatus}?`)) return;
    setStatusLoading(true);
    try {
      const updated = await updateAppointmentStatus(id, newStatus);
      setAppointment(updated);
    } catch (err) {
      setError(err.response?.data?.error || "Error al actualizar el estado");
    } finally {
      setStatusLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'SCHEDULED':
        return (
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full font-badge-label text-[13px] uppercase tracking-wider bg-[#FEF3F2] text-warning border border-[#B54708]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
            Agendada
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full font-badge-label text-[13px] uppercase tracking-wider bg-[#EDFDF2] text-success border border-[#0F9D58]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
            Completada
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full font-badge-label text-[13px] uppercase tracking-wider bg-[#FEF3F2] text-danger border border-[#D92D20]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-danger"></span>
            Cancelada
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  if (loading) {
    return (
      <AppLayout>
        <main className="w-full pt-16 min-h-screen bg-[#F4F9F8] p-space-lg">
          <p className="text-center text-[#52666F]">Cargando detalle...</p>
        </main>
      </AppLayout>
    );
  }

  if (!appointment) {
    return (
      <AppLayout>
        <main className="w-full pt-16 min-h-screen bg-[#F4F9F8] p-space-lg">
          <Alert type="error">{error || "Cita no encontrada"}</Alert>
          <Link to="/appointments" className="text-[#0F766E] mt-4 inline-block">Volver a citas</Link>
        </main>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <main className="w-full pt-16 min-h-screen bg-[#F4F9F8]">
        <div className="max-w-[1280px] mx-auto p-space-lg">
          <div className="flex flex-col max-w-3xl mx-auto gap-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link to="/appointments" className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#6B7F83]/30 bg-surface text-[#52666F] hover:bg-[#F4F9F8] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h1 className="font-headline-page text-headline-page text-[#0B1F2A]">Detalle de Cita</h1>
                    <span className="font-code-id text-code-id text-[#52666F] mt-1">#{appointment.id}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {appointment.status === 'SCHEDULED' && (
                  <>
                    <button 
                      onClick={() => handleStatusChange('CANCELLED')}
                      disabled={statusLoading}
                      className="h-10 px-4 rounded-lg border border-danger/30 bg-surface text-danger hover:bg-error-container font-body-medium text-body-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-[18px]">cancel</span>
                      <span>Cancelar</span>
                    </button>
                    {(user?.role === 'ADMIN' || user?.role === 'MEDICO') && (
                      <button 
                        onClick={() => handleStatusChange('COMPLETED')}
                        disabled={statusLoading}
                        className="h-10 px-4 rounded-lg bg-[#0F766E] text-white hover:bg-[#115E59] font-body-medium text-body-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                      >
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        <span>Completar</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            {error && <Alert type="error">{error}</Alert>}

            <div className="bg-surface rounded-xl border border-[#6B7F83]/30 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-[#6B7F83]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F4F9F8]/50">
                <div className="flex flex-col gap-1">
                  <span className="font-badge-label text-badge-label text-[#52666F] uppercase tracking-wider">Fecha y Hora</span>
                  <div className="flex items-center gap-2 font-body-large text-body-large text-[#0B1F2A] font-semibold">
                    <span className="material-symbols-outlined text-[#0F766E]">calendar_clock</span>
                    <span>{new Date(appointment.date).toLocaleString()}</span>
                  </div>
                </div>
                <div>{getStatusBadge(appointment.status)}</div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-headline-section text-headline-section text-[#0B1F2A] mb-4">Información del Paciente</h3>
                    <div className="flex flex-col gap-4 bg-[#F4F9F8] p-4 rounded-lg border border-[#6B7F83]/10">
                      <div className="flex flex-col gap-1">
                        <span className="font-caption text-caption text-[#52666F]">ID Paciente</span>
                        <span className="font-body-medium text-body-medium text-[#0B1F2A]">#{appointment.patientId}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-headline-section text-headline-section text-[#0B1F2A] mb-4">Detalles Médicos</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined">stethoscope</span>
                        </div>
                        <div className="flex flex-col pt-0.5">
                          <span className="font-caption text-caption text-[#52666F] mb-0.5">Médico Tratante</span>
                          <span className="font-body-medium text-body-medium text-[#0B1F2A]">{doctorName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline-section text-headline-section text-[#0B1F2A] mb-4">Notas de la Cita</h3>
                    <div className="bg-[#F4F9F8] rounded-lg border border-[#6B7F83]/20 p-4 min-h-[120px]">
                      <p className="font-body-default text-body-default text-[#334E55] whitespace-pre-wrap leading-relaxed">
                        {appointment.notes || "No hay notas adicionales."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
