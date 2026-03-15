import { EXPERIENCES } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience({ dark }) {
  return (
    <section id="experience" className={`py-28 ${dark ? "bg-[#0a0f1e]" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader label="Experience" title="Work History" dark={dark} />
        <div className="relative">
          <div className={`absolute left-5 top-0 bottom-0 w-px ${dark ? "bg-white/8" : "bg-gray-200"}`} />
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="flex gap-8">
                  {/* Dot */}
                  <div className="relative shrink-0" style={{ marginTop: 22 }}>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center border-2"
                      style={{ background: `linear-gradient(135deg, ${exp.colorA}, ${exp.colorB})`, borderColor: dark ? "#030712" : "#fff", boxShadow: `0 0 20px ${exp.colorA}50` }}>
                      <span className="text-white font-black text-sm">{exp.company.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-2xl p-6 border ${dark ? "bg-white/3 border-white/8" : "bg-gray-50 border-gray-200"}`}>
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <h3 className={`text-xl font-black ${dark ? "text-white" : "text-gray-900"}`}>{exp.role}</h3>
                        <p className="text-sm font-bold mt-0.5" style={{ background: `linear-gradient(135deg,${exp.colorA},${exp.colorB})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${dark ? "bg-white/5 text-gray-400" : "bg-gray-200 text-gray-600"}`}>{exp.period}</span>
                        <p className="text-xs text-cyan-400 font-semibold mt-1">{exp.type}</p>
                      </div>
                    </div>

                    {exp.projects.length > 0 && (
                      <div className="space-y-3">
                        {exp.projects.map((proj, pi) => (
                          <div key={pi} className={`rounded-xl p-4 border ${dark ? "bg-[#030712]/60 border-white/5" : "bg-white border-gray-100"}`}>
                            <p className={`font-black text-sm mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>{proj.name}</p>
                            <p className={`text-xs leading-relaxed mb-3 ${dark ? "text-gray-400" : "text-gray-600"}`}>{proj.desc}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.tags.map(t => (
                                <span key={t} className="text-xs px-2 py-0.5 rounded-lg font-semibold"
                                  style={{ background: "rgba(6,182,212,0.08)", color: "#22d3ee", border: "1px solid rgba(6,182,212,0.2)" }}>{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}