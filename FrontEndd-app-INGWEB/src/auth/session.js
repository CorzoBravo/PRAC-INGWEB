// Manejo de la sesión (token + rol + email). Sin dependencias de React ni de axios.
const KEY = "session";

export function parseJwt(token) {
  try {
    const b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}

export function readSession() {
  for (const store of [sessionStorage, localStorage]) {
    try {
      const raw = store.getItem(KEY);
      if (!raw) continue;
      const session = JSON.parse(raw);
      const payload = parseJwt(session.token);
      // Token vencido o ilegible: se descarta
      if (!payload || (payload.exp && payload.exp * 1000 < Date.now())) {
        store.removeItem(KEY);
        continue;
      }
      return session;
    } catch {
      store.removeItem(KEY);
    }
  }
  return null;
}

// remember=true -> localStorage (persiste); false -> sessionStorage (hasta cerrar la pestaña)
export function saveSession(session, remember = false) {
  clearSession();
  (remember ? localStorage : sessionStorage).setItem(KEY, JSON.stringify(session));
}

export function clearSession() {
  sessionStorage.removeItem(KEY);
  localStorage.removeItem(KEY);
  // claves antiguas de la versión anterior
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
