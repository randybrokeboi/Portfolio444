import { useState } from "react"
import logomov from "../assets/Memojirandy.mov"
import wifi from "../assets/wifiapple.png"
import battery from "../assets/battery50apple.png"
import {NAVIGATION_LINKS} from "../constants"
import styled, { keyframes } from 'styled-components'; import {slideInDown} from 'react-animations';
const Bounce = styled. div`animation: 1s ${keyframes`${slideInDown}`} 1`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const test = () => {
    document.getElementById("logoanim").setCurrentTime(10);
  }
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false);
  }
  // noinspection JSValidateTypes
  return (
    <header className="header-main">
      {/*Desktop Menu header*/}
      <div className="top-line"></div>
      <div className="header-container">
        <div className="header-logo-box" onClick={test}>
          <a href="#">
            <video src={logomov} id="logoanim" autoPlay muted loop  />
          </a>
          <svg className="svg-corner corner-logo-box-one" width="30" height="30" viewBox="0 0 30 30" fill="none"
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
          <svg className="svg-corner corner-logo-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none"
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
        <div className="header-symbol-box">
          <div>
            <img src={wifi} className="next w-6" alt="wifi"/>
            <a className="next relative top-1 text-lg font-semibold">44 %</a>
            <img src={battery} className="first top-0.5 w-9" alt="battery"/>
          </div>
          <svg className="svg-corner corner-logo-box-one" width="30" height="30" viewBox="0 0 30 30" fill="none"
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
          <svg className="svg-corner corner-logo-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none"
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
        <Bounce className="Sliding effect">
          <nav className="navigation">
            {NAVIGATION_LINKS.map((item, index) => (
              <a key={index} href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
        </Bounce>
      </div>
      {/*Mobile Menu header*/}
      {/*} <div className="rounded-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img src={logo} width={90} alt="logo" className="m-2"/>
            </a>
          </div>
          <div className="flex items-center">
            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5"/>
              ) : (
                <FaBars className="m-2 h-6 w-5"/>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a className="block w-full text-xl font-semibold" href={item.href}
                   onClick={(e) => handleLinkClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      */}
    </header>
  )
}

export default Navbar;