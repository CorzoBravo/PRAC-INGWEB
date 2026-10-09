import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

// Guarda por sesión y, opcionalmente, por rol: <ProtectedRoute roles={["ADMIN"]}>
export default function ProtectedRoute({ roles, children }) {
  const { isAuthenticated, role } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  if (roles && !roles.includes(role)) return <Navigate to="/dashboard" replace />;
  return children;
}
