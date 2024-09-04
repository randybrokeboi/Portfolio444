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
import {SiVite} from "react-icons/si";
import {FaGitSquare, FaPython, FaSwift} from "react-icons/fa";


import {IoLogoCss3} from "react-icons/io";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Randy Semedo",
  info: "Full-stack developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "I'm a french developer",
  text2:
    "I create dynamic, responsive websites that blend creativity with efficiency",
};

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: "",
  },
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
    icon: <FaSwift className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Swift",
    experience: "1+ year",
  },
  {
    icon: <SiVite className="text-4xl lg:text-6xl text-violet-600" />,
    name: "Vite Js",
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
    icon: <RiDatabase2Line className="text-4xl lg:text-6xl text-sky-700" />,
    name: "SQL",
    experience: "1+ year",
  },
  {
    icon: <FaGitSquare className="text-4xl lg:text-6xl text-amber-800" />,
    name: "git",
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
