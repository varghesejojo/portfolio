import { Reveal } from "./Reveal";

export function SectionHeader({ label, title, dark }) {
  return (
    <Reveal>
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
        <h2 className={`text-4xl md:text-5xl font-black mt-3 tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>{title}</h2>
      </div>
    </Reveal>
  );
}