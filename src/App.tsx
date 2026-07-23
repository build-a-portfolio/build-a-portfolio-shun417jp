import { Header } from "./components/Header";
import { Hero } from "./Section/Hero";
import { About } from "./Section/About";
import { Skills } from "./Section/Skills";
import { Projects } from "./Section/Projects";
import { Contact } from "./Section/Contact";
import { Explanation } from "./Section/Explanation";
import { SystemProfiles } from "./Section/SystemProfiles";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeSection = useActiveSection([
    "home",
    "profile",
    "about",
    "skills",
    "projects",
    "contact",
    "explanation",
  ]);

  return (
    <>
      <Header activeSection={activeSection} />
      <Hero />
      <SystemProfiles />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Explanation />
    </>
  );
}

export default App;
