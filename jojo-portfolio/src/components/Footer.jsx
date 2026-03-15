import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons/Icons";

export function Footer({ dark }) {
  return (
    <footer className={`py-8 border-t ${dark ? "bg-[#030712] border-white/5" : "bg-gray-50 border-gray-200"}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className={`text-sm ${dark ? "text-gray-600" : "text-gray-500"}`}>
          © {new Date().getFullYear()} <span className="font-bold text-cyan-400">Varghese Jojo</span>. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="flex gap-3">
          {[
            { icon: <GithubIcon size={16} />, href: "https://github.com/varghesejojo" },
            { icon: <LinkedinIcon size={16} />, href: "https://linkedin.com/in/varghese-jojo-40249a220" },
            { icon: <EmailIcon size={16} />, href: "mailto:varghesejojo6154@gmail.com" },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className={`p-2.5 rounded-xl transition-all hover:scale-110 hover:text-cyan-400 ${dark ? "text-gray-600 hover:bg-white/5" : "text-gray-400 hover:bg-gray-200"}`}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}