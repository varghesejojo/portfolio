import { TECH_STACK } from "../data/portfolioData";
import { Reveal } from "./Reveal";


export function TechStack({ dark }) {
  const list = [...TECH_STACK, ...TECH_STACK];
  
  return (
    <section className={`py-20 ${dark ? "bg-[#0a0f1e]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Stack</span>
            <h2 className={`text-3xl font-black mt-2 ${dark ? "text-white" : "text-gray-900"}`}>
              Technologies I Work With
            </h2>
          </div>
        </Reveal>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100vw",
      }}>
        <div style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
        }}>
          {list.map((tech, i) => (
            <div key={i}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border whitespace-nowrap ${dark ? "bg-white/4 border-white/8 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}>
              <span style={{ fontSize: 18 }}>{tech.emoji}</span>
              <span className="text-sm font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}