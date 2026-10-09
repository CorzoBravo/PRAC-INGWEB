import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { getApiError } from "../api/errors";
import AuthShell from "../components/AuthShell";
import FormField from "../components/FormField";
import Alert from "../components/Alert";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [notice, setNotice] = useState("");

  const redirectTo = location.state?.from?.pathname || "/dashboard";
  const registered = location.state?.registered;

  if (isAuthenticated && !loading) return <Navigate to={redirectTo} replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNotice("");
    setFieldErrors({});
    try {
      await login(email.trim(), password, remember);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      const parsed = getApiError(err, "No se pudo iniciar sesión.");
      setError(parsed.message);
      setFieldErrors(parsed.fieldErrors);
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <div className="space-y-1 mb-7">
        <h2 className="font-headline-page text-headline-page text-midnight-navy font-semibold">Iniciar sesión</h2>
        <p className="font-body-default text-body-default text-neutral-muted">
          Ingresa tus credenciales para acceder a la plataforma
        </p>
      </div>

      {registered && <Alert type="success">Cuenta creada. Ya puedes iniciar sesión.</Alert>}
      <Alert type="error">{error}</Alert>
      <Alert type="info">{notice}</Alert>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate={false}>
        <FormField
          id="email"
          label="Correo electrónico"
          icon="mail"
          type="email"
          autoComplete="username"
          placeholder="medico@clinica.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={fieldErrors.email}
        />
        <FormField
          id="password"
          label="Contraseña"
          icon="lock"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={fieldErrors.password}
          right={
            <button
              type="button"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-border-muted hover:text-darkest-slate transition-colors focus:outline-none focus-visible:text-primary"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          }
        />

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input
              className="w-4 h-4 rounded accent-primary cursor-pointer"
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span className="font-caption text-caption text-neutral-muted">Recordarme</span>
          </label>
          
        </div>

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
                Ingresando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </div>
      </form>

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full h-[1px] bg-border-light/40" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-surface px-3 font-caption text-caption text-neutral-muted uppercase">o</span>
        </div>
      </div>

      <Link
        to="/registro"
        className="w-full h-10 rounded-lg bg-surface-container-low hover:bg-surface-container active:bg-surface-container-high border border-outline-variant/60 font-body-medium text-body-medium text-midnight-navy flex items-center justify-center transition-colors"
      >
        Crear cuenta de paciente
      </Link>

      <div className="mt-6 pt-2 flex items-center justify-center space-x-1.5 text-center">
        <span className="material-symbols-outlined text-[16px] text-border-muted" aria-hidden="true">verified_user</span>
        <p className="font-caption text-caption text-neutral-muted leading-tight">
          Acceso exclusivo y seguro para personal autorizado y pacientes.
        </p>
      </div>
    </AuthShell>
  );
}
