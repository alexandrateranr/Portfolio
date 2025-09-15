export const METADATA = {
  title: "Alexandrateran", // Add the title property
  description: "Welcome to my portfolio website.",
  siteUrl: "https://www.alexandrateran.com", // Add this property
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I am a Full Stack Developer",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "alexteranr@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/alexandra-teran-503222283",
  github: "https://github.com/alexandrateranr",
  instagram: "https://www.instagram.com/alexandrateran.r/",
}

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Fort Worth PsychWorks Report Geneation System",
    image: "/projects/psychworks.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "This project offers an automates report generation system, enabling psychiatrist to choose or customize templates for individual patients and produce detailed reports efficiently.",
    gradient: ["#746F95", "#3F3777"],
    url: "https://github.com/Psych-Works/PsychWorks",
    tech: ["next", "react", "tailwind"],
  },
  {
    name: "FrogCrew - Sports Broadcasting Management Platform",
    image: "/projects/hogwarts.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/gkuchar/FrogCrew-Event-Scheduler",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "Hogwarts Shopping Cart - Frontend",
    image: "/projects/hogwarts.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "I created a themed shopping cart interface that lets users view selected items, adjust quantities, check availability, and see a detailed order summary with subtotal, shipping, tax, and total cost. ",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/alexandrateranr/hogwarts-artifacts-online",
    tech: ["css", "html", "javascript"],
  },
  {
    name: "Flor de Cana - Call Center/Client Wbsite Redesign  ",
    image: "/projects/flordecana.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "I redesigned the call center and client website to improve user experience and functionality.",
    gradient: ["#E57171", "#167187"],
    url: "https://www.flordecana.com/",
    tech: ["react"],
  },
  {
    name: "Portfolio",
    image: "/projects/portfolioo.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Personal Portfolio!",
    gradient: ["##2d1e1c", "#771E1E"],
    url: "https://github.com/alexandrateranr/Portfolio",
    tech: ["typescript", "react", "tailwind", "next"],
  },
  {
    name: "Secret website",
    image: "/projects/coming.png",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Coming soon... stay tuned!",
    gradient: ["#0D0C0C", "#3A2C79"],
    url: "https://github.com/alexandrateranr",
    tech: ["javascript", "react", "tailwind", "css"],
  },
  
  
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "typescript",
    "vue",
    "next",
    "tailwind",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],

  other: ["git", "lightroom"],
  backend: [
    "springboot",
    "python",
    "sql"
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Full Stack Developer @ Compania Licorera (Flor de Cana)",
    image: "/timeline/logoflordecana.svg",
    slideImage: "/timeline/flordecana.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Information Technology!",
      image: "/timeline/tculogo.svg",
      slideImage: "/timeline/finalpresentationme.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Analytics Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Data Analytics @ Generadora Electrica Occidental (GEOSA)",
    slideImage: "/timeline/GEOSA.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Copy Editor",
    size: ItemSize.SMALL,
    subtitle:
      "Edit and analyzed all news reports to the TCU360 Website @ TCU360",
      image: "/timeline/tculogo.svg",
    slideImage: "/timeline/logotcu.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT & Data Analyst",
    size: ItemSize.SMALL,
    subtitle:
      "Joined a competitive IT Internship program within a leading Nicaraguan bank as an IT & Data Analyst @ Banco de Finanzas (BDF) ",
      image: "/timeline/bdflogo.svg",
      slideImage: "/timeline/bdf.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
 

  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT Help Desk",
    size: ItemSize.SMALL,
    subtitle:
      "Delivereed IT support to over +5,000 employees, resolving technical issues and ensuring smooth operations @TCU Library Computer Lab.",
      image: "/timeline/tculogo.svg",
      slideImage: "/timeline/tcu.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
  
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
