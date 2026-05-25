export function RadiationOrbs() {
  return (
    <>
      {/* Teal glow — top left */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,80,65,0.35) 0%, rgba(10,60,50,0.15) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Teal radiation — bottom right */}
      <div
        className="animate-pulse-glow pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,80,65,0.28) 0%, rgba(10,60,50,0.12) 50%, transparent 70%)",
          filter: "blur(12px)",
          animationDelay: "2s",
        }}
      />

      {/* Faint center glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(14,80,65,0.32) 0%, transparent 60%)",
        }}
      />
    </>
  );
}
