const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "http://bit.ly/4iVdRDB",
  },
  {
    name: "GitHub",
    link: "https://github.com/saniyafarzindeveloper",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/asIndia.jpeg",
  },
  {
    imgPath: "/images/logos/cncm.jpeg",
  },
  {
    imgPath: "/images/logos/hiper.jpeg",
  },
  {
    imgPath: "/images/logos/wisdom.jpg",
  },
  
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Devops",
    modelPath: "/models/aws_brand_smile.glb",
    scale: 0.2,
    rotation: [ -Math.PI / 8, 0, 0 ],
  },
];


const expCards = [
  {
    review:
      "Saniya understood what we needed without much hand-holding. She built tools that just worked: smooth, practical. You could tell she cared about making things better, not just writing code..",
    companyName: "Wisdom Education",
    logoPath: "/images/logos/wisdom.jpg",
    title: "FullStack Developer (Remote)",
    date: "December 2024 - Present",
    techStack:"NextJS, Figma, MERN, AWS",
    responsibilities: [
      "Developed an internal LMS and attendance tracker to simplify course access and reduce repetitive tasks by 70%.",
      "Built a student management system to handle records, course mapping, and results — cutting manual admin work by 68%.",
      "Created the company website from scratch with a responsive layout and smooth navigation.",
    ],
  },
  {
    review:
      "We could rely on Saniya to handle things end to end. She took initiative, kept the team aligned, and built internal dashboards that made our workflows way more efficient. It honestly felt like she was a core part of the team from day one.",
    companyName: "HiPER Automotive",
    logoPath: "/images/logos/hiper.jpeg",
    title: "Front-end Engineer (Remote)",
    date: "October 2023 - November 2024",
    techStack:"ReactJS, MUI, TailwindCSS, Figma, AWS, Docker ",
    responsibilities: [
      "Led HiPER’s frontend team — managed operations, mentored interns, and improved workflows, boosting delivery by 40%.",
      "Built internal tools: a Project Management System for task tracking, a Stock Dashboard for inventory insights, and a Customer Dashboard to show per-vehicle savings.",
    ],
  },
  {
    review:
      "Saniya paid attention to the little things. The UI felt cleaner, mobile users stayed longer, and we finally had proper data to back our product decisions. She didn’t overcomplicate things, just quietly improved everything she touched.",
    companyName: "Cloud Native Compliance Maven, LLC",
    logoPath: "/images/logos/cncm.jpeg",
    title: "Front-end Developer (Remote)",
    date: "January 2022 - September 2023",
    techStack:"ReactJS, MUI, Google Analytics",
    responsibilities: [
      "Collaborated with a team of five to implement responsive design and cross-browser support — increasing mobile engagement by 30%.",
      "Developed and optimized two web apps with a focus on performance, maintainability, and consistent UX.",
      "Integrated Google Analytics to track user behavior — helped reduce bounce rate by 25% and improve conversions by 12%.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/SaniyaFarzin",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/saniya-farzin/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
