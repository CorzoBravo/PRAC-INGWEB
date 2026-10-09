const STYLES = {
  error: "bg-error-container text-on-error-container border-danger/30",
  success: "bg-[#EDFDF2] text-[#05603A] border-success/30",
  info: "bg-surface-tint-container text-on-surface-variant border-outline-variant",
};
const ICONS = { error: "error", success: "check_circle", info: "info" };

export default function Alert({ type = "error", children }) {
  if (!children) return null;
  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex items-start gap-2 rounded-lg border px-3 py-2.5 mb-4 font-caption text-caption ${STYLES[type]}`}
    >
      <span className="material-symbols-outlined text-[18px] shrink-0" aria-hidden="true">{ICONS[type]}</span>
      <span>{children}</span>
    </div>
  );
}
