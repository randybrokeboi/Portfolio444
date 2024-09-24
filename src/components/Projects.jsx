import useMousePosition from "../Effects/mouseffect.jsx";
import {GradientText, StarBorder} from "../Effects/Effects.jsx";
import Hercule from "../assets/Hercule.webm"
import Naruto from "../assets/video-naruto.mp4"
import Inception from "../assets/inception.gif"
const Projects = () => {
  let clip = document.querySelector(".videocursor")
  /* Adding the event listeners on the video to play/pause the video. */
  if (clip != null){
    clip.addEventListener("mouseover", function () {
      clip.play();
    })
    clip.addEventListener("mouseout", function () {
      clip.pause();
    })
  }
  const {x, y} = useMousePosition()



  // noinspection JSValidateTypes
  return (
    <div className="Propage">
      <div className="Projects container mx-auto" id="projects">
        <h2 className="mt-20 text-center lg:text-5xl sm:text-3xl text-2xl font-semibold">Selected Projects ✨</h2>
        <div className="gitext text-xl text-right invisible">(Click for github 📤)</div>
        <div className="Project-list flex flex-col max-w-6xl m-auto mt-20">
          <a className="Project ProjectH" href="https://github.com/randybrokeboi/Hercule" target="_blank">
            <div className="Project-row text-black sm:text-8xl text-4xl">Hercule</div>
            <div className="Project-desc"> Ios shopping app using real-time databases,&nbsp;
              <GradientText colors={["#ff4040", "#4079ff", "#ff4040", "#4079ff", "#ff4040"]} animationSpeed={3}
                            showBorder={false}>SwiftUI + Firebase</GradientText>
            </div>
          </a>
          <a className="Project ProjectN" href="https://github.com/randybrokeboi/Naruto" target="_blank">
            <div className="Project-row text-black sm:text-8xl text-4xl">Naruto Shippython</div>
            <div className="Project-desc"> Fighting game based on Naruto™️ styled as a flash game,&nbsp;
              <GradientText colors={["#ffdb00", "#4079ff", "#ffef40", "#4079ff", "#ffdb00"]} animationSpeed={3}
                            showBorder={false}>Python / Pygames</GradientText>
            </div>
          </a>
          <a className="Project ProjectP" href="https://github.com/randybrokeboi/Portfolio444" target="_blank">
            <div className="Project-row text-black sm:text-8xl text-4xl" >Portfolio</div>
            <div className="Project-desc"> Personal Portfolio made from scratch,&nbsp;
              <GradientText colors={["#11ff00", "#4079ff", "#11ff00", "#4079ff", "#11ff00"]} animationSpeed={3}
                            showBorder={false}>React js + Tailwind css</GradientText>
            </div>
          </a>
        </div>
      </div>
        <div className="cursor hidden z-[89]" style={{left: x + 'px', top: y + 'px'}}>
          <video className="videocur videocursor hidden" src={Hercule} autoPlay muted loop preload="auto" playsInline onClick={() =>
          {window.open('https://github.com/randybrokeboi/Hercule')}}/>
          <video className="videocur videocursorr hidden" src={Naruto} autoPlay muted loop preload="auto" playsInline onClick={() =>
          {window.open('https://github.com/randybrokeboi/Naruto')}}/>
          <img className="videocur videocursorrr hidden" src={Inception} alt="inception" onClick={() =>
          {window.open('https://github.com/randybrokeboi/Portfolio444')}}/>
        </div>
    </div>
  );
};

export default Projects;