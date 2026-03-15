import{ MenuIcon, CloseIcon, SunIcon, MapPinIcon , EmailIcon  ,GithubIcon,LinkedinIcon  } from "../icons/Icons";

export function Hero({ dark }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden ${dark ? "bg-[#030712]" : "bg-slate-50"}`}>
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute", top: "-15%", right: "-10%",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          animation: "pulse 4s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", bottom: "-15%", left: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
          animation: "pulse 4s ease-in-out 2s infinite"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8 border border-cyan-500/20"
              style={{ background: "rgba(6,182,212,0.06)", color: "#22d3ee", animation: "fadeUp 0.6s ease both" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "pulse 1.5s ease-in-out infinite" }} />
              Available for new opportunities
            </div>

            <h1 style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
              className={`text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-5 ${dark ? "text-white" : "text-gray-900"}`}>
              Varghese<br />
              <span style={{ background: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Jojo
              </span>
            </h1>

            <p style={{ animation: "fadeUp 0.7s ease 0.2s both", color: "#22d3ee" }}
              className="text-xl md:text-2xl font-bold mb-4">
              Full Stack Developer
            </p>

            <p style={{ animation: "fadeUp 0.7s ease 0.3s both" }}
              className={`text-base md:text-lg max-w-lg mb-10 leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              Building scalable web & mobile applications. Self-taught, passionate,
              and driven by a love for clean code and elegant systems.
            </p>

            <div style={{ animation: "fadeUp 0.7s ease 0.4s both" }} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button onClick={() => go("projects")}
                className="px-7 py-3.5 font-bold rounded-2xl text-white text-sm transition-all hover:scale-105 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", boxShadow: "0 8px 32px rgba(6,182,212,0.3)" }}>
                View Projects →
              </button>
              <button onClick={() => go("contact")}
                className={`px-7 py-3.5 font-bold rounded-2xl text-sm border-2 transition-all hover:scale-105 ${dark ? "border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400" : "border-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-500"}`}>
                Contact Me
              </button>
            </div>

            <div style={{ animation: "fadeUp 0.7s ease 0.5s both" }} className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: <GithubIcon size={18} />, href: "https://github.com/varghesejojo", label: "GitHub" },
                { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com/in/varghese-jojo-40249a220", label: "LinkedIn" },
                { icon: <EmailIcon size={18} />, href: "mailto:varghesejojo6154@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                  className={`p-3 rounded-2xl border transition-all hover:scale-110 hover:text-cyan-400 hover:border-cyan-400/30 ${dark ? "bg-white/5 border-white/10 text-gray-400" : "bg-white border-gray-200 text-gray-500 shadow-sm"}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — card */}
          <div style={{ animation: "fadeUp 0.8s ease 0.2s both", flexShrink: 0, maxWidth: "100%" }}>
            <div className="relative w-64 h-64 md:w-72 md:h-72"
              style={{ borderRadius: 28, padding: 2, background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)" }}>
              <div className={`w-full h-full flex flex-col items-center justify-center gap-5 ${dark ? "bg-gray-900" : "bg-white"}`}
                style={{ borderRadius: 26 }}>
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)", boxShadow: "0 8px 24px rgba(6,182,212,0.4)" }}>
                  VJ
                </div>
                <div className="text-center">
                  <p className={`font-black text-lg ${dark ? "text-white" : "text-gray-900"}`}>Varghese Jojo</p>
                  <p className="text-cyan-400 text-sm font-semibold">Full Stack Developer</p>
                  <p className={`text-xs mt-1 flex items-center justify-center gap-1 ${dark ? "text-gray-500" : "text-gray-400"}`}>
                    <MapPinIcon /> Kerala, India
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center px-4">
                  {["React", "Django", "Flutter"].map(t => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-bold rounded-lg border"
                      style={{ background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.2)", color: "#22d3ee" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30" style={{ animation: "bounce 2s ease-in-out infinite" }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.5; } }
        @keyframes bounce { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }
      `}</style>
    </section>
  );
}