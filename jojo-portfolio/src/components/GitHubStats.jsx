import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";


export function GitHubStats({ dark }) {
  return (
    <section className={`py-28 ${dark ? "bg-[#030712]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="GitHub" title="Activity & Stats" dark={dark} />
        <Reveal delay={100}>
          <div className="flex flex-col items-center gap-5">
            <div className={`w-full max-w-3xl rounded-2xl overflow-hidden border ${dark ? "border-white/8" : "border-gray-200"}`}>
              <img
                src="https://github-readme-stats.vercel.app/api?username=varghesejojo&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=22d3ee&icon_color=22d3ee&text_color=94a3b8&count_private=true"
                alt="GitHub Stats" className="w-full" loading="lazy"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl">
              <div className={`flex-1 rounded-2xl overflow-hidden border ${dark ? "border-white/8" : "border-gray-200"}`}>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=varghesejojo&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=94a3b8"
                  alt="Top Languages" className="w-full" loading="lazy"
                />
              </div>
              <div className={`flex-1 rounded-2xl overflow-hidden border ${dark ? "border-white/8" : "border-gray-200"}`}>
                <img
                  src="https://streak-stats.demolab.com/?user=varghesejojo&theme=tokyonight&hide_border=true&background=0d1117&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee"
                  alt="GitHub Streak" className="w-full" loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}