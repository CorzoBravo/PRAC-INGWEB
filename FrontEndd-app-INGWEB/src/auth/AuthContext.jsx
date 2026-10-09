import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
import { clearSession, parseJwt, readSession, saveSession } from "./session";
import * as usersApi from "../api/users.api";

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSession());

  // El interceptor de axios avisa cuando el servidor responde 401
  useEffect(() => {
    const onLogout = () => setSession(null);
    window.addEventListener("auth:logout", onLogout);
    return () => window.removeEventListener("auth:logout", onLogout);
  }, []);

  const login = useCallback(async (email, password, remember = false) => {
    const { token, role } = await usersApi.login(email, password);
    const payload = parseJwt(token);
    const next = {
      token,
      role: role || payload?.role,
      email: payload?.email || email,
      userId: payload?.userId,
    };
    saveSession(next, remember);
    setSession(next);
    return next;
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({ session, user: session, role: session?.role, isAuthenticated: !!session, login, logout }),
    [session, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
