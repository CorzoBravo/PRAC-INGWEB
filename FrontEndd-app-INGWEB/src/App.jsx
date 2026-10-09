import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import NewAppointment from "./pages/NewAppointment";
import AppointmentDetail from "./pages/AppointmentDetail";
import AdminUsers from "./pages/AdminUsers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
      <Route
        path="/appointments/new"
        element={<ProtectedRoute roles={["ADMIN", "MEDICO"]}><NewAppointment /></ProtectedRoute>}
      />
      <Route path="/appointments/:id" element={<ProtectedRoute><AppointmentDetail /></ProtectedRoute>} />
      <Route path="/admin/users" element={<ProtectedRoute roles={["ADMIN"]}><AdminUsers /></ProtectedRoute>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
