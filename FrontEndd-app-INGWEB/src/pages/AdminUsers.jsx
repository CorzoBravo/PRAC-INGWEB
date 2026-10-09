import { useState, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import { getAllUsers, updateUser } from "../api/users.api";
import Alert from "../components/Alert";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", role: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError("Error al cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditForm({ name: user.name || "", role: user.role });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleSaveEdit = async (id) => {
    try {
      const updated = await updateUser(id, editForm);
      setUsers(users.map(u => (u.id === id ? { ...u, ...updated.user } : u)));
      setEditingId(null);
    } catch (err) {
      setError("Error al actualizar usuario");
    }
  };

  const medicsCount = users.filter(u => u.role === 'MEDICO').length;

  return (
    <AppLayout>
      <main className="w-full pt-16 min-h-screen bg-[#F4F9F8]">
        <div className="max-w-[1280px] mx-auto p-space-lg">
          <div className="flex flex-col w-full gap-space-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col">
                <h1 className="font-headline-page text-headline-page text-midnight-navy font-bold">Usuarios</h1>
                <p className="font-body-default text-body-default text-neutral-muted mt-0.5">Administra el personal médico, administrativo y accesos a la plataforma</p>
              </div>
            </div>

            {error && <Alert type="error">{error}</Alert>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface rounded-xl border border-[#7C9692]/30 shadow-sm p-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Total Usuarios</span>
                  <span className="font-headline-page text-headline-page text-darkest-slate mt-1 font-bold">{users.length}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F766E]/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">group</span>
                </div>
              </div>
              <div className="bg-surface rounded-xl border border-[#7C9692]/30 shadow-sm p-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-badge-label text-badge-label uppercase text-neutral-muted tracking-wider">Cuerpo Médico</span>
                  <span className="font-headline-page text-headline-page text-darkest-slate mt-1 font-bold">{medicsCount}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F766E]/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">stethoscope</span>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-[#7C9692]/30 shadow-sm overflow-hidden">
              <div className="p-space-md border-b border-[#7C9692]/25 flex items-center justify-between bg-surface">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#0F766E]/10 font-badge-label text-badge-label text-primary font-semibold">
                  {users.length} usuarios registrados
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[840px]">
                  <thead>
                    <tr className="bg-[#F4F9F8] h-10 border-b border-[#7C9692]/25">
                      <th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Usuario</th>
                      <th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Email</th>
                      <th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Rol</th>
                      <th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider">Fecha Registro</th>
                      <th className="px-space-md font-table-header text-table-header uppercase text-neutral-muted tracking-wider text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#7C9692]/20">
                    {loading ? (
                      <tr><td colSpan="5" className="text-center py-4">Cargando usuarios...</td></tr>
                    ) : users.length === 0 ? (
                      <tr><td colSpan="5" className="text-center py-4">No hay usuarios</td></tr>
                    ) : users.map(user => (
                      <tr key={user.id} className="h-[52px] bg-surface hover:bg-[#F4F9F8] transition-colors group">
                        <td className="px-space-md py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[18px]">person</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              {editingId === user.id ? (
                                <input 
                                  value={editForm.name} 
                                  onChange={(e) => setEditForm({...editForm, name: e.target.value})} 
                                  placeholder="Nombre..." 
                                  className="border rounded px-1"
                                />
                              ) : (
                                <span className="font-body-medium text-body-medium text-midnight-navy font-semibold truncate">{user.name || "Sin nombre"}</span>
                              )}
                              <span className="font-code-id text-code-id text-neutral-muted truncate">ID: {user.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-space-md py-2 font-body-default text-body-default text-on-surface-variant">
                          {user.email}
                        </td>
                        <td className="px-space-md py-2">
                          {editingId === user.id ? (
                            <select 
                              value={editForm.role} 
                              onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                              className="border rounded px-1 text-sm"
                            >
                              <option value="PACIENTE">PACIENTE</option>
                              <option value="MEDICO">MEDICO</option>
                              <option value="ADMIN">ADMIN</option>
                            </select>
                          ) : (
                            <span className={`inline-flex items-center h-6 px-2.5 rounded-full font-badge-label text-badge-label tracking-wider font-semibold
                              ${user.role === 'ADMIN' ? 'bg-[#0F766E]/10 text-primary border border-primary/25' : 
                                user.role === 'MEDICO' ? 'bg-secondary-fixed/30 text-on-secondary-container border border-secondary/25' : 
                                'bg-[#F4F9F8] text-neutral-muted border border-[#7C9692]/30'}
                            `}>
                              {user.role}
                            </span>
                          )}
                        </td>
                        <td className="px-space-md py-2 font-body-default text-body-default text-neutral-muted whitespace-nowrap">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-space-md py-2 text-right whitespace-nowrap">
                          {editingId === user.id ? (
                            <div className="inline-flex items-center gap-1">
                              <button onClick={() => handleSaveEdit(user.id)} className="p-1.5 rounded-lg text-success hover:bg-success/10" title="Guardar">
                                <span className="material-symbols-outlined text-[18px]">check</span>
                              </button>
                              <button onClick={handleCancelEdit} className="p-1.5 rounded-lg text-danger hover:bg-danger/10" title="Cancelar">
                                <span className="material-symbols-outlined text-[18px]">close</span>
                              </button>
                            </div>
                          ) : (
                            <button onClick={() => handleEditClick(user)} className="p-1.5 rounded-lg text-neutral-muted hover:text-primary hover:bg-[#0F766E]/10 transition-colors" title="Editar usuario">
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
