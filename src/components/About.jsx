import {ABOUT} from "../constants/index.jsx";
import styled, { keyframes } from 'styled-components';
import {slideOutUp} from "react-animations";
const Bounce = styled. div`animation: 1s ${keyframes`${slideOutUp}`} infinite`;
import Magnet from "../Effects/Magnet.jsx";

const About = () => {
  return (
    <div className="About container mx-auto" id="about">
      <h2 className="mt-20 text-center text-4xl font-semibold">
        About
      </h2>
      <h4 className="slides mt-40 mx-1.5 font-bold text-black font-sans text-9xl uppercase ">
            <span className="slide1">
              <span>Hello🌐</span>
              <span>Bonjour🇫🇷</span>
              <span>Hola🇪🇸</span>
              <span>おはよう🇯🇵</span>
              <span>Bom Dia🇵🇹</span>
              <span>你好🇨🇳</span>
              <span>Guten Tag🇩🇪</span>
              <span>Oyez Oyez🏰</span>
              <span>Wesh🏴‍☠️</span>
              <span>Hello🌐</span>
            </span>
      </h4>
      <h3 className="p-12 mt-12 text-6xl lg:text-[4rem] font-sans text-center">
        <span>I&apos;m </span>
        <Magnet padding={50} disabled={false}><p className="font-bold">Randy</p></Magnet>
        <span>, a french Full-Stack Developer.</span>
        <p>I love learning new things, whether it&apos;s in life or in programming.
          My curiosity is always pushing me forward</p>
      </h3>
    </div>
  );
};

export default About;