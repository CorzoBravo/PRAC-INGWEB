import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { getAppointments } from "../api/appointments.api";
import { getDoctors } from "../api/users.api";
import { useAuth } from "../auth/useAuth";
import Alert from "../components/Alert";

export default function Appointments() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      getAppointments(),
      getDoctors()
    ])
    .then(([appts, docs]) => {
      setAppointments(appts);
      setDoctors(docs);
    })
    .catch((err) => {
      console.error(err);
      setError("Error al cargar las citas");
    })
    .finally(() => setLoading(false));
  }, []);

  const getDoctorName = (id) => {
    const doc = doctors.find(d => d.id === id);
    return doc ? (doc.name || doc.email) : `Médico #${id}`;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'SCHEDULED':
        return (
          <span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-warning border border-[#B54708]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
            Agendada
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#EDFDF2] text-success border border-[#0F9D58]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
            Completada
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1.5 h-6 px-2 rounded-full font-badge-label text-badge-label uppercase tracking-wider bg-[#FEF3F2] text-danger border border-[#D92D20]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-danger"></span>
            Cancelada
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <AppLayout>
      <main className="w-full pt-16 min-h-screen bg-[#F4F9F8]">
        <div className="max-w-[1280px] mx-auto p-space-lg">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="font-headline-page text-headline-page text-[#0B1F2A]">Citas</h1>
                  <p className="font-body-default text-body-default text-[#52666F]">Gestiona y da seguimiento a las consultas médicas</p>
                </div>
                <div className="flex items-center gap-3">
                  {(user?.role === 'ADMIN' || user?.role === 'PACIENTE' || user?.role === 'MEDICO') && (
                    <Link to="/appointments/new" className="h-10 px-4 rounded-lg bg-[#0F766E] hover:bg-[#115E59] text-white font-body-medium text-body-medium flex items-center gap-2 transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                      <span>Nueva cita</span>
                    </Link>
                  )}
                </div>
              </div>

              {error && <Alert type="error">{error}</Alert>}

              <div className="bg-surface rounded-xl border border-[#6B7F83]/30 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="h-10 bg-[#F4F9F8] border-b border-[#6B7F83]/25">
                        <th className="px-5 font-table-header text-table-header text-[#334E55] uppercase tracking-wider">ID Cita</th>
                        <th className="px-5 font-table-header text-table-header text-[#334E55] uppercase tracking-wider">Paciente ID</th>
                        <th className="px-5 font-table-header text-table-header text-[#334E55] uppercase tracking-wider">Médico</th>
                        <th className="px-5 font-table-header text-table-header text-[#334E55] uppercase tracking-wider">Fecha y Hora</th>
                        <th className="px-5 font-table-header text-table-header text-[#334E55] uppercase tracking-wider">Estado</th>
                        <th className="px-5 text-right font-table-header text-table-header text-[#334E55] uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#7C9692]/20">
                      {loading ? (
                        <tr>
                          <td colSpan="6" className="text-center py-4 text-[#52666F]">Cargando citas...</td>
                        </tr>
                      ) : appointments.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center py-4 text-[#52666F]">No hay citas registradas.</td>
                        </tr>
                      ) : appointments.map((appt) => (
                        <tr key={appt.id} className="h-[52px] hover:bg-[#F4F9F8] transition-colors">
                          <td className="px-5 py-2">
                            <span className="font-code-id text-code-id text-[#52666F]">#{appt.id}</span>
                          </td>
                          <td className="px-5 py-2">
                            <span className="font-body-medium text-body-medium text-[#0B1F2A]">Paciente #{appt.patientId}</span>
                          </td>
                          <td className="px-5 py-2">
                            <span className="font-body-default text-body-default text-[#334E55]">{getDoctorName(appt.doctorId)}</span>
                          </td>
                          <td className="px-5 py-2 whitespace-nowrap">
                            <span className="font-body-default text-body-default text-[#0B1F2A]">
                              {new Date(appt.date).toLocaleString()}
                            </span>
                          </td>
                          <td className="px-5 py-2 whitespace-nowrap">
                            {getStatusBadge(appt.status)}
                          </td>
                          <td className="px-5 py-2 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1">
                              <Link to={`/appointments/${appt.id}`} className="p-1.5 rounded-md text-[#52666F] hover:text-[#0B1F2A] hover:bg-[#E6F5F3] transition-colors" title="Ver detalles">
                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
