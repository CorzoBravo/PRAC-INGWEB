import axios from "axios";
import { readSession, clearSession } from "../auth/session";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const session = readSession();
  if (session?.token) config.headers.Authorization = `Bearer ${session.token}`;
  return config;
});

// 401 con sesión activa -> cerrar sesión (el login fallido NO cuenta)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const isAuthCall = /\/users\/(login|register)$/.test(error.config?.url || "");
    if (error.response?.status === 401 && !isAuthCall) {
      clearSession();
      window.dispatchEvent(new Event("auth:logout"));
    }
    return Promise.reject(error);
  }
);

export default api;
