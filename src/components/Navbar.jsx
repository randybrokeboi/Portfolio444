import {useState} from "react"
import logomov from "../assets/Memojirandy.mov"
import logopng from "../assets/Memojirandy3.png"
import wifi from "../assets/wifiapple.png"
import battery from "../assets/battery50apple.png"
import {NAVIGATION_LINKS} from "../constants"
import styled, { keyframes } from 'styled-components'; import {slideInDown} from 'react-animations';
import {FaBars, FaTimes} from "react-icons/fa";
const Bounce = styled. div`animation: 1s ${keyframes`${slideInDown}`} 1`;

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleLinkClick = (e, href) => {
    if (!(href.includes("mailto"))){
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
        window.scrollTo({top: offsetPosition, behavior: "smooth"})
      }
      setIsMobileMenuOpen(false);
      }
  }
  const handleLogo = (e, use = "out") => {
    e.preventDefault();
    let clip = document.querySelector("#logoanim")
    if (clip != null && use === "out")
      clip.playbackRate = 1
    else if (clip != null && use === "over")
      clip.playbackRate = 0.4
  }
  const handleLogoClick = (e) => {
    e.preventDefault();
    let clip = document.querySelector("#logoanim")
    if (clip != null) {
      clip.currentTime = 19.90
      clip.playbackRate = 1
    }
    window.scrollTo({top: 0, behavior: "smooth"})
    setIsMobileMenuOpen(false);
  }


  return (
    <header className="header-main">
      {/*Desktop Menu header*/}
      <div className="top-line"></div>
      <div className="header-container">
        <div className="header-logo-box">
          <a href="">
            <video src={logomov} id="logoanim" onMouseOut={(e) => handleLogo(e)} onMouseOver={(e) => handleLogo(e, "over")}
                   onClick={(e) => handleLogoClick(e)} autoPlay muted loop playsInline preload="auto" poster={logopng}
                   className="logoanim relative left-2.5 top-2.5   max-w-[110%]"></video>
          </a>
          <svg className="svg-corner corner-logo-box-one -bottom-[30px] lg:left-0 md:left-[20px] left-[10px]" width="30" height="30" viewBox="0 0 30 30" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#F9F8F6"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg className="svg-corner corner-logo-box-two -right-[30px] top-0" width="30" height="30" viewBox="0 0 30 30" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#F9F8F6"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header-symbol-box sm:h-[50px] sm:flex">
          <div className="trio-symbol place-content-center">
            <img src={wifi} className="next w-6" alt="wifi"/>
            <a className="next relative top-1 text-lg font-semibold">{props.heur}{props.heur} %</a>
            <img src={battery} className="first top-0.5 w-9" alt="battery"/>
          </div>
          <svg className="svg-corner corner-logo-box-two -left-[30px] top-0 rotate-90" width="30" height="30"
               viewBox="0 0 30 30" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#F9F8F6"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          {/*Mobile Menu header*/}
          <div className="sm:hidden mt-1 mb-[17.1px] right-[10px] text-right">
            <button className="focus:outline-none" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="mr-3 h-6 w-5"/>
              ) : (
                <FaBars className="mr-3 h-6 w-5"/>
              )}
            </button>
            {isMobileMenuOpen && (
              <ul className="mr-8 mb-2 -mt-2">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a className="w-full text-xl font-semibold" href={item.href}
                       onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <svg className="svg-corner corner-logo-box-one -bottom-[30px] md:right-0 right-[10px] rotate-90" width="30"
               height="30" viewBox="0 0 30 30" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_310_2)">
              <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#F9F8F6"></path>
            </g>
            <defs>
              <clipPath id="clip0_310_2">
                <rect width="30" height="30" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <Bounce className="Sliding-effect hidden sm:block">
          <nav className="navigation">
            {NAVIGATION_LINKS.map((item, index) => (
              <a key={index} href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
        </Bounce>
      </div>


    </header>
  )
}

export default Navbar;