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

export const creator = {
  name: "Anirban Basak",
  info: `
        I am a versatile developer skilled in Android development and backend systems with Spring Boot. Currently, I'm expanding into front-end web development to become a full-stack developer.

        Passionate about creating seamless user experiences and robust applications, I thrive on solving challenges and staying updated with the latest technologies.
    `,
  profileImage: myImage,
};

export const experiences = [
  {
    company: "MBITS Innovation Private Limited",
    timeline: "June 2023 - Dec 2023",
    jobTitle: "Android Developer Intern",
    location: "Remote",
    description: `
        As an Android intern at MBITS, I contributed to the development of Android apps, focusing on feature implementation and optimization. I gained hands-on experience with Kotlin, Java, and Android best practices, strengthening my mobile development skills.
    `,
  },

  {
    company: "IoT Lab, KIIT",
    timeline: "Sep 2022 - Aug 2024",
    jobTitle: "Android Lead",
    location: "DL - 007, KIIT",
    description: `
        At IoT Lab KIIT, I started as an Android Developer and was promoted to Android Developer Lead after a year. I led a team of 10+ members, overseeing technical projects and guiding the development of Android-based IoT solutions.
    `,
  },
];

export const technologies = [
  { imgSrc: javaLogo, color: "shadow-red-500", stack: "Java" },
  { imgSrc: springLogo, color: "shadow-green-500", stack: "Spring Boot" },
  { imgSrc: kotlinLogo, color: "shadow-blue-500", stack: "Kotlin" },
  { imgSrc: androidLogo, color: "shadow-green-300", stack: "Android" },
  { imgSrc: htmlLogo, color: "shadow-orange-500", stack: "HTML" },
  { imgSrc: cssLogo, color: "shadow-blue-500", stack: "CSS" },
  { imgSrc: javascriptLogo, color: "shadow-yellow-500", stack: "Javascript" },
  { imgSrc: reactLogo, color: "shadow-blue-400", stack: "React" },
  { imgSrc: tailwindLogo, color: "shadow-blue-500", stack: "Tailwind CSS" },
  { imgSrc: mySqlLogo, color: "shadow-white", stack: "My SQL" },
  { imgSrc: postgreLogo, color: "shadow-blue-500", stack: "PostGre" },
  { imgSrc: firebaseLogo, color: "shadow-yellow-500", stack: "Firebase" },
  { imgSrc: graphQlLogo, color: "shadow-pink-500", stack: "Graph QL" },
  { imgSrc: gitLogo, color: "shadow-orange-700", stack: "Git" },
];

export const projects = [
  {
    title: "JetChart",
    stack: ["Android", "Jetpack Compose", "Data Visualization"],
    githubLink: "https://github.com/basakjeet08/JetChart",
    description: `
        JetChart is a Compose library featuring over 15 unique chart types. Built with SOLID principles and the strategy design pattern, it ensures code reusability and scalability. It utilizes the Java Canva API and Kotlin DrawScopes for custom drawing.
    `,
  },

  {
    title: "Kritique App",
    stack: ["Android", "Spring Boot", "Published", "Firebase Auth"],
    githubLink: "https://github.com/iot-lab-kiit/IoT-Teacher-Review-App",
    description: `
        Kritique is a platform for faculty and student reviews, enabling users to rate and provide feedback on faculty members. It features a user-friendly interface, review management, and real-time feedback, helping institutions improve teaching quality and student experiences.
    `,
  },
  {
    title: "Matrix App",
    stack: ["Android", "Kotlin", "Jetpack Compose"],
    githubLink: "https://github.com/iot-lab-kiit/Scavenger-Hunt-App",
    description: `
        Matrix is a game app developed for the KIIT Fest 7.0 treasure hunt. I led an 8-member team across Android and Backend, ensuring timely delivery. I designed networking, a unified design system, and a QR scanner module, boosting efficiency. Thorough testing and debugging minimized bugs, ensuring a smooth experience during the event.
    `,
  },
];

export const socials = [
  {
    type: "LinkedIn",
    url: "https://www.linkedin.com/in/anirban-basak-b96055249/",
  },
  {
    type: "GitHub",
    url: "https://github.com/basakjeet08",
  },
  {
    type: "Instagram",
    url: "https://www.instagram.com/anirban_0_0",
  },
  {
    type: "Email",
    url: "mailto:jeetbasak2002@gmail.com",
  },
  {
    type: "Leetcode",
    url: "https://leetcode.com/u/anirban_0_0/",
  },
];

export const contacts = {
  phone: "+91 7478192996",
  email: "jeetbasak2002@gmail.com",
};
