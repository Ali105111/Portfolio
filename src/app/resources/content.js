import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhammad",
  lastName: "Ali",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ali105111",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-ali-iqbal-0bb504300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:muhammadaliiqbal105111@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer </>,
  subline: (
    <>
      I'm Muhammad Ali, Passionate and results-driven{" "}
      <InlineCode>Full Stack Web Developer</InlineCode> with a strong command of
      <br /> front-end and back-end technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate and results-driven Full Stack Web Developer with a strong
        command of both front-end and back-end technologies. Adept at crafting
        dynamic, responsive web applications that not only meet but exceed
        client expectations. Skilled in leveraging modern frameworks and design
        patterns to solve complex challenges, with a keen eye for detail and a
        commitment to delivering high-quality solutions. Excels in collaborative
        team environments as well as in independent projects, consistently
        demonstrating a dedication to continuous learning and innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PhoneBechPk.com",
        // timeframe: "2025 - Present",
        role: "Full Stack Development",
        achievements: [
          <>
           Developed the Phone Bech marketplace platform using Next.js and Supabase, creating an intuitive interface for users to post phone ads and for buyers to contact sellers efficiently.
          </>,
          <>
            Implemented an AI model that verifies whether images posted in ads are actually of phones, enhancing platform reliability and user trust.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple
      //       platforms, improving design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line,
      //       contributing to a 15% increase in overall company revenue.
      //     </>,
      //   ],
      //   images: [   // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
        description: <>bachelor's in computer science</>,
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      // Languages
      {
        title: "Java",
        icon: "java",
        description: "Proficient in Java programming language.",
        category: "languages",
      },
      {
        title: "JavaScript",
        icon: "javascript",
        description: "Strong knowledge of JavaScript for web development.",
        category: "languages",
      },

      // Frameworks/Libraries
      {
        title: "ReactJs",
        icon: "react",
        description: "Experienced in building user interfaces with React.",
        category: "frameworks",
      },
      {
        title: "NextJS",
        icon: "nextjs",
        description: "Building next-gen apps with Next.js.",
        category: "frameworks",
      },
      {
        title: "Spring Boot",
        icon: "springboot",
        description: "Proficient in building backend applications with Spring Boot.",
        category: "frameworks",
      },
      {
        title: "Express Js",
        icon: "Express",
        description: "Proficient in building backend applications with Express Js.",
        category: "frameworks",
      },
      {
        title: "  Node Js",
        icon: "Node js",
        description: "Proficient in building backend applications with Node js.",
        category: "frameworks",
      },
      {
        title: "Supabase",
        icon: "Supabase",
        description: "Proficient in building backend applications with Node js.",
        category: "frameworks",
      },

      // Web Development Tools
      // {
      //   title: "Redux Toolkit",
      //   icon: "redux",
      //   description: "State management using Redux Toolkit.",
      //   category: "web-tools",
      // },

      // Databases
      {
        title: "MySQL",
        icon: "mysql",
        description: "Experienced in working with MySQL databases.",
        category: "databases",
      },
      {
        title: "PostgreSQL",
        icon: "postgresql",
        description: "Proficient in PostgreSQL for database management.",
        category: "databases",
      },
      {
        title: "Supabase",
        icon: "Supabase",
        description: "Experienced in Firebase for real-time databases and authentication.",
        category: "databases",
      },

      // Developer Tools
      {
        title: "VS Code",
        icon: "vscode",
        description: "Primary code editor for development.",
        category: "dev-tools",
      },
      {
        title: "IntelliJ IDEA",
        icon: "intellij",
        description: "Preferred IDE for Java and Kotlin development.",
        category: "dev-tools",
      },
      {
        title: "Eclipse",
        icon: "eclipse",
        description: "Experienced in using Eclipse for Java development.",
        category: "dev-tools",
      },
      {
        title: "Git",
        icon: "git",
        description: "Version control using Git.",
        category: "dev-tools",
      },
      {
        title: "GitHub",
        icon: "github",
        description: "Collaboration and code hosting on GitHub.",
        category: "dev-tools",
      },
      {
        title: "Android Studio",
        icon: "androidstudio",
        description: "Experienced in Android app development using Android Studio.",
        category: "dev-tools",
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
