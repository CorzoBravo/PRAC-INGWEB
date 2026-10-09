import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { register } from "../api/users.api";
import { getApiError } from "../api/errors";
import AuthShell from "../components/AuthShell";
import FormField from "../components/FormField";
import Alert from "../components/Alert";

export default function Register() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setFieldErrors({ confirm: "Las contraseñas no coinciden" });
      return;
    }
    setFieldErrors({});
    setLoading(true);
    try {
      await register(email.trim(), password);
      navigate("/login", { replace: true, state: { registered: true } });
    } catch (err) {
      const parsed = getApiError(err, "No se pudo crear la cuenta.");
      setError(parsed.message);
      setFieldErrors(parsed.fieldErrors);
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <div className="space-y-1 mb-7">
        <h2 className="font-headline-page text-headline-page text-midnight-navy font-semibold">Crear cuenta de paciente</h2>
        <p className="font-body-default text-body-default text-neutral-muted">
          Regístrate para agendar y consultar tus citas médicas
        </p>
      </div>

      <Alert type="error">{error}</Alert>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField
          id="email"
          label="Correo electrónico"
          icon="mail"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={fieldErrors.email}
        />
        <FormField
          id="password"
          label="Contraseña"
          icon="lock"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={fieldErrors.password}
        />
        <FormField
          id="confirm"
          label="Confirmar contraseña"
          icon="lock_reset"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={fieldErrors.confirm}
        />
        <div className="pt-2">
          <button
            disabled={loading}
            aria-busy={loading}
            className="w-full h-10 rounded-lg bg-primary hover:bg-brand-blue-hover active:bg-brand-blue-active disabled:opacity-70 disabled:cursor-not-allowed font-body-medium text-body-medium text-on-primary flex items-center justify-center gap-2 transition-colors shadow-sm font-medium"
            type="submit"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[18px]" aria-hidden="true">progress_activity</span>
                Creando cuenta...
              </>
            ) : (
              "Crear cuenta"
            )}
          </button>
        </div>
      </form>

      <p className="mt-6 text-center font-caption text-caption text-neutral-muted">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="font-medium text-primary hover:text-brand-blue-hover transition-colors">
          Iniciar sesión
        </Link>
      </p>
    </AuthShell>
  );
}
