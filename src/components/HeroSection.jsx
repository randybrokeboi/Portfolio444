import React from "react"
import { ShaderArt } from 'https://esm.sh/shader-art';
import { UniformPlugin } from 'https://esm.sh/@shader-art/plugin-uniform';
import {Canvas} from "../Effects/Effects.jsx";
import styled, { keyframes } from 'styled-components'; import {
  bounce
} from 'react-animations';
const Bounce = styled. div`animation: 7s ${keyframes`${bounce}`} infinite`;
ShaderArt.register([() => new UniformPlugin()]);

const date = () => {
  const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  const mois = ["janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","septembre","octobre","novembre","décembre"];
  let datecomplet = new Date()
  let dat = weekday[datecomplet.getDay()] +' ' + datecomplet.getDate() + ' ' + (mois[datecomplet.getMonth()]);
  return (dat)
}

const HeroSection = () => {

  let color1 = "#ffffff";
  let color2 = "#838399";
  let color3 = "#515151";
  let color4 = "#474747";

  return (
    <div className="hero">
      <div className="heromg relative w-full h-full">
        <div className="gradient-container">
          {/*Canva*/}
          <div className="hero-gradient">
            {Canvas(color1, color2, color3, color4)}
          </div>
        </div>
        {/*Heure et date*/}
        <div className="infocenter relative">
          <h1 className="font-bold text-opacity-50 text-white font-sans lg:text-[1.68rem] text-2xl leading-8  left-0">{date()}</h1>
          <h1 className="font-bold text-opacity-50 text-white font-sans lg:text-[9rem] text-9xl left-0 tracking-normal">4:44</h1>
        </div>
        {/*bottom bar*/}
        <div className="bottomcenter relative">
          <Bounce className="Sliding effect">
            <svg xmlns="http://www.w3.org/2000/svg" className="rounded"
                  x="0px" y="0px" width="200px" height="10px">
              <path className="path2" fill="#01a09e" strokeWidth="15" stroke="#ffffff80" d="M0 0 l2120 0"/>
            </svg>
          </Bounce>
        </div>
      </div>
    </div>
  )
}
export default HeroSection;