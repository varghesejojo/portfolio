import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
// import { GitHubStats } from "./components/GitHubStats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = sessionStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  
  useEffect(() => {
    document.body.style.background = dark ? "#030712" : "#f8fafc";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    sessionStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", overflowX: "hidden" }}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Experience dark={dark} />
      <Projects dark={dark} />
      <TechStack dark={dark} />
      {/* <GitHubStats dark={dark} /> */}
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}