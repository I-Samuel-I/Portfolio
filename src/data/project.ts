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
  },
  {
    label: "notion",
    icon: Notion,
    text: "espaço de estudos",
  },
  {
    label: "email",
    icon: Mail,
    text: "samgomes.dev@gmail.com",
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
    id: 1,
    title: "GestIO",
    category: "web",
    description:
      "Business management system with modules for sales, finance, dashboard, inventory, customers, products, and PDF reports.",
    image: Screen02,
    status: "finished",
    date: "2026",
    techs: ["nestJs", "postgreSQL", "JWT", "Next.JS", "Recharts..."],
    github: "https://github.com/Projects-Poran/Gestio",
  },
  {
    id: 2,
    category: "web",
    title: "Midnight Rose",
    description: "A website created as a tribute to the Japanese singer Ado, showcasing her main works and a bit of her journey up to the present day.",
    image: Screen01,
    status: "finished",
    date: "2026",
    techs: ["React", "EmailJs", "Styled-Components","SweetAlert..."],
    github: "https://github.com/I-Samuel-I/Midnight-Rose",
    link: "https://midnight-rose.vercel.app/",
  },
];
