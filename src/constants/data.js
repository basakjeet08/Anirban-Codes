// Technologies Images
import androidLogo from "../assets/technologies/androidLogo.png";
import cssLogo from "../assets/technologies/cssLogo.png";
import firebaseLogo from "../assets/technologies/firebaseLogo.png";
import gitLogo from "../assets/technologies/gitLogo.png";
import htmlLogo from "../assets/technologies/htmlLogo.png";
import javaLogo from "../assets/technologies/javaLogo.png";
import javascriptLogo from "../assets/technologies/javascriptLogo.png";
import kotlinLogo from "../assets/technologies/kotlinLogo.png";
import mySqlLogo from "../assets/technologies/mySqlLogo.png";
import postgreLogo from "../assets/technologies/postgreLogo.png";
import reactLogo from "../assets/technologies/reactLogo.png";
import springLogo from "../assets/technologies/springLogo.png";
import tailwindLogo from "../assets/technologies/tailwindLogo.png";
import myImage from "../assets/myImage.jpg";

// Projects Images
import jetchartCover from "../assets/projects/jetchartCover.jpg";

// Socials Images
import githubLogo from "../assets/socials/githubLogo.png";
import gmailLogo from "../assets/socials/gmailLogo.png";
import instagramLogo from "../assets/socials/instagramLogo.png";
import linkedInLogo from "../assets/socials/linkedInLogo.png";
import leetcodeLogo from "../assets/socials/leetcodeLogo.png";

export const headerData = {
  websiteName: "Anirban Codes",
  menuItems: [
    { id: "#home", title: "Home" },
    { id: "#experience", title: "Experience" },
    { id: "#project", title: "Projects" },
    { id: "#social", title: "Socials" },
    { id: "#contact", title: "Contact Me" },
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
  sectionHeading: "Experience",
  expList: [
    {
      company: "InstaHyre",
      timeline: "June 2025 - Present",
      jobTitle: "Software Engineer (SDE I)",
      location: "Noida, India",
      description: `
        At InstaHyre, I own development of core candidate-facing pages and workflows.

        I helped build and optimize an Elasticsearch-based candidate-job matching engine
        serving 300K+ requests daily.

        I reduced API latency by up to 65% across 10+ endpoints by optimizing queries,
        eliminating N+1 queries, and implementing Redis caching.

        I also built a Zoho Contacts integration syncing 60K+ recruiter records daily for CRM workflows,
        and contributed to the platform's design system and reusable MJML email system.
      `,
    },

    {
      company: "MBITS Innovation Private Limited",
      timeline: "May 2023 - December 2023",
      jobTitle: "Android Developer Intern",
      location: "Bengaluru, India (Remote)",
      description: `
        At MBITS, I worked on Android applications focused on health tracking
        and media features.

        I built a charting library with 15+ reusable components used across
        90% of health-tracking screens.

        I migrated a Spotify module to Jetpack Compose, reducing its codebase
        size by 50%.

        I also simplified backend integration by consolidating 24 API endpoints into 4.
      `,
    },

    {
      company: "IoT Lab, KIIT",
      timeline: "Sep 2022 - Aug 2024",
      jobTitle: "Android Lead",
      location: "KIIT, Bhubaneswar",
      description: `
        At IoT Lab, I started as an Android Developer and was promoted to Android
        Lead within a year, leading a team of 10+ developers.

        I worked on Android and IoT-based projects while mentoring developers,
        coordinating project delivery, and helping organize technical events.
      `,
    },
  ],
};

export const technologyData = {
  sectionHeading: "Technologies",
  bodyText: `
    I primarily work with Python and Django for backend development, alongside
    Java and Spring Boot for REST APIs and application services, using Spring
    Data JPA and Spring AI.

    On the frontend, I work with Angular, AngularJS, TypeScript, JavaScript,
    React, HTML, CSS, and Tailwind CSS.

    I work with SQL, PostgreSQL, and MySQL for databases, Elasticsearch for
    search, and Redis for caching.

    For background processing and messaging, I use Celery and RabbitMQ.

    My development tools and infrastructure include Docker, Git, Mercurial,
    Linux, Postman, and Firebase.

    My mobile development experience includes Kotlin, the Android SDK, and Jetpack Compose.
  `,
  techList: [
    { imgSrc: javaLogo, shadow: "shadow-red-500", stack: "Java" },
    { imgSrc: springLogo, shadow: "shadow-green-500", stack: "Spring Boot" },
    { imgSrc: kotlinLogo, shadow: "shadow-blue-500", stack: "Kotlin" },
    { imgSrc: androidLogo, shadow: "shadow-green-300", stack: "Android" },
    { imgSrc: htmlLogo, shadow: "shadow-orange-500", stack: "HTML" },
    { imgSrc: cssLogo, shadow: "shadow-blue-500", stack: "CSS" },
    {
      imgSrc: javascriptLogo,
      shadow: "shadow-yellow-500",
      stack: "JavaScript",
    },
    { imgSrc: reactLogo, shadow: "shadow-blue-400", stack: "React" },
    { imgSrc: tailwindLogo, shadow: "shadow-blue-500", stack: "Tailwind CSS" },
    { imgSrc: mySqlLogo, shadow: "shadow-white", stack: "MySQL" },
    { imgSrc: postgreLogo, shadow: "shadow-blue-500", stack: "PostgreSQL" },
    { imgSrc: firebaseLogo, shadow: "shadow-yellow-500", stack: "Firebase" },
    { imgSrc: gitLogo, shadow: "shadow-orange-700", stack: "Git" },
  ],
};

export const projectData = {
  id: "project",
  sectionHeading: "Projects",
  projectList: [
    {
      title: "Harmoniq",
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
      stack: ["Android", "Spring Boot", "Firebase Auth", "Published"],
      links: [
        {
          label: "Android",
          url: "https://github.com/basakjeet08/IoT-Teacher-Review-App",
        },
        {
          label: "Backend",
          url: "https://github.com/basakjeet08/Kritique-Backend-Clone",
        },
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
      logo: linkedInLogo,
    },
    {
      type: "GitHub",
      name: "Basakjeet08",
      url: "https://github.com/basakjeet08",
      logo: githubLogo,
    },
    {
      type: "LeetCode",
      name: "anirban_0_0",
      url: "https://leetcode.com/u/anirban_0_0/",
      logo: leetcodeLogo,
    },
    {
      type: "Instagram",
      name: "anirban_0_0",
      url: "https://www.instagram.com/anirban_0_0",
      logo: instagramLogo,
    },
    {
      type: "Email",
      name: "jeetbasak2002@gmail.com",
      url: "mailto:jeetbasak2002@gmail.com",
      logo: gmailLogo,
    },
  ],
};

export const contactData = {
  id: "contact",
  sectionHeading: "Contact Me",
  content: `
    Have a project in mind or want to discuss a software engineering opportunity?
    Send me a message about your project, team, or collaboration.
  `,
  accessKey: "991b4a14-5d79-4a8b-9b38-d0e5da179175",
};
