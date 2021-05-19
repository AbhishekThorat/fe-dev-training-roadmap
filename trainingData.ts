import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";

enum TopicLevel {
  Common,
  Beginner,
  Intermediate,
  Advanced
}

export type TrainingDataType = {
  level: TopicLevel;
  timeLineDotContent?: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description: React.ReactNode;
  assignments?: {
    title: string;
    subTitle?: string;
    referenceUrls?: string[];
  }[];
}

export const TIME_LINE_OPPOSITE_CONTENT_PREFIX = "Step";

export const trainingData: TrainingDataType[] = [
  {
    level: TopicLevel.Common,
    title: "Problem Solving",
    subTitle: "Let's start evolving Problem Solving skills!",
    description: "I think problem solving is one of most important skill for software engineers. I recommend to solve at least one problem per day.",
    assignments: [{
      title: "Reference URLs",
      subTitle: "We can use following awesome platforms (Use JS to solve problems)",
      referenceUrls: [
        "https://www.freecodecamp.org/",
        "https://www.codility.com/",
        "https://www.dailycodingproblem.com/",
        "https://www.hackerrank.com/"
      ]
    }]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic HTML",
    subTitle: "Let's start with basic HTML",
    description: `Basic HTML, Doctype, HTML and HTML5, Id and class, Favicon, Semantic HTML, HTML Input types, HTML Attributes`,
    assignments: [
      {
        title: "Reading Materials -",
        referenceUrls: ["https://www.w3schools.com/html/default.asp", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics", "http://tudip.steersimple.com/projects/tudip-internal/wiki/HTML_Deep_Diving"]
      },
      {
        title: "Assignment - 1",
        subTitle: "Portfolio-site",
        referenceUrls: ["https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage"]
      }]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advanced HTML topics",
    subTitle: "Let's understand HTML forms and storage APIs along with HTML events",
    description: `HTML forms
    Storages and HTML Events -> Session Storage and Local Storage
    `,
    assignments: [{
      title: "Assignment - 2",
      subTitle: "An Online Survey Form -",
      referenceUrls: ["https://codepen.io/freeCodeCamp/full/VPaoNP"]
    }]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advanced HTML topics",
    subTitle: "Let's understand untold HTML requirements",
    description: `SEO
    Accessibility
    `,
    assignments: [
      {
        title: "Assignment 3",
        subTitle: "Product landing page - ",
        referenceUrls: ["https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Product-Landing-Page.md"]
      },
      {
        title: "Bonus",
        subTitle: "HTML exercise - ",
        referenceUrls: ["https://www.w3schools.com/html/exercise.asp"]
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic CSS",
    subTitle: "Let's start with basic CSS",
    description: `Basics points -
    Internal and External CSS, BOX model, float, positions,
    display, CSS Grid, Flex Box, Margin collapse, Different selectors, Specificity.
    
    Understand layouts
    `,
    assignments: [
      {
        title: "Assignment 4",
        subTitle: "Implement login page for some site -",
        referenceUrls: ["https://app.pluralsight.com/id?"]
      },
      {
        title: "Assignment 5",
        subTitle: "Acme Photography - ",
        referenceUrls: ["https://jolly-kalam-23776e.netlify.app/photographysite/#images"]
      }
    ]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advanced styles",
    subTitle: "Let's start with basic CSS",
    description: `Responsive Design -
    Viewport, Media queries
    
    `,
    assignments: [
      {
        title: "Assignment 6",
        subTitle: "Let's make Assignment 1 responsive.",
      },
      {
        title: "Bonus",
        subTitle: "complete this CSS exercise -",
        referenceUrls: ["https://www.w3schools.com/css/exercise.asp"]
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic GIT",
    subTitle: "Let's learn about code versioning",
    description: `What, Why, How
    what is git, different softwares for version management

    Practice
    git clone, git status, git add, git commit, git pull, git push,
    git config user name email, git branch, raise a PR
    `,
    assignments: [
      {
        title: "Assignment 7",
        subTitle: "Create a repo and try above commands.",
      },
      {
        title: "Assignment 8",
        subTitle: "Create a repo with name something like practice and commit all assignments as separate branch and follow the same for upcoming assignments.",
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic JavaScript",
    subTitle: "Let's dive into JS",
    description: `Basics
    String, Number methods, Iterators, Closures, RegEx

    DOM manipulation
    `,
    assignments: [
      {
        title: " Assignment 9",
        subTitle: "Stopwatch-App -",
        referenceUrls: ["https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Stopwatch-App.md"]
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "JSON",
    subTitle: "Let's learn about JSON",
    description: ` What, Why, How
    Discuss the handling of JSON with JS, mostly mapping, stringify and Parse.
    `
  },
  {
    level: TopicLevel.Beginner,
    title: "Package manager",
    subTitle: "Let's learn about package managers with node ecosystem.",
    description: `What, Why, How
    NPM Yarn
    `
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advance JS",
    subTitle: "Understand few advanced but most used JS techniques",
    description: `Mostly Used
    hoisting, Network calls, Event bubbling, Prototype,
    Scope, Shadow DOM, Promise, async await

    `,
    assignments: [
      {
        title: "Assignment 10",
        subTitle: "TODO app assignment - ",
        referenceUrls: ["https://github.com/AbhishekThorat/Todo_app_js"]
      },
      {
        title: "Assignment 11",
        subTitle: "GitHub status app -",
        referenceUrls: ["https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/GitHub-Status-App.md"]
      },
      {
        title: "Assignment 12",
        subTitle: "Add a support of Assignment 10 assignment with Assignment 11. Add a simple button to navigate to Assignment 10 and button on to do app to navigate back.",
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "SPA",
    subTitle: "Let's see what does SPA means with one of these frameworks React, Vue, Angular",
    description: "Apart from SPA, from here we can explore any other frontend techniques like WordPress and all"
  },
  {
    level: TopicLevel.Beginner,
    title: "Build tools",
    subTitle: "Explore build tools",
    description: `compilation/build tools
    webpack, babel, npm scripts, linter and formatter

    Also explore code editors and its configuration.
    `
  },
  {
    level: TopicLevel.Beginner,
    title: "ReactJS Basic",
    subTitle: "Let's start with basic concepts",
    description: `Basics
    what, why, how, JSX, state, props, lifecycle methods, refs

    Project setup
    create-react-app, next.js
    `,
    assignments: [
      {
        title: "Assignment 13",
        subTitle: "Create basic project using create-react-app",
      },
      {
        title: "Assignment 14",
        subTitle: "Create few components like, button, textarea, link, container",
      },
      {
        title: "Assignment 15",
        subTitle: "color changer assignment. (Will add notes soon.)",
      },
      {
        title: "Assignment 16",
        subTitle: "Lets complete assignment 12 with ReactJS and identify difference.",
      }
    ]
  },
  {
    level: TopicLevel.Advanced,
    title: "Bit Advanced styles",
    subTitle: "Let's learn the ways of styling react app.",
    description: `SCSS
    Variables, Nesting, Partials, Modules,
    Mixins, Extend/Inheritance, Operators, BEM

    CSS in JS
    styled components, how to handle styling with material UI.

    Responsive UI using material-ui
    Responsive using CSS in JS

    `,
    assignments: [
      {
        title: "Assignment 17",
        subTitle: "Let's convert Assignment - 15 to responsive.",
      },
    ]
  },
  {
    level: TopicLevel.Advanced,
    title: "Bit Advanced ReactJS concepts",
    subTitle: "Let's learn about bit advanced but mostly used ReactJS concepts.",
    description: `hooks
    State management
    Redux

    Routing
    react-router

    `,
    assignments: [
      {
        title: "Assignment 18",
        subTitle: "Custom hook to track scroll position",
      },
      {
        title: "Assignment 19",
        subTitle: "Custom hook to get location.",
      },
      {
        title: "Assignment 20",
        subTitle: `
        React basic login/registration app using firebase and react-create-app
        1. Create a registration page
        2. Integrate the firebase with react app and use the registration api to register new user.
        3. Create Login page.
        4. On successful login navigate use to basic dashboard and on errors show appropriate errors.
        `,
      },
    ]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Typescript/flow",
    subTitle: "Let's explore a way to make JS type protective.",
    description: "",
  },
  {
    level: TopicLevel.Intermediate,
    title: "Unit test cases",
    subTitle: "Let's explore a way to add unit test for code.",
    description: "Will add more details soon....",
  },
  {
    level: TopicLevel.Intermediate,
    title: "Untold requirements",
    subTitle: "How to be a good developer",
    description: `Cross browser support
    
    What does pixel perfect means?
    Zeplin, figma, invision
    `,
  },
  {
    level: TopicLevel.Intermediate,
    title: "Debugging",
    subTitle: "Let's improve debugging skills!",
    description: "",
  },
];
