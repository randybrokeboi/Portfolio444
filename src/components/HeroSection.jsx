import { ShaderArt } from 'https://esm.sh/shader-art';
import { UniformPlugin } from 'https://esm.sh/@shader-art/plugin-uniform';
import {Canvas} from "../Effects/Effects.jsx";
import styled, { keyframes } from 'styled-components'; import { bounce } from 'react-animations';
import { useState } from "react";
const Bounce = styled. div`animation: 7s ${keyframes`${bounce}`} infinite`;
ShaderArt.register([() => new UniformPlugin()]);

function dater(lang) {
  if (lang === "fr") {
    const weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    let datecomplet = new Date()
    let dat = weekday[datecomplet.getDay()] +' ' + datecomplet.getDate() + ' ' + (mois[datecomplet.getMonth()]);
    return (dat)
  }
  else if (lang === "eng") {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let datecomplet = new Date()
    let dat = weekday[datecomplet.getDay()] +', ' + (mois[datecomplet.getMonth()]) + ' ' + datecomplet.getDate();
    return (dat)
  }
  else if (lang === "esp") {
    const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const mois = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    let datecomplet = new Date()
    let dat = weekday[datecomplet.getDay()] +', ' + datecomplet.getDate() + ' de ' + (mois[datecomplet.getMonth()]);
    return (dat)
  }
}

const HeroSection = (props) => {
  const [swit, setswit] = useState(1);
  const [lang, setlang] = useState("fr");
  const [heur, setheur] = [props.heur, props.setheur];
  const langlist = ["fr", "eng", "esp"];
  const switcl = () => {
    if (swit === (langlist.length - 1))
      setswit(0);
    else
      setswit(swit + 1);
    setlang(langlist[swit]);
  }
  const switche = () => {
    if (heur === 9)
      setheur(1);
    else
      setheur(heur + 1)
  }

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
        <div className="infocenter relative cursor-pointer select-none">
          <h1 className="font-bold text-opacity-50 text-white font-sans lg:text-[1.68rem] sm:text-[1.5rem]
          text-[1.25rem] leading-8 left-0" onClick={() => switcl()}>{dater(lang)}</h1>
          <h1 className="font-bold text-opacity-50 text-white font-sans lg:text-[9rem] sm:text-[8rem]
          text-[7rem] left-0 tracking-normal leading-none overflow-hidden" onClick={() => switche()}>{heur}:{heur}{heur}</h1>
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