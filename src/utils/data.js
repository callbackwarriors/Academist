import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "user",
      email: "user@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  courses: [
    {
      title: "Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)",
      slug: "complete-react-developer-zero-to-mastery",
      shortDesc: "Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
      categories: "Programming",
      level: "Beginner",
      price: 12.99,
      courseProvider: "Robin Hasan",
      videoUrl: "https://www.youtube.com/watch?v=7roE88D2FQs&t=133s",
      img: "https://img-c.udemycdn.com/course/240x135/2365628_0b60_8.jpg",
      desc: "Just updated with all new React features for 2021 (React v17)! Join a live online community of over 400,000+ developers and a course taught by industry experts that have actually worked both in Silicon Valley and Toronto with React.js Using the latest version of React (React 17), this course is focused on efficiency. Never spend time on confusing, out of date, incomplete tutorials anymore. Graduates of Andrei’s courses are now working at Google, Tesla, Amazon, Apple, IBM, JP Morgan, Facebook, + other top tech companies.",
    },
    {
      title: "Next.js & React - The Complete Guide (incl. Two Paths!)",
      slug: "nextjs-react-the-complete-guide",
      shortDesc: "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
      categories: "Programming",
      level: "Beginner",
      price: 12.99,
      courseProvider: "Robin Hasan",
      videoUrl: "https://www.youtube.com/watch?v=oV-M6gZL4yQ",
      img: "https://img-c.udemycdn.com/course/240x135/3873464_403c.jpg",
      desc: "This course comes with two paths which you can take: The complete path (full >20h course) and the 'summary' path (~3h summary module) - you can choose the path that best fits your time requirements! :-) I created the bestselling Udemy course on React, now I'm super excited to share this course on NextJS with you - an in-depth course about an amazing React framework that allows you to take the next step as a React developer and build real, production-ready projects with React and Next.js!",
    },
    {
      title: "Mastering React With Interview Questions,eStore Project-2021",
      slug: "mastering-react-with-interview-questions-estore-project-nirmal-joshi",
      shortDesc: "Fundamentals, Router, Context API, Hooks, Redux, Redux-Toolkit, HTTP & REST API calls, React with TypeScript etc.",
      categories: "Programming",
      level: "Beginner",
      price: 12.99,
      courseProvider: "Afran",
      videoUrl: "https://www.youtube.com/watch?v=oV-M6gZL4yQ",
      img: "https://img-c.udemycdn.com/course/240x135/3591662_80f8.jpg",
      desc: "In this comprehensive course, we will go through the prior and newer versions of ReactJS with the primary focus on understanding the latest version(17). The entire course is prepared in a methodical way so that candidates learn & master ReactJS fundamentals through smaller applications, get prepared for interviews & advanced concepts in the simplest of ways. React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components.",
    },
    
  ],
};
export default data;
