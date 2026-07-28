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

export const projectsFilters = ["all", "web", "mobile"];

export const extraLinks = [
  {
    label: "github",
    text: "github.com/samgomes-dev",
  },
  {
    label: "notion",
    text: "meu espaco de estudos",
  },
  {
    label: "email",
    text: "samgomes.dev@gmail.com",
  },
];

export type TechStackIcon = ComponentType<SVGProps<SVGSVGElement>>;

type TechStack = {
  title: string;
  icons: TechStackIcon;
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
    id: 1,
    title: "GestIO",
    description: "Test",
    image: Screen02,
    link: "https://github.com/Projects-Poran/Gestio",
  },
  {
    id: 2,
    title: "Midnight Rosee",
    description: "Test",
    image: Screen01,
    link: "https://midnight-rose.vercel.app/",
  },
  {
    id: 3,
    title: "Midnight Roseee",
    description: "Test",
    image: "teste",
  },
];
