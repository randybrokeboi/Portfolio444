import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";


const App = () => {
  return (
    <div id="Sections">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App