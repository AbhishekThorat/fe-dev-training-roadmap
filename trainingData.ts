import React from "react";

enum TopicLevel {
  Common,
  Beginner,
  Intermediate,
  Advanced
}

type ReferenceUrls = {
  title: string;
  url: string;
}

type ReferenceDetail = {
  title: string;
  subTitle?: string;
  referenceUrls?: ReferenceUrls[];
}

export type TrainingDataType = {
  level: TopicLevel;
  timeLineDotContent?: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  description: React.ReactNode;
  referenceDetails?: ReferenceDetail[];
}

export const TIME_LINE_OPPOSITE_CONTENT_PREFIX = "Step";

export const trainingData: TrainingDataType[] = [
  {
    level: TopicLevel.Common,
    title: "Problem Solving",
    subTitle: "Let's start evolving Problem Solving skills!",
    description: "I think problem solving is one of most important skill for software engineers. I recommend to solve at least one problem per day.",
    referenceDetails: [{
      title: "Reference URLs",
      subTitle: "We can use following awesome platforms (Use JS to solve problems)",
      referenceUrls: [
        {
          title: "Freecodecamp",
          url: "https://www.freecodecamp.org/",
        },
        {
          title: "Codility",
          url: "https://www.codility.com/"
        },
        {
          title: "Dailycodingproblem",
          url: "https://www.dailycodingproblem.com/"
        },
        {
          title: "Hackerrank",
          url: "https://www.hackerrank.com/"
        }
      ]
    }]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic HTML",
    subTitle: "Let's start with basic HTML",
    description: `Doctype, HTML and HTML5, Favicon, Id and class, Semantic HTML, HTML Attributes, Page Structuring`,
    referenceDetails: [
      {
        title: "Reading Materials -",
        referenceUrls: [
          {
            title: "w3schools",
            url: "https://www.w3schools.com/html/default.asp"
          },
          {
            title: "MDN",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
          }]
      },
      {
        title: "Assignment - 1",
        subTitle: "Portfolio-site",
        referenceUrls: [
          {
            title: "Assignment details",
            url: "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage"
          }
        ]
      }]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic CSS",
    subTitle: "Let's start with basic CSS",
    description: `Basics points -
    Internal and External CSS, BOX model, float, Flex Box, positions,
    display, Margin collapse, Different selectors, Specificity.
    
    Understand layouts

    `,
    referenceDetails: [
      {
        title: "Awesome site to exercise display:flex skills",
        referenceUrls: [
          {
            title: "Flex-box Froggy",
            url: "https://flexboxfroggy.com/"
          }
        ]
      },
      {
        title: "Assignment 2",
        subTitle: "Implement login page for some site -",
        referenceUrls: [
          {
            title: "Pluralsight Login Page",
            url: "https://app.pluralsight.com/id?"
          }
        ]
      },
      {
        title: "Assignment 3",
        subTitle: "Acme Photography - ",
        referenceUrls: [
          {
            title: "ACME Photography Site",
            url: "https://jolly-kalam-23776e.netlify.app/photographysite/#images"
          }
        ]
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
    referenceDetails: [
      {
        title: "Assignment 4",
        subTitle: "Create a repo and try above commands.",
      },
      {
        title: "Assignment 5",
        subTitle: "Create a repo with name something like practice and commit all referenceDetails as separate branch and follow the same for upcoming referenceDetails.",
      }
    ]
  },
  {
    level: TopicLevel.Beginner,
    title: "Basic JavaScript",
    subTitle: "Let's dive into JS",
    description: `Introduction to JavaScript (what it is, where it runs, node, EcmaScript)
    Add JS to webpage,  Separation of concern,
    Developer console,
    Variables,
    Data types,
    Alerts, prompt, confirm
    
    operators, Logical operators,  & comparison
    type-conversions
    
    Conditional branching
    
    DOM manipulation

    Iterators
    Closures
    `,
    referenceDetails: [
      {
        title: "MDN JS docs - Consider this as source of truth",
        referenceUrls: [
          {
            title: "MDN JS docs",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          }
        ]
      },
      {
        title: "For simpler explanation we can consider javascript.info site",
        referenceUrls: [
          {
            title: "javascript.info",
            url: "https://javascript.info/"
          }
        ]
      },
      {
        title: "Assignment 6",
        subTitle: "Stopwatch-App -",
        referenceUrls: [
          {
            title: "Stopwatch-App",
            url: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Stopwatch-App.md"
          }
        ]
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
    title: "Bit advanced HTML topics",
    subTitle: "Let's understand HTML forms and storage APIs along with HTML events",
    description: `
    Storages and HTML Events -> Session Storage and Local Storage
    `,
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advanced HTML topics",
    subTitle: "Let's understand untold HTML requirements",
    description: `HTML Input types,  HTML forms,
    SEO, Accessibility
    `,
    referenceDetails: [
      {
        title: "Assignment - 7",
        subTitle: "An Online Survey Form -",
        referenceUrls: [
          {
            title: "Assignment/Expected output",
            url: "https://codepen.io/freeCodeCamp/full/VPaoNP"
          }
        ]
      },
      {
        title: "Assignment 8",
        subTitle: "Product landing page - ",
        referenceUrls: [
          {
            title: "Product Landing Page",
            url: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Product-Landing-Page.md"
          }
        ]
      },
      {
        title: "Bonus",
        subTitle: "HTML exercise - ",
        referenceUrls: [
          {
            title: "HTML Exercise Page",
            url: "https://www.w3schools.com/html/exercise.asp"
          }
        ]
      }
    ]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advanced styles",
    subTitle: "Let's start with basic CSS",
    description: `
    CSS Grid,
    Responsive Design -
    Viewport, Media queries
    
    `,
    referenceDetails: [
      {
        title: "Awesome site to exercise display:grid skills",
        referenceUrls: [
          {
            title: "CSS Grid Garden",
            url: "https://cssgridgarden.com/"
          }
        ]
      },
      {
        title: "Assignment 9",
        subTitle: "Let's make Assignment 1 responsive.",
      },
      {
        title: "Bonus",
        subTitle: "complete this CSS exercise -",
        referenceUrls: [
          {
            title: "CSS Exercises",
            url: "https://www.w3schools.com/css/exercise.asp"
          }
        ]
      }
    ]
  },
  {
    level: TopicLevel.Intermediate,
    title: "Bit advance JS",
    subTitle: "Understand few advanced but most used JS techniques",
    description: `Mostly Used
    hoisting, Network calls, Event bubbling, Prototype,
    Scope, Shadow DOM, Promise, async await

    `,
    referenceDetails: [
      {
        title: "Assignment 10",
        subTitle: "TODO app assignment - ",
        referenceUrls: [
          {
            title: "JS TODO app",
            url: "https://github.com/AbhishekThorat/Todo_app_js"
          }
        ]
      },
      {
        title: "Assignment 11",
        subTitle: "GitHub status app -",
        referenceUrls: [
          {
            title: "GitHub Status App",
            url: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/GitHub-Status-App.md"
          }
        ]
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
    referenceDetails: [
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
    referenceDetails: [
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
    referenceDetails: [
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
