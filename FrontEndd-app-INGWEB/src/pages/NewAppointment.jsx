import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import FormField from "../components/FormField";
import Alert from "../components/Alert";
import { createAppointment } from "../api/appointments.api";
import { getDoctors } from "../api/users.api";
import { useAuth } from "../auth/useAuth";

export default function NewAppointment() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState(""); // Only used if ADMIN
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDoctors()
      .then(docs => setDoctors(docs))
      .catch(err => console.error("Error al cargar médicos:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doctorId || !date || !time) {
      setError("Por favor completa los campos obligatorios.");
      return;
    }
    
    // Combine date and time to ISO datetime
    const datetimeStr = `${date}T${time}:00`;
    let isoDate;
    try {
      isoDate = new Date(datetimeStr).toISOString();
    } catch(err) {
      setError("Fecha u hora inválida.");
      return;
    }

    // Determine patient ID
    const pId = user.role === 'PACIENTE' ? user.userId : Number(patientId);

    if (user.role !== 'PACIENTE' && !pId) {
      setError("Debe proporcionar un ID de paciente.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await createAppointment({
        patientId: pId,
        doctorId: Number(doctorId),
        date: isoDate,
        notes: notes
      });
      navigate("/appointments");
    } catch (err) {
      setError("Error al crear la cita. Verifica la información.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <main className="w-full pt-16 min-h-screen bg-[#F4F9F8]">
        <div className="max-w-[1280px] mx-auto p-space-lg">
          <div className="flex flex-col max-w-2xl mx-auto gap-6">
            <div className="flex items-center gap-3">
              <Link to="/appointments" className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#6B7F83]/30 bg-surface text-[#52666F] hover:bg-[#F4F9F8] transition-colors">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              </Link>
              <div>
                <h1 className="font-headline-page text-headline-page text-[#0B1F2A]">Nueva cita</h1>
                <p className="font-body-default text-body-default text-[#52666F]">Agendar una nueva consulta</p>
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-[#6B7F83]/30 p-6 sm:p-8 shadow-sm">
              {error && <Alert type="error">{error}</Alert>}
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {user?.role !== 'PACIENTE' && (
                  <FormField
                    id="patientId"
                    label="ID del Paciente *"
                    type="number"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Ej. 1"
                  />
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="font-badge-label text-badge-label text-[#52666F] uppercase tracking-wider">
                    Médico *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                      className="w-full h-11 pl-4 pr-10 rounded-lg border border-[#6B7F83]/40 bg-surface text-body-default font-body-default text-[#0B1F2A] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 appearance-none transition-all"
                    >
                      <option value="">Selecciona un médico</option>
                      {doctors.map(doc => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name ? `${doc.name} (${doc.email})` : doc.email}
                        </option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[20px] text-[#52666F] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="date"
                    label="Fecha *"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <FormField
                    id="time"
                    label="Hora *"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="notes" className="font-badge-label text-badge-label text-[#52666F] uppercase tracking-wider">
                    Notas adicionales
                  </label>
                  <textarea
                    id="notes"
                    rows="4"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-4 rounded-lg border border-[#6B7F83]/40 bg-surface text-body-default font-body-default text-[#0B1F2A] placeholder:text-[#52666F] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 resize-none transition-all"
                    placeholder="Escribe aquí cualquier observación o nota..."
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#6B7F83]/20">
                  <Link to="/appointments" className="h-11 px-6 rounded-lg text-[#0F766E] font-body-medium text-body-medium hover:bg-[#0F766E]/10 flex items-center justify-center transition-colors">
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-11 px-6 rounded-lg bg-[#0F766E] hover:bg-[#115E59] active:bg-[#0D4D49] text-white font-body-medium text-body-medium flex items-center justify-center transition-colors shadow-sm disabled:opacity-50"
                  >
                    {loading ? 'Guardando...' : 'Agendar cita'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
