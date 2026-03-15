import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import{ MenuIcon, CloseIcon, SunIcon, MoonIcon, DownloadIcon } from "../icons/Icons";

export function Navbar({ dark, setDark }) {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [activeLink, setActiveLink] = useState("About");

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 40);
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
const sectionIds = NAV_LINKS.map((link) => link.toLowerCase());

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const activeSection =
          sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
        setActiveLink(activeSection);
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "-100px 0px -100px 0px",
  }
);

sectionIds.forEach((id) => {
  const element = document.getElementById(id);
  if (element) observer.observe(element);
});

return () => observer.disconnect();

}, []);

const go = (id) => {
setActiveLink(id);
document
.getElementById(id.toLowerCase())
?.scrollIntoView({ behavior: "smooth" });
setOpen(false);
};

const navStyle = scrolled
? dark
? "bg-[#030712]/85 backdrop-blur-xl border border-white/10 shadow-2xl"
: "bg-white border border-gray-200 shadow-lg"
: dark
? "bg-[#030712]/40 backdrop-blur-md border border-white/10"
: "bg-white/90 backdrop-blur-md border border-gray-200";

return (
<nav
className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50 rounded-2xl transition-all duration-500 ${navStyle}`}
> <div className="flex items-center justify-between px-6 h-16">

    {/* LOGO */}
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="flex items-center gap-1 text-lg font-black"
    >
      <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        VJ
      </span>
      <span className={dark ? "text-white/80" : "text-gray-800"}>.</span>
      <span className={dark ? "text-white/40" : "text-gray-400"}>
        dev
      </span>
    </button>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex items-center gap-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-xl shadow-sm">

      {NAV_LINKS.map((link) => {
        const active = activeLink === link;

        return (
          <button
            key={link}
            onClick={() => go(link)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300
            ${
              active
                ? "text-cyan-600 bg-cyan-100 dark:text-cyan-400 dark:bg-white/10"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"
            }`}
          >
            {link}
          </button>
        );
      })}
    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-3">

      {/* THEME TOGGLE */}
      <button
        onClick={() => setDark(!dark)}
        className={`p-2 rounded-lg transition
        ${
          dark
            ? "bg-white/10 text-yellow-300 hover:bg-white/20"
            : "bg-gray-100 text-cyan-500 hover:bg-gray-200"
        }`}
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* RESUME */}
      <a
        href="mailto:varghesejojo6154@gmail.com"
        className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-bold
         from-cyan-500 to-blue-600 text-white rounded-lg
        hover:scale-105 transition"
      >
        <DownloadIcon /> Resume
      </a>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  </div>

  {/* MOBILE MENU */}
  {open && (
    <div
      className={`md:hidden border-t p-4 flex flex-col gap-2 ${
        dark ? "border-white/10" : "border-gray-200"
      }`}
    >
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => go(link)}
          className={`text-left px-3 py-2 rounded-lg font-medium
          ${
            dark
              ? "text-gray-300 hover:bg-white/5"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {link}
        </button>
      ))}
    </div>
  )}
</nav>

);
}
