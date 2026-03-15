import { SKILLS } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";


export function Skills({ dark }) {
  return (
    <section id="skills" className={`py-28 ${dark ? "bg-[#030712]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Skills" title="Tech Arsenal" dark={dark} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([cat, skills], i) => (
            <Reveal key={cat} delay={i * 70}>
              <div className={`rounded-2xl p-6 border h-full transition-all hover:border-cyan-400/30 ${dark ? "bg-white/3 border-white/8 hover:bg-white/5" : "bg-white border-gray-200 hover:border-cyan-300/50 shadow-sm"}`}>
                <p className={`text-xs font-black tracking-[0.18em] uppercase mb-4 ${dark ? "text-gray-600" : "text-gray-400"}`}>{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, color }) => (
                    <span key={name}
                      style={{ color, borderColor: `${color}30`, background: `${color}0d` }}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all hover:scale-105 cursor-default">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}