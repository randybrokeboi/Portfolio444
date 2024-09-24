import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import {useState} from "react";


const App = () => {
  const [heur, setheur] = useState(4);

  return (
    <div id="Sections">
      <Navbar heur={heur} setheur={setheur}/>
      <HeroSection heur={heur} setheur={setheur}/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default App