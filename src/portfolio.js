/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kaden Bradshaw",
  title: "Hey, I'm Kaden!",
  subTitle: emoji(
    "Junior Computer Science student at Brigham Young University (Bioinformatics emphasis). I build clean, reliable software and I'm anxious to contribute--especially when it comes to emerging technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button. this link doesn't need to be replaced to get your resume in the site. Follow the README instructions for that.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kdb82",
  // linkedin: "https://www.linkedin.com/in/jacob-nef/",
  gmail: "kdnbradshaw@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK-LEANING CS STUDENT WITH STRONG FUNDAMENTALS & CURIOSITY",
  skills: [
    emoji(
      "⚡ Implement data structures/algorithms for in Python, C, C++, and Java"
    ),
    emoji("⚡ Write hundreds of unit tests in Java and TypeScript to catch edge cases"),
    emoji(
      "⚡ Translate real-world needs into shipped features"
    ),
     emoji(
      "⚡ Statistical analysis and modeling of biological data with R."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    { skillName: "R", 
      fontAwesomeClassname: "fas fa-chart-line" 
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    { skillName: "Java", 
      fontAwesomeClassname: "fab fa-java" 
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    { skillName: "C++",
       fontAwesomeClassname: "fas fa-code" 
    },
    { skillName: "Git", 
    fontAwesomeClassname: "fab fa-git-alt"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
        // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byuMedallionNavy.png"),
      logoPosition: "center", // Optional: center, top, bottom, left, right, or specific like "center top"
      logoScale: 1.2, // Optional: zoom factor for logo within the FIXED circle (e.g., 0.8 = zoomed out, 1.5 = zoomed in, circle size never changes)
      subHeader: "Bachelor of Science in Computer Science (Bioinformatics Emphasis)",
      duration: "January 2023 - April 2027 (expected)",
      desc: "GPA 3.8; coursework in Data Structures, Computational Biology, Web Design.",
      descBullets: [
        "Projects spanning algorithms, data analysis tooling, and image processing apps",
        "Fluent in Portuguese; leadership & mentoring experience"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Python / Java / C / C++", progressPercentage: "80%" },
    { Stack: "React / Node / Web", progressPercentage: "50%" },
    { Stack: "Data / SQL / Scripting", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Landscape Designer",
      company: "Brigham Young Univerity",
      companylogo: require("./assets/images/byuMedallionNavy.png"), // TODO: add logo or replace with a generic icon
      date: "2023 - present",
      desc: "",
      descBullets: [
        "Managed complex, multi-step projects requiring precise planning, prioritization, execution, and teamwork",
        "Developing strong problem-solving and organizational skills that translate directly to software development workflows."
      ]
    },
    {
      role: "Area Manager (Leadership & Ops)",
      company: "Greenix Pest Control",
      companylogo: require("./assets/images/greenix.jpg"), // TODO: add logo or replace with a generic icon
      date: "2023",
      desc: "Led outreach, scheduling, and service quality; met sales targets and coordinated multi-team logistics.",
      descBullets: [
        "Managed schedules and delivery of services; revenue milestones achieved",
        "Built communication and leadership skills under pressure"
      ]
    },
    {
      role: "Operations & Manufacturing Assistant",
      company: "Merrill Woodworking",
      companylogo: require("./assets/images/merrillWoodworking.png"),
      date: "Oct 2022 – Dec 2022",
      desc: "Team-based production, materials management, and quality control to improve efficiency."
    },
    // {
    //   role: "Distribution Associate",
    //   company: "Kool Ice & Distributing",
    //   companylogo: require("./assets/images/ice.png"),
    //   date: "Jun 2020 – Oct 2020",
    //   desc: "Route optimization, inventory display, and store coordination to improve throughput."
    // },
    // {
    //   role: "Volunteer Representative (Portuguese)",
    //   company: "São Paulo, Brazil",
    //   companylogo: require("./assets/images/brazil.png"),
    //   date: "Oct 2020 – Oct 2022",
    //   desc: "Led 15+ volunteers; weekly trainings, progress follow-ups, service projects; taught English classes."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects / Startups",
  subtitle: "SELECTED PERSONAL AND SCHOOL PROJECTS",
  projects: [
    {
      image: require("./assets/images/chessScreenshot.png"),
      projectName: "Chess Game",
      projectDesc: "Features a networked client-server architecture, with a command-line client, a server to manage users and games, and shared modules for implementing chess rules and game state management.",
      footerLink: [
        {
          name: "See Github",
          url: "http://github.com/kdb82/chess"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/byuDevelopers.png"),
      projectName: "AskCosmoAI",
      projectDesc:
        "BYU Q&A assistant: Python scrapers → embeddings/vector search → LLM retrieval for campus info.",
      footerLink: [
        { name: "See Github", url: "https://github.com/BryceColton/askCosmoAI" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

// Update this section even if you have github linked, in case the linking fails
const contactInfo = {
  title: emoji("Contact Me ☏"),
  subtitle:
    "Open to internships, research, and junior roles. Let’s chat!",
  number: "+1(208)970-4724",
  email_address: "kdnbradshaw@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
