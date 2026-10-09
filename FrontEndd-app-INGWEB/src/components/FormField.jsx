// Campo de formulario con icono, etiqueta y mensaje de error accesible.
export default function FormField({ id, label, icon, error, right, ...inputProps }) {
  return (
    <div className="space-y-1.5">
      <label className="block font-caption text-caption font-medium text-darkest-slate" htmlFor={id}>
        {label}
      </label>
      <div className="relative rounded-lg bg-surface">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-border-muted">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>
        </div>
        <input
          id={id}
          name={id}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full h-10 pl-9 ${right ? "pr-10" : "pr-3"} text-body-default font-body-default rounded-lg bg-surface text-darkest-slate placeholder:text-border-muted border focus:outline-none focus:ring-1 transition-colors ${
            error
              ? "border-danger focus:border-danger focus:ring-danger"
              : "border-border-light/60 focus:border-primary focus:ring-primary"
          }`}
          {...inputProps}
        />
        {right}
      </div>
      {error && (
        <p id={`${id}-error`} className="font-caption text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
