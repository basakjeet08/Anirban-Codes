// Icons
import {
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  SiAndroid,
  SiAngular,
  SiCelery,
  SiCss3,
  SiDjango,
  SiDocker,
  SiElasticsearch,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiLeetcode,
  SiLinux,
  SiMercurial,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Profile Image
import myImage from "../assets/myImage.jpg";

// Projects Images
import jetchartCover from "../assets/projects/jetchartCover.jpg";

export const headerData = {
  websiteName: "Anirban Codes",
  menuItems: [
    { id: "#home", title: "Home" },
    { id: "#experience", title: "Experience" },
    { id: "#technologies", title: "Stack" },
    { id: "#project", title: "Projects" },
    { id: "#social", title: "Socials" },
  ],
};

export const heroData = {
  id: "home",
  name: "Anirban Basak",
  role: "Full-Stack Software Engineer",
  info: `
    I'm a Full-Stack Software Engineer working primarily with Python (Django),
    Java (Spring Boot), and Angular.

    Beyond this stack, I enjoy learning and experimenting with new technologies.

    I enjoy building backend systems with a focus on scalability, performance,
    maintainability, and clean architectures that can evolve as products grow.

    I also enjoy frontend development, where small details can make an interface
    easier and more enjoyable to use.
  `,
  profileImage: {
    src: myImage,
    alt: "Anirban Basak",
  },
  stats: [
    { value: "300K+", label: "Daily matching requests" },
    { value: "10K+", label: "Kritique downloads" },
    { value: "900+", label: "Concurrent Matrix users" },
  ],
};

export const footerData = {
  stackSummary: "Full-Stack • Python / Django • Java / Spring Boot • Angular",
};

export const experienceData = {
  id: "experience",
  kicker: "Career",
  sectionHeading: "Experience",
  blurb:
    "Building scalable backend systems, delivering Android applications, and leading development teams.",
  expList: [
    {
      id: "instahyre",
      company: "InstaHyre",
      timeline: "June 2025 - Present",
      jobTitle: "Software Engineer (SDE I)",
      location: "Noida, India",
      tags: ["Python", "Django", "Java", "Spring Boot", "Elasticsearch", "Redis"],
      description:
        "At InstaHyre, I own development of core candidate-facing pages and workflows.",
      highlights: [
        "Built and optimized an Elasticsearch-based candidate-job matching engine serving 300K+ requests daily.",
        "Reduced API latency by up to 65% across 10+ endpoints by optimizing queries, eliminating N+1 queries, and implementing Redis caching.",
        "Built a Zoho Contacts integration syncing 60K+ recruiter records daily for CRM workflows.",
        "Contributed to the platform's design system and reusable MJML email system.",
      ],
    },

    {
      id: "mbits",
      company: "MBITS Innovation Private Limited",
      timeline: "May 2023 - December 2023",
      jobTitle: "Android Developer",
      location: "Bengaluru, India (Remote)",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Charts"],
      description:
        "At MBITS, I worked on Android applications focused on health tracking and media features.",
      highlights: [
        "Built a health-tracking screen that brings together health metrics, graphs, and data visualizations to help users monitor their health.",
        "Built a charting library with 15+ reusable components used across 90% of health-tracking screens.",
        "Migrated a Spotify module to Jetpack Compose, reducing its codebase size by 50%.",
        "Simplified backend integration by consolidating 24 API endpoints into 4.",
      ],
    },

    {
      id: "iot-lab-kiit",
      company: "IoT Lab, KIIT",
      timeline: "Sep 2022 - Aug 2024",
      jobTitle: "Android Lead",
      location: "KIIT, Bhubaneswar",
      tags: ["Backend", "Android", "IoT", "Leadership", "Mentoring"],
      description:
        "At IoT Lab, I started as an Android Developer and was promoted to Android Lead within a year, leading a team of 10+ developers.",
      highlights: [
        "Worked on Android and IoT-based projects.",
        "Mentored developers and coordinated project delivery.",
        "Helped organize technical events.",
      ],
    },
  ],
};

export const technologyData = {
  id: "technologies",
  kicker: "Stack",
  sectionHeading: "Technologies",
  bodyText: `
    I primarily work with Python and Django, Java and Spring Boot, and Angular.
    My experience also spans Android development, databases, search, caching,
    and development tools.
  `,
  groups: [
    {
      title: "Backend",
      techList: [
        { stack: "Python", icon: SiPython },
        { stack: "Django", icon: SiDjango },
        { stack: "Java", icon: FaJava },
        { stack: "Spring Boot / Spring Data JPA / Spring AI", icon: SiSpring },
        { stack: "REST APIs", icon: FaCode },
        { stack: "Celery", icon: SiCelery },
        { stack: "RabbitMQ", icon: SiRabbitmq },
      ],
    },
    {
      title: "Frontend",
      techList: [
        { stack: "Angular / AngularJS", icon: SiAngular },
        { stack: "TypeScript", icon: SiTypescript },
        { stack: "JavaScript", icon: SiJavascript },
        { stack: "React", icon: SiReact },
        { stack: "HTML", icon: SiHtml5 },
        { stack: "CSS", icon: SiCss3 },
        { stack: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Databases, Search & Caching",
      techList: [
        { stack: "SQL", icon: FaDatabase },
        { stack: "PostgreSQL", icon: SiPostgresql },
        { stack: "MySQL", icon: SiMysql },
        { stack: "Elasticsearch", icon: SiElasticsearch },
        { stack: "Redis", icon: SiRedis },
      ],
    },
    {
      title: "Mobile",
      techList: [
        { stack: "Kotlin", icon: SiKotlin },
        { stack: "Android SDK", icon: SiAndroid },
        { stack: "Jetpack Compose", icon: SiJetpackcompose },
      ],
    },
    {
      title: "Tools",
      techList: [
        { stack: "Docker", icon: SiDocker },
        { stack: "Git", icon: SiGit },
        { stack: "Linux", icon: SiLinux },
        { stack: "Mercurial", icon: SiMercurial },
        { stack: "Postman", icon: SiPostman },
        { stack: "Firebase", icon: SiFirebase },
      ],
    },
  ],
};

export const projectData = {
  id: "project",
  kicker: "Selected work",
  sectionHeading: "Projects",
  blurb:
    "A selection of full-stack applications, developer tools, and Android projects I've built.",
  filters: [
    { id: "all", title: "All" },
    { id: "full-stack", title: "Full-stack" },
    { id: "android", title: "Android" },
    { id: "backend", title: "Backend" },
    { id: "frontend", title: "Frontend" },
    { id: "tools", title: "Tools" },
  ],
  projectList: [
    {
      title: "Harmoniq",
      categories: ["full-stack", "backend", "frontend"],
      featured: true,
      stack: [
        "Spring Boot",
        "Spring AI",
        "PostgreSQL",
        "Angular",
        "Ollama",
        "Docker",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/basakjeet08/Harmoniq",
        },
      ],
      description: `
        Harmoniq is a mental health platform with community discussions,
        a personalized feed, and an AI chatbot.

        Users can discover relevant discussions and chat with an AI that
        maintains context across messages.

        I built the full-stack platform and used Docker Compose to simplify local setup.
      `,
    },

    {
      title: "AgentHub",
      categories: ["tools"],
      featured: true,
      stack: ["Python", "Textual", "TUI", "textual-tty", "bittty"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/basakjeet08/AgentHub",
        },
      ],
      description: `
        AgentHub brings multiple coding-agent sessions and shell terminals into
        one workspace while preserving each agent's native terminal interface.

        Built with Python and Textual, it lets users discover and resume
        existing sessions, switch between active agents, and track activity
        in the sidebar.

        On Linux, desktop notifications alert users when supported agents need
        input or finish a task.

        It supports multiple providers, including Codex, OpenCode, Devin, and Antigravity.
      `,
    },

    {
      title: "Kritique App",
      categories: ["full-stack", "android", "backend"],
      featured: true,
      status: "Published",
      stack: ["Android", "Spring Boot", "Firebase Auth"],
      links: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=in.iot.lab.kritique&hl=en_US",
        },
      ],
      description: `
        Kritique is a full-stack teacher review platform built with Android
        and Spring Boot.

        Students can rate educators, share feedback, and explore educator profiles.

        The app reached 10K+ downloads and a 4.6-star rating on the Play Store.
      `,
    },

    {
      image: jetchartCover,
      imageAlt: "JetChart charting library cover",
      title: "JetChart",
      categories: ["android"],
      stack: ["Android", "Jetpack Compose", "Data Visualization"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/basakjeet08/JetChart",
        },
      ],
      description: `
        JetChart is a reusable Jetpack Compose library for adding
        customizable charts to Android applications.

        It uses SOLID principles and the Strategy pattern for extensibility,
        with custom rendering through Kotlin DrawScope and the Canvas API.
      `,
    },

    {
      title: "Matrix App",
      categories: ["android"],
      stack: ["Android", "Kotlin", "Jetpack Compose"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/iot-lab-kiit/Scavenger-Hunt-App",
        },
      ],
      description: `
        Matrix is a treasure hunt app that supported 900+ concurrent users
        during a live event.

        I led a team of 8 developers to deliver it within 10 days, building
        networking modules, a shared design system, and a QR scanner.

        Extensive testing and debugging reduced bugs by 66%.
      `,
    },
  ],
};

export const socialData = {
  id: "social",
  kicker: "Connect",
  sectionHeading: "Socials",
  content: `
      Explore my projects on GitHub, connect with me on LinkedIn, or find my coding profile on LeetCode.
      You can also reach me by email or connect on Instagram.
  `,
  socialList: [
    {
      type: "LinkedIn",
      name: "Anirban Basak",
      url: "https://www.linkedin.com/in/anirban-basak-b96055249/",
      icon: FaLinkedinIn,
    },
    {
      type: "GitHub",
      name: "Basakjeet08",
      url: "https://github.com/basakjeet08",
      icon: FaGithub,
    },
    {
      type: "LeetCode",
      name: "anirban_0_0",
      url: "https://leetcode.com/u/anirban_0_0/",
      icon: SiLeetcode,
    },
    {
      type: "Instagram",
      name: "anirban_0_0",
      url: "https://www.instagram.com/anirban_0_0",
      icon: FaInstagram,
    },
    {
      type: "Email",
      name: "jeetbasak2002@gmail.com",
      url: "mailto:jeetbasak2002@gmail.com",
      icon: FaEnvelope,
    },
  ],
};
