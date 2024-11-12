import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import {
  RiDatabase2Line,
  RiHtml5Line,
  RiJavaLine,
  RiJavascriptLine,
  RiReactjsLine, RiTailwindCssFill
} from "react-icons/ri";
import {TbHexagonLetterC} from "react-icons/tb";
import {SiTypescript, SiVite} from "react-icons/si";
import {FaAngular, FaGitSquare, FaNodeJs, FaPython, FaSwift} from "react-icons/fa";


import {IoLogoCss3} from "react-icons/io";
import {BiLogoFirebase} from "react-icons/bi";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "mailto:randy.semedo@hotmail.fr?subject=Prise de contact&body=Bonjour Randy!" },
];

export const SKILLSF = [
  {
    icon: <RiHtml5Line className="text-4xl lg:text-6xl text-orange-500" />,
    name: "HTML",
    experience: "1+ year",
  },
  {
    icon: <IoLogoCss3 className="text-4xl lg:text-6xl text-sky-400" />,
    name: "CSS",
    experience: "1+ year",
  },
  {
    icon: <RiJavascriptLine className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-cyan-500" />,
    name: "Tailwind",
    experience: "1+ year",
  },
  {
    icon: <FaAngular className="text-4xl lg:text-6xl text-red-600" />,
    name: "Angular",
    experience: "1+ year",
  },
  {
    icon: <SiTypescript className="text-4xl lg:text-6xl text-blue-600" />,
    name: "TypeScript",
    experience: "1+ year",
  },
  {
    icon: <FaSwift className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Swift",
    experience: "1+ year",
  },
];
export const SKILLSB = [
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <TbHexagonLetterC className="text-4xl lg:text-6xl text-blue-900" />,
    name: "C",
    experience: "1+ year",
  },
  {
    icon: <RiJavaLine className="text-4xl lg:text-6xl text-red-700" />,
    name: "Java",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "NodeJs",
    experience: "1+ year",
  },
  {
    icon: <RiDatabase2Line className="text-4xl lg:text-6xl text-sky-700" />,
    name: "SQL",
    experience: "1+ year",
  },
  {
    icon: <FaGitSquare className="text-4xl lg:text-6xl text-amber-800" />,
    name: "git",
    experience: "2+ years",
  },
  {
    icon: <BiLogoFirebase className="text-4xl lg:text-6xl text-yellow-600" />,
    name: "Firebase",
    experience: "2+ years",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
