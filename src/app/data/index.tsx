// social media icon
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

// skills icon
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

export const skills = [
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNodedotjs />, name: "Node" },
];

export const works = [
  {
    position: "Frontend Web Developer",
    place: "PT. Cerise",
    dateStar: "September 2023",
    dateEnd: "January 2024",
  },
];

export const portfolios = [
  {
    title: "Notes",
    live: "https://notelify-fe.vercel.app/",
    fe: "https://github.com/xxaexa/notelify-fe",
    be: "https://github.com/xxaexa/notelify-be",
    description: "website to write a note for you",
    tags: [
      { id: 1, component: <SiTypescript /> },
      { id: 2, component: <SiReact /> },
      { id: 3, component: <SiRedux /> },
      { id: 4, component: <SiTailwindcss /> },
      { id: 5, component: <SiExpress /> },
      { id: 6, component: <SiMongodb /> },
    ],
  },
  {
    title: "Topup",
    live: "https://github.com/xxaexa/topup-fe",
    fe: "https://github.com/xxaexa/topup-fe",
    be: "https://github.com/xxaexa/topup-fe",
    android:
      "https://drive.google.com/file/d/1OeJ3VIg4XZLsiH5LkIIlQ2YlnVXlqDep/view?usp=drive_link",
    description: "website for Topup online game",
    tags: [
      { id: 1, component: <SiTypescript /> },
      { id: 2, component: <SiReact /> },
      { id: 3, component: <SiRedux /> },
      { id: 4, component: <SiTailwindcss /> },
      { id: 5, component: <SiExpress /> },
      { id: 6, component: <SiMongodb /> },
    ],
  },

  {
    title: "Vape Store",
    live: "https://github.com/xxaexa/vapeStore-fe",
    fe: "https://github.com/xxaexa/vapeStore-fe",
    be: "https://github.com/xxaexa/vapeStore-fe",
    description: "e-commerce web for vapestore",
    tags: [
      { id: 1, component: <SiTypescript /> },
      { id: 2, component: <SiReact /> },
      { id: 3, component: <SiRedux /> },
      { id: 4, component: <SiTailwindcss /> },
      { id: 5, component: <SiExpress /> },
      { id: 6, component: <SiMongodb /> },
    ],
  },
];

export const social = [
  {
    id: 0,
    title: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/andre-eka-94009b279/",
  },
  {
    id: 1,
    title: "Github",
    icon: <FaGithubSquare />,
    link: "https://github.com/xxaexa",
  },
];
