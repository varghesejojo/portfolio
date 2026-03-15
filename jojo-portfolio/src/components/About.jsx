import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function About({ dark }) {
  const stats = [
    { v: "2+", l: "Years Experience" },
    { v: "10+", l: "Projects Built" },
    { v: "5+", l: "Tech Stacks" },
    { v: "2", l: "Companies" },
  ];

  return (
    <section id="about" className={`py-28 ${dark ? "bg-[#0a0f1e]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="About" title="Who I Am" dark={dark} />
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal delay={100}>
            <div className={`rounded-3xl p-8 border ${dark ? "bg-white/3 border-white/8" : "bg-gray-50 border-gray-200"}`}>
              <p className={`text-lg leading-relaxed mb-5 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                I'm a <span style={{ color: "#22d3ee", fontWeight: 700 }}>self-taught Full Stack Developer</span> from Kerala, India,
                passionate about building modern, scalable web and mobile applications that deliver real value.
              </p>
              <p className={`text-base leading-relaxed mb-5 ${dark ? "text-gray-400" : "text-gray-600"}`}>
                Currently at <strong className={dark ? "text-white" : "text-gray-900"}>Dee & Lee Limited</strong>, I architect
                end-to-end solutions — from responsive React frontends and Flutter apps to robust Django REST backends
                and optimized databases (MongoDB, PostgreSQL, MySQL).
              </p>
              <p className={`text-base leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
                I thrive on solving complex problems, designing scalable systems, and continuously
                learning new technologies. Every project is an opportunity to build something better.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ v, l }) => (
                <div key={l}
                  className={`rounded-2xl p-6 text-center border transition-all hover:scale-105 cursor-default ${dark ? "bg-white/3 border-white/8 hover:border-cyan-400/20" : "bg-gray-50 border-gray-200 hover:border-cyan-300"}`}>
                  <p className="text-4xl font-black" style={{ background: "linear-gradient(135deg,#22d3ee,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{v}</p>
                  <p className={`text-sm mt-1 font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}>{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}