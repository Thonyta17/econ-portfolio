export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen px-6 pt-24 pb-16 overflow-hidden">
      {/* Pink ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,122,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full">
        <p className="font-mono text-accent text-sm mb-5 tracking-widest uppercase animate-fade-in">
          Portfolio
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 animate-fade-up">
          Thonyta Chhay
        </h1>

        <p
          className="text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          MS Economics (Data Science) · Northeastern University
          <br />
          <span className="text-lg text-slate-500">
            Fulbright Scholar · Former Economist · KPMG Auditor
          </span>
        </p>

        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-full transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-border hover:border-accent/60 text-slate-300 hover:text-accent-light text-sm font-medium rounded-full transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
