import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  gkeep,
  book,
  feed,
  QA,
  vid,
  mp3,
  tnp,
  wed,
  portf,

  gssoc,
  ssoc,
  acme,
  java,
  php,
  codigniter,
  mysql,
  express,
  jsp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "JSP",
    icon: jsp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Php",
    icon: php,
  }, 
  {
    name: "CodeIgniter",
    icon: codigniter,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Open Source Developer",
    company_name: "GSSOC'23",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "GirlScript Summer Of Code is a three-month-long Open-Source Program conducted every summer by the Girlscript Foundation.",
      "Contributing web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, mentors, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "SSOC'23",
    icon: ssoc,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present 2023",
    points: [
      "SSOC is a 2 Month Open Source Program Organized By Social. We aim to promote open source with new age technologies & want everyone to get the right path & gudience through SSOC.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JAVA APPRENTICE ",
    company_name: 'ACME Embedded Technologies Pvt Ltd.',
    icon: acme,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2021",
    points: [
      "Designed and developed a web-app from scratch using JSP and MYSQL which increased user engagement by 80% and enable users to upload, share, and watch videos.",
      "The feature of Project is user can upload videos by creating a channel and can customize videos, channel, comments, profile.",
      "Improved web-app by adding features like login, sign in, like, dislike, comment, subscribe and manage etc",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Feedback App",
    description:
      "A Feedback app using React with a rating system(1 - 10) is a web application that allows users to provide feedback or reviews and rate a particular product, service, or experience.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: feed,
    source_code_link: "https://delicate-sfogliatella-bacef0.netlify.app/",
  },
  {
    name: "Google Keep clone",
    description:
      "A Google Keep clone using HTML, CSS, and JavaScript in 10 days. Implemented key features such as adding, deleting, and archiving notes",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: gkeep,
    source_code_link: "https://rahul-bhati.github.io/Google_Keep_Clone/",
  },
  {
    name: "BOOK-BUY SELL WEB-APP",
    description:
      "A Web app for buying and selling second hand books online build with back-end on CodeIgniter and Mysql, which resulted in increased number of users by 10% ",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "CodeIgniter",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://youtu.be/MzOmKDftOTU",
  },
  {
    name: "STACK-OVERFLOW Q&A",
    description:
      "Web-app similar to Stack Overflow using JSP and MySQL, enabling users to ask questions, provide answers, and rate content and an Admin Panel with user blocking feature after 3 warnings for irrelevant activity. ",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: QA,
    source_code_link: "https://youtu.be/bL6M2N1Aev8",
  },
  {
    name: "MP3 MUSIC WEB-APP",
    description:
      "Developed a web-app, using JSP and MYSQL, that allowed users to music , album and can add in favourite list .Created an Admin Panel where user can upload and manage song, albums and categories ",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: mp3,
    source_code_link: "https://youtu.be/QEhhJ3rNxAA",
  },
  {
    name: "MATRIMONIAL WEB-APP",
    description:
      "Developed a matrimonial web-app using JSP and MYSQL, with user authentication, profile creation, search functionality, messaging, and favorites feature, along with an enhanced profile page featuring password change, profile editing, favorites, inbox, and stories within 1 month.",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: wed,
    source_code_link: "https://youtu.be/Bgc-QFWpec0",
  },
  {
    name: "TRAINING AND PLACEMENT CELL",
    description:
      "A App utilizing Swing and JDBC Database, resulting in a 10% efficiency improvement for the department.Developed a user- friendly Java Swing application for storing and retrieving student and company information. ",
    tags: [
      {
        name: "Java Swing",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tnp,
    source_code_link: "https://youtu.be/MFGqZfia1aQ",
  },
  {
    name: "Video Sharing Web-App",
    description:
      "A web-app from scratch using JSP and MYSQL which increased user engagement by 80% and enable users to upload, share, and watch videos, create channel, comments, profile, login, sign up, like, dislike, comment, subscribe and manage etc",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Web Development",
        color: "orange-text-gradient",
      },
    ],
    image: vid,
    source_code_link: "https://youtu.be/YF1GUIHX0as",
  },
  {
    name: "My Portfolio Web-App",
    description:
      "A web application designed to showcase and highlight an individual's or a professional's portfolio. This app serves as a platform where users can create and display their work, skills, and achievements in a visually appealing and organized manner.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portf,
    source_code_link: "https://github.com/Rahul-Bhati/My_Portfolio_Web/",
  },
];

export { services, technologies, experiences, testimonials, projects };
