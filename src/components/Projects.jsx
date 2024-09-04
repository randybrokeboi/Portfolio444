import {useState} from "react";
import useMousePosition from "../Effects/mouseffect.jsx";
import {GradientText, ShinyText} from "../Effects/Effects.jsx";
const Projects = () => {
  let clip = document.querySelector(".videocursor")
  /* Adding the event listeners on the video to play/pause the video. */
  if (clip != null){
    clip.addEventListener("mouseover", function (e) {
      clip.play();
    })
    clip.addEventListener("mouseout", function (e) {
      clip.pause();
    })
  }
  const {x, y} = useMousePosition();


  return (
    <div className="Propage">
      <div className="Projects container mx-auto" id="projects">
        <h2 className="mt-20 text-center text-5xl font-semibold">Selected Projects ✨</h2>
        <div className="gitext text-xl text-right invisible">(Click for github 📤)</div>
        <div className="Project-list flex flex-col max-w-6xl m-auto mt-20">
          <a className="Project ProjectH" href="https://github.com/randybrokeboi/Hercule" target="_blank">
            <div className="Project-row text-black text-8xl">Hercule</div>
            <div className="Project-desc"> Ios shopping app using real-time databases,
              <GradientText colors={["#ff4040", "#4079ff", "#ff4040", "#4079ff", "#ff4040"]} animationSpeed={3}
                            showBorder={false}>SwiftUI + Firebase</GradientText>
            </div>
          </a>
          <a className="Project ProjectN" href="https://github.com/randybrokeboi/Naruto" target="_blank">
            <div className="Project-row text-black text-8xl">Naruto Shippython</div>
            <div className="Project-desc"> Fighting game based on Naruto™️ styled as a flash game,
              <GradientText colors={["#ffdb00", "#4079ff", "#ffef40", "#4079ff", "#ffdb00"]} animationSpeed={3}
                            showBorder={false}>Python/Pygames</GradientText>
            </div>
          </a>
          <a className="Project ProjectP" href="https://github.com/randybrokeboi/Portfolio444" target="_blank">
            <div className="Project-row text-black text-8xl">Portfolio</div>
            <div className="Project-desc"> Personal Portfolio made from scratch,
              <GradientText colors={["#11ff00", "#4079ff", "#11ff00", "#4079ff", "#11ff00"]} animationSpeed={3}
                            showBorder={false}>React js + Tailwind css</GradientText>
            </div>
          </a>
        </div>
      </div>
      <div className="cursor hidden" style={{left: x + 'px', top: y + 'px'}}>
        <video className="videocursor hidden" src="/src/assets/Hercule.mp4" autoPlay muted loop/>
        <video className="videocursorr hidden" src="/src/assets/video-naruto.mp4" autoPlay muted loop/>
        <img className="videocursorrr hidden" src="/src/assets/inception.gif"/>
      </div>
    </div>
  );
};

export default Projects;