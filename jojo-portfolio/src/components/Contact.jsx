import { EmailIcon, GithubIcon, LinkedinIcon, MapPinIcon, PhoneIcon } from "../icons/Icons";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";
export function Contact({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.open(`mailto:varghesejojo6154@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const contacts = [
    { icon: <EmailIcon size={18} />, label: "Email", val: "varghesejojo6154@gmail.com", href: "mailto:varghesejojo6154@gmail.com" },
    { icon: <PhoneIcon />, label: "Phone", val: "+91 8089865378", href: "tel:+918089865378" },
    { icon: <MapPinIcon />, label: "Location", val: "Kerala, India", href: null },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", val: "varghese-jojo-40249a220", href: "https://linkedin.com/in/varghese-jojo-40249a220" },
    { icon: <GithubIcon size={18} />, label: "GitHub", val: "github.com/varghesejojo", href: "https://github.com/varghesejojo" },
  ];

  const inputCls = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ${dark ? "bg-white/[0.04] border-white/10 text-white placeholder-gray-600" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"}`;

  return (
    <section id="contact" className={`py-28 ${dark ? "bg-[#0a0f1e]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Let's Connect" dark={dark} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={100}>
            <div className="space-y-4">
              {contacts.map(({ icon, label, val, href }) => (
                <div key={label}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${dark ? "bg-white/3 border-white/8" : "bg-gray-50 border-gray-200"}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)" }}>
                    {icon}
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${dark ? "text-gray-600" : "text-gray-400"}`}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">{val}</a>
                    ) : (
                      <p className={`text-sm font-semibold ${dark ? "text-gray-300" : "text-gray-700"}`}>{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className={`rounded-2xl p-8 border ${dark ? "bg-white/3 border-white/8" : "bg-gray-50 border-gray-200"}`}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                    style={{ background: "rgba(6,182,212,0.1)" }}>
                    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className={`text-xl font-black ${dark ? "text-white" : "text-gray-900"}`}>Email client opened!</p>
                  <p className={`text-sm mt-2 ${dark ? "text-gray-400" : "text-gray-500"}`}>Send the message from your email app.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-xs text-cyan-400 hover:text-cyan-300 font-semibold">
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handle} className="space-y-5">
                  {[
                    { label: "Name", key: "name", type: "text", ph: "Your name" },
                    { label: "Email", key: "email", type: "email", ph: "your@email.com" },
                  ].map(({ label, key, type, ph }) => (
                    <div key={key}>
                      <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${dark ? "text-gray-500" : "text-gray-500"}`}>{label}</label>
                      <input type={type} required placeholder={ph} value={form[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className={inputCls} />
                    </div>
                  ))}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${dark ? "text-gray-500" : "text-gray-500"}`}>Message</label>
                    <textarea required rows={4} placeholder="Tell me about your project..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`${inputCls} resize-none`} />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 font-black text-sm text-white rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg,#06b6d4,#3b82f6)", boxShadow: "0 8px 24px rgba(6,182,212,0.25)" }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}