import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await api.post("/users/login", { email, password });
      localStorage.setItem("token", response.data.token);
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-space-lg">
      <div className="flex flex-col w-full items-center justify-center py-6 px-4">
        <div className="w-full max-w-[980px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-7 pr-0 lg:pr-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img alt="Sistema Clinicas Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wr25McdkOxWD2vzGzyR0l2Brhp-1S3jIH5x-dOxKoiU4H6BImGxuTnfuQWsdVr917lzupvBT530d-RIUMtTGE1aFfHsdg1O-c9R3rg7MFqPnLz8gHUOlTETEsg2kD45dC3m7a8pG4tWBtFHQnDW9ktRILBcU4S9JRHLNTzZtw6aF3cDJINTlXFkkzIfGpBRLPcNTySEbQIhibPP7Q6w1yFxNU8YdIkF8Ubt4v5GGbGqzMh67pSt5-yd04n" />
              </div>
              <span className="font-title-modal text-title-modal text-midnight-navy font-semibold tracking-tight">Sistema Clínicas</span>
            </div>
            <div className="space-y-3">
              <h1 className="font-headline-hero text-headline-hero text-midnight-navy tracking-tight font-semibold">
                Gestión integral de citas y pacientes
              </h1>
              <p className="font-body-default text-body-default text-neutral-muted leading-relaxed">
                Agenda, gestiona y da seguimiento a las consultas de tu clínica en una plataforma m�dica unificada.
              </p>
            </div>
            <div className="space-y-4 pt-1">
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-surface-tint-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">calendar_clock</span>
                </div>
                <div className="pt-0.5">
                  <p className="font-body-medium text-body-medium text-midnight-navy">Agenda y seguimiento de consultas</p>
                  <p className="font-caption text-caption text-neutral-muted">Monitoreo y actualización continua en tiempo real.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-surface-tint-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">clinical_notes</span>
                </div>
                <div className="pt-0.5">
                  <p className="font-body-medium text-body-medium text-midnight-navy">Historial clínico y registro</p>
                  <p className="font-caption text-caption text-neutral-muted">Expediente digital seguro para cada paciente.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-surface-tint-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                </div>
                <div className="pt-0.5">
                  <p className="font-body-medium text-body-medium text-midnight-navy">Control de roles y accesos seguros</p>
                  <p className="font-caption text-caption text-neutral-muted">Permisos granulares para personal administrativo y m�dico.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-badge-label font-badge-label bg-surface-tint-container text-primary font-semibold border border-surface-container-highest">
                HIPAA & GDPR COMPLIANT
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-badge-label font-badge-label bg-surface-tint-container text-primary font-semibold border border-surface-container-highest">
                TLS 1.3 ENCRYPTED
              </span>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-surface rounded-xl p-8 sm:p-9 shadow-sm border border-outline-variant/50 flex flex-col">
              <div className="space-y-1 mb-7">
                <h2 className="font-headline-page text-headline-page text-midnight-navy font-semibold">Iniciar sesión</h2>
                <p className="font-body-default text-body-default text-neutral-muted">Ingresa tus credenciales para acceder a la plataforma</p>
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-1.5">
                  <label className="block font-caption text-caption font-medium text-darkest-slate" htmlFor="email">
                    Correo electrónico
                  </label>
                  <div className="relative rounded-lg bg-surface">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-border-muted">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </div>
                    <input 
                      className="w-full h-10 pl-9 pr-3 text-body-default font-body-default rounded-lg bg-surface text-darkest-slate placeholder:text-border-muted border border-border-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      id="email" 
                      placeholder="m�dico@clinica.com" 
                      required 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block font-caption text-caption font-medium text-darkest-slate" htmlFor="password">
                    Contraseña
                  </label>
                  <div className="relative rounded-lg bg-surface">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-border-muted">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                    <input 
                      className="w-full h-10 pl-9 pr-10 text-body-default font-body-default rounded-lg bg-surface text-darkest-slate placeholder:text-border-muted border border-border-light/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      id="password" 
                      placeholder="••••••••" 
                      required 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      aria-label="Alternar visibilidad de contraseña" 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-border-muted hover:text-darkest-slate transition-colors focus:outline-none" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[18px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center space-x-2 cursor-pointer select-none">
                    <input className="w-4 h-4 rounded text-primary border-border-light/70 focus:ring-0 focus:ring-offset-0 cursor-pointer" id="remember" type="checkbox" />
                    <span className="font-caption text-caption text-neutral-muted">Recordarme</span>
                  </label>
                  <Link className="font-caption text-caption font-medium text-primary hover:text-brand-blue-hover transition-colors" to="#">
                    Olvid� mi contraseña
                  </Link>
                </div>
                <div className="pt-2">
                  <button disabled={loading} className="w-full h-10 rounded-lg bg-primary hover:bg-brand-blue-hover active:bg-brand-blue-active font-body-medium text-body-medium text-on-primary flex items-center justify-center transition-colors shadow-sm font-medium" type="submit">
                    {loading ? <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> : "Iniciar sesión"}
                  </button>
                </div>
              </form>
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[1px] bg-border-light/40"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-surface px-3 font-caption text-caption text-neutral-muted uppercase">o</span>
                </div>
              </div>
              <div>
                <button className="w-full h-10 rounded-lg bg-surface-container-low hover:bg-surface-container active:bg-surface-container-high border border-outline-variant/60 font-body-medium text-body-medium text-midnight-navy flex items-center justify-center transition-colors" type="button">
                  Crear cuenta de paciente
                </button>
              </div>
              <div className="mt-6 pt-2">
                <div className="flex items-center justify-center space-x-1.5 text-center">
                  <span className="material-symbols-outlined text-[16px] text-border-muted">verified_user</span>
                  <p className="font-caption text-caption text-neutral-muted leading-tight">
                    Acceso exclusivo y seguro para personal autorizado y pacientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
