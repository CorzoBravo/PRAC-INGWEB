// Normaliza errores del backend según design.md §3.1. Nunca expone `stack`.
export function getApiError(err, fallback = "Ocurrió un error inesperado. Intenta de nuevo.") {
  if (!err.response) {
    return {
      message: "No se pudo conectar con el servidor. Revisa tu conexión e intenta de nuevo.",
      fieldErrors: {},
    };
  }
  const { status, data } = err.response;
  const fieldErrors = {};
  if (Array.isArray(data?.errors)) {
    for (const issue of data.errors) {
      const field = issue.path?.[issue.path.length - 1];
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
  }
  let message = data?.message || fallback;
  if (status >= 500) message = "El servidor tuvo un problema. Intenta de nuevo en unos minutos.";
  return { message, fieldErrors };
}
