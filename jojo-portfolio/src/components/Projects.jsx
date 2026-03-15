import { PROJECTS } from "../data/portfolioData";
import { ExternalLinkIcon, GithubIcon } from "../icons/Icons";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";


export function Projects({ dark }) {
  return (
    <section id="projects" className={`py-28 ${dark ? "bg-[#030712]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Projects" title="Featured Work" dark={dark} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`rounded-2xl p-6 border h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${dark ? "" : "bg-white shadow-sm"}`}
                style={{
                  background: dark ? `linear-gradient(135deg, ${proj.accentA}, ${proj.accentB})` : undefined,
                  borderColor: proj.border,
                  boxShadow: `0 0 40px ${proj.accentA}`,
                }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-black ${dark ? "text-white" : "text-gray-900"}`}>{proj.name}</h3>
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    className={`p-2 rounded-xl transition-all hover:scale-110 ${dark ? "text-gray-500 hover:text-cyan-400" : "text-gray-400 hover:text-cyan-500"}`}>
                    <ExternalLinkIcon />
                  </a>
                </div>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${dark ? "text-gray-400" : "text-gray-600"}`}>{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map(t => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-lg font-semibold border ${dark ? "bg-white/5 border-white/10 text-gray-300" : "bg-gray-100 border-gray-200 text-gray-600"}`}>{t}</span>
                  ))}
                </div>
                <a href={proj.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                  <GithubIcon size={14} /> View on GitHub
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}