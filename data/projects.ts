export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  vimeoUrl?: string;
  videoSrc?: string;
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    title: "Animated Landing Andina",
    description:
      "A brand website built for Andina Latin America (Coca-Cola). Browse the live demo video to see the interface in action.",
    tags: ["React", "CSS modules", "Framer Motion"],
    repoUrl: "https://github.com/cbahamondesd/FrontAndina",
    videoSrc: "/Video_proyecto_Andina.mov",
  },
  {
    title: "Digital Archive Website",
    description:
      "Personal website for Joseph E. LeDoux — NYU neuroscientist, author, and musician. Features a three-path navigation concept (Neuroscientist · Author · Musician), a career highlights section, and social integrations. Built with Next.js for fast, responsive delivery across devices.",
    tags: ["Next.js", "React", "MongoDB","TailwindCSS", "Responsive Design"],
    liveUrl: "https://www.joseph-ledoux.com",
    repoUrl: "https://github.com/imercadal/joe-ledoux",
    vimeoUrl: "https://vimeo.com/1169187015?fl=ip&fe=ec",
  },
  {
    title: "Carwash App (prototype)",
    description:
      "A description of your third project goes here. Describe what makes it interesting and what you learned.",
    tags: ["MERN", "Material UI", "CI/CD"],
    repoUrl: "https://github.com/cbahamondesd/carwash",
    vimeoUrl: "https://vimeo.com/1169173162?fl=ip&fe=ec",
  },
  {
    title: "Juice Store \"Juguitos Frescos\" with CMS",
    description:
      "Landing page for a juice store with a rotating exhibition of Latin American artists. Built with Next.js and TailwindCSS, featuring a headless CMS (Sanity.io) for easy content management. The site includes a menu page, basic info, a blog, and a list of the artists featured at the store.",
    tags: ["Next.js", "React", "TailwindCSS", "Headless CMS","Sanity.io"],
    repoUrl: "https://github.com/pgriott/juguitos",
    vimeoUrl: "https://vimeo.com/1169690307?share=copy&fl=sv&fe=ci",
  }
];
