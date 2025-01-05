// Technologies Images
import androidLogo from "../assets/technologies/androidLogo.png";
import cssLogo from "../assets/technologies/cssLogo.png";
import firebaseLogo from "../assets/technologies/firebaseLogo.png";
import gitLogo from "../assets/technologies/gitLogo.png";
import graphQlLogo from "../assets/technologies/graphQlLogo.png";
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
    { id: "#project", title: "Project" },
    { id: "#social", title: "Social" },
    { id: "#contact", title: "Contact Me" },
  ],
};

export const heroData = {
  id: "home",
  name: "Anirban Basak",
  info: `
        I am a passionate software developer with a strong foundation in Android development and backend systems using Spring Boot. 
        My journey has been driven by curiosity and a desire to create impactful digital experiences. 
        Currently, I am polishing my front-end web development skills, leveraging tools like React and Tailwind CSS, to become a dynamic full-stack developer capable of building end-to-end solutions.
    `,
  profileImage: {
    src: myImage,
    alt: `Anirban Basak's Image`,
  },
};

export const experienceData = {
  id: "experience",
  sectionHeading: "Experiences",
  expList: [
    {
      company: "MBITS Innovation Private Limited",
      timeline: "June 2023 - Dec 2023",
      jobTitle: "Trainee Android Intern",
      location: "Remote",
      description: `
        During my internship at MBITS, I contributed to Android app development, focusing on healthcare and fitness solutions. The app tracked health metrics, providing users with valuable insights. 
        I developed a track screen with interactive charts to visualize these metrics, enhancing usability and enabling seamless health monitoring.
    `,
    },

    {
      company: "IoT Lab, KIIT",
      timeline: "Sep 2022 - Aug 2024",
      jobTitle: "Android Lead",
      location: "DL - 007, KIIT",
      description: `
        At IoT Lab, I began as an Android Developer, where I developed innovative solutions integrating IoT technologies with Android apps. 
        Within a year, I was promoted to Android Developer Lead, overseeing a team of 10+ developers. 
        Together, we delivered several successful projects and hosted sereval events.
    `,
    },
  ],
};

export const technologyData = {
  sectionHeading: "Technologies",
  bodyText: `
      My technical journey began with Android development, where I created seamless and intuitive mobile experiences. 
      Over time, I delved into backend systems using Java and Spring Boot, building scalable and secure APIs. 
      To expand my expertise, I have embraced front-end web development, exploring tools like React and Tailwind CSS to craft visually appealing and interactive user interfaces.
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
    { imgSrc: graphQlLogo, shadow: "shadow-pink-500", stack: "GraphQL" },
    { imgSrc: gitLogo, shadow: "shadow-orange-700", stack: "Git" },
  ],
};

export const projectData = {
  id: "project",
  sectionHeading: "Projects",
  projectList: [
    {
      image: jetchartCover,
      title: "JetChart",
      stack: ["Android", "Jetpack Compose", "Data Visualization"],
      githubLink: "https://github.com/basakjeet08/JetChart",
      description: `
        JetChart is a Jetpack Compose chart library built using SOLID principles and the strategy design pattern. It emphasizes code reusability and scalability, ensuring ease of integration into various projects. The library leverages the Java Canvas API and Kotlin DrawScopes for high-performance custom rendering, making it a robust solution for data visualization needs in android.
    `,
    },

    {
      title: "Kritique App",
      stack: ["Android", "Spring Boot", "Published", "Firebase Auth"],
      githubLink: "https://github.com/iot-lab-kiit/IoT-Teacher-Review-App",
      description: `
        Kritique App allows students to provide feedback and ratings for faculty members, fostering a culture of continuous improvement. Its intuitive interfaces, robust data handling, and detailed analytics ensure transparency and reliability.
    `,
    },
    {
      title: "Matrix App",
      stack: ["Android", "Kotlin", "Jetpack Compose"],
      githubLink: "https://github.com/iot-lab-kiit/Scavenger-Hunt-App",
      description: `
        The Matrix App was developed as the central tool for the treasure hunt event at KIIT Fest 7.0. It featured a QR scanner for clue scanning and direction assistance, enhancing the treasure hunt experience. As the lead developer, I oversaw the app's development, ensuring robust functionality, a seamless user experience, and smooth event execution.
    `,
    },
  ],
};

export const socialData = {
  id: "social",
  sectionHeading: "Socials",
  content: `
      Connecting with people is at the heart of growth and collaboration. From showcasing my projects on GitHub to networking on LinkedIn and sharing creative moments on Instagram, these platforms represent my journey. Let's connect and create something impactful together!
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
      type: "Leetcode",
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
      Feel free to reach out for project collaborations, freelance opportunities, or professional queries. 
      I'm always excited to connect with like-minded individuals!
  `,
  accessKey: "991b4a14-5d79-4a8b-9b38-d0e5da179175",
};
