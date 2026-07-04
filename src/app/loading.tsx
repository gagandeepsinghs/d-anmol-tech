export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--color-navy)] flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[var(--color-orange)] animate-spin" />
          <div
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-white/40 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl" aria-hidden="true">
            D
          </div>
        </div>
        <p className="text-white text-xs tracking-[0.25em] uppercase font-semibold animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
