import type { ComponentType, SVGProps } from "react";
import CssFileIcon from "@/src/assets/icons/css-file.svg";
import FigmaIcon from "@/src/assets/icons/figma.svg";
import GitIcon from "@/src/assets/icons/folder-git-two.svg";
import GithubIcon from "@/src/assets/icons/github.svg";
import HtmlIcon from "@/src/assets/icons/html-five.svg";
import JavaScriptIcon from "@/src/assets/icons/java-script.svg";
import JavaIcon from "@/src/assets/icons/java.svg";
import MobileProgrammingIcon from "@/src/assets/icons/mobile-programming-0-1.svg";
import PythonIcon from "@/src/assets/icons/python.svg";
import ReactIcon from "@/src/assets/icons/react.svg";
import SourceCodeIcon from "@/src/assets/icons/source-code.svg";
import TailwindIcon from "@/src/assets/icons/tailwindcss.svg";
import TypeScriptIcon from "@/src/assets/icons/typescript-0-2.svg";
import WebDesignIcon from "@/src/assets/icons/web-design-0-2.svg";
import Screen01 from "../assets/images/Project-Screen01.png";
import Screen02 from "../assets/images/Project-Screen02.png";
import Screen03 from "../assets/images/TaiTattoIMG.jpeg";
import Screen04 from "../assets/images/ChihiroIMG.jpeg";
import Screen05 from "../assets/images/MusicLegendsIMG.jpeg";
import Screen06 from "../assets/images/esolvereIMG.jpeg";
import Screen07 from "../assets/images/LigadaIMG.jpeg";
import Mail from "@/src/assets/icons/mail.svg";
import Notion from "@/src/assets/icons/notion-0-2.svg";
import DataBaseIcon from "@/src/assets/icons/database-0-2.svg";
import GenericIcon from "@/src/assets/icons/document-code.svg";

export const projectsFilters = ["all", "web", "mobile"];

export const extraLinks = [
  {
    label: "github",
    icon: GithubIcon,
    text: "github.com/samgomes-dev",
    link:"https://github.com/I-Samuel-I",
  },
  {
    label: "email",
    icon: Mail,
    text: "samgomes.dev@gmail.com",
    link: "mailto:samgomes.dev@gmail.com",
  },
  {
    label: "notion",
    icon: Notion,
    text: "space for research and studies",
    link: "https://www.notion.so/samgomes-dev",
  },
  
];

export type TechStackIcon = ComponentType<SVGProps<SVGSVGElement>>;

type TechStack = {
  title: string;
  icons: TechStackIcon;
};

export const techIconAliases: Record<string, string> = {
  // web base
  html: "html",
  html5: "html",

  css: "css",
  css3: "css",

  javascript: "javascript",
  js: "javascript",

  typescript: "typescript",
  ts: "typescript",

  python: "python",
  django: "django",

  java: "java",

  // frameworks/libs
  react: "react",
  reactjs: "react",

  nextjs: "next.js",
  next: "next.js",

  angular: "angular",
  vue: "vue",
  vuejs: "vue",

  reactnative: "react native",
  expo: "expo go",
  expogo: "expo go",

  nodejs: "node.js",
  node: "node.js",

  nestjs: "javascript",
  nest: "javascript",

  tailwind: "tailwind",
  tailwindcss: "tailwind",

  styledcomponents: "styled components",
  styled: "styled components",

  // libs citadas nos projetos
  emailjs: "library",
  sweetalert: "library",
  sweetalert2: "library",
  recharts: "library",
  jwt: "library",

  // banco de dados
  postgresql: "database",
  postgres: "database",
  mysql: "database",
  mongodb: "database",
  mongo: "database",
  sqlite: "database",
  sqlserver: "database",
  prisma: "database",

  // ferramentas
  git: "git",
  github: "github",
  figma: "figma",
};

export const techStacks: TechStack[] = [
  {
    title: "html",
    icons: HtmlIcon,
  },
  {
    title: "css",
    icons: CssFileIcon,
  },
  {
    title: "javascript",
    icons: JavaScriptIcon,
  },
  {
    title: "typescript",
    icons: TypeScriptIcon,
  },
  {
    title: "python",
    icons: PythonIcon,
  },
  {
    title: "django",
    icons: PythonIcon,
  },
  {
    title: "java",
    icons: JavaIcon,
  },
  {
    title: "react",
    icons: ReactIcon,
  },
  {
    title: "next.js",
    icons: SourceCodeIcon,
  },
  {
    title: "angular",
    icons: WebDesignIcon,
  },
  {
    title: "vue",
    icons: WebDesignIcon,
  },
  {
    title: "react native",
    icons: MobileProgrammingIcon,
  },
  {
    title: "expo go",
    icons: MobileProgrammingIcon,
  },
  {
    title: "node.js",
    icons: JavaScriptIcon,
  },
  {
    title: "tailwind",
    icons: TailwindIcon,
  },
  {
    title: "styled components",
    icons: CssFileIcon,
  },
  {
    title: "database",
    icons: DataBaseIcon,
  },
  {
    title: "library",
    icons: GenericIcon,
  },
  {
    title: "git",
    icons: GitIcon,
  },
  {
    title: "github",
    icons: GithubIcon,
  },
  {
    title: "figma",
    icons: FigmaIcon,
  },
];

export const projects = [
  {
    id: 2,
    title: "GestIO",
    category: "web",
    descriptionKey: "gestio",
    image: Screen02,
    status: "finished",
    date: "2026",
    techs: ["nestJs", "postgreSQL", "JWT", "Next.JS", "Recharts..."],
    github: "https://github.com/Projects-Poran/Gestio",
  },
  {
    id: 3,
    category: "web",
    title: "Midnight Rose",
    descriptionKey: "midnightRose",
    image: Screen01,
    status: "finished",
    date: "2025",
    techs: ["React", "EmailJs", "Styled-Components", "SweetAlert..."],
    github: "https://github.com/I-Samuel-I/Midnight-Rose",
    link: "https://midnight-rose.vercel.app/",
  },
  {
    id: 4,
    category: "web",
    title: "Taitattoo",
    descriptionKey: "taitattoo",
    image: Screen03,
    status: "finished",
    date: "2025",
    techs: ["Nextjs", "EmailJs", "Styled-Components"],
    link: "https://tai-tattoo.vercel.app/",
  },
  {
    id: 5,
    category: "web",
    title: "Spirited-Away",
    descriptionKey: "spiritedAway",
    image: Screen04,
    status: "finished",
    date: "2024",
    techs: ["ReactJS", "Javascript", "Styled-Components"],
    github: "https://github.com/I-Samuel-I/Spirited-Away",
    link: "https://spirited-away-lp8jpdj57-i-samuel-is-projects.vercel.app/",
  },
  {
    id: 6,
    category: "web",
    title: "Music Legends",
    descriptionKey: "musicLegends",
    image: Screen05,
    status: "finished",
    date: "2024",
    techs: ["ReactJS", "Javascript", "Styled-Components"],
    github: "https://github.com/I-Samuel-I/MusicLegends",
    link: "https://music-legends-5soafpj96-i-samuel-is-projects.vercel.app/",
  },
  {
    id: 1,
    category: "web",
    title: "Esolvere",
    descriptionKey: "esolvere",
    image: Screen06,
    status: "finished",
    date: "2026",
    techs: ["NextTs", "Motion", "Typescript", "TailwindCSS"],
    link: "https://www.esolvere.com.br/",
  },
  {
    id: 7,
    category: "web",
    title: "Ligada",
    descriptionKey: "ligada",
    image: Screen07,
    status: "finished",
    date: "2025",
    techs: ["Reactjs", "Javascript", "TailwindCSS"],
    github: "https://github.com/I-Samuel-I/LIGADA",
    link: " https://ligada.adsunifip.com/",
  },
];
