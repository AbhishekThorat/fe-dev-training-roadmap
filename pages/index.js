import Head from "next/head";
import { Chrono } from "react-chrono";

const newLineCharacter = "\r";
const separator = "------";

const items = [
  {
    title: "Step 0",
    cardTitle: "Problem Solving",
    cardSubtitle: "Let's start evolving Problem Solving skills!",
    cardDetailedText: `I think problem solving is most important skill of software engineers. ${newLineCharacter}
    I recommend to solve at least one problem per day. ${newLineCharacter}
    We can use following awesome platforms, ${newLineCharacter}
    (I recommend to solve problems using JS as this is training is for frontend-dev) ${newLineCharacter}
    1. https://www.codility.com/ ${newLineCharacter}
    2. https://www.dailycodingproblem.com/ ${newLineCharacter}
    3. https://www.hackerrank.com/ ${newLineCharacter}
    `,
  },
  {
    title: "Step 1",
    cardTitle: "HTML",
    cardSubtitle: "Let's start with basic HTML",
    cardDetailedText: `1.1 ${separator} Basic HTML ${separator}
    Doctype, HTML and HTML5, Id and class,  Favicon, Semantic HTML, HTML Input types, HTML Attributes

    ${separator} Assignment - 1 ${separator}
    Portfolio-site - https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage
    `,
  },
  {
    title: "Step 2",
    cardTitle: "Bit advanced topics",
    cardSubtitle:
      "Let's understand HTML forms and storage APIs along with HTML events",
    cardDetailedText: `2.1 ${separator} HTML forms ${separator}
    2.2 ${separator} Storages and HTML Events ${separator}
    Session Storage and Local Storage
    ${separator} Assignment 2 ${separator}
    An Online Survey Form - https://codepen.io/freeCodeCamp/full/VPaoNP
    `,
  },
  {
    title: "Step 3",
    cardTitle: "Bit advanced topics",
    cardSubtitle: "Let's understand untold requirements",
    cardDetailedText: `3.1 ${separator} SEO ${separator}
    3.2 ${separator} Accessibility ${separator}
    
    ${separator} Assignment 3 ${separator}
    Product landing page - https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Product-Landing-Page.md

    ${separator} Bonus ${separator}
    HTML exercise - https://www.w3schools.com/html/exercise.asp
    `,
  },
  {
    title: "Step 4",
    cardTitle: "CSS",
    cardSubtitle: "Let's start with basic CSS",
    cardDetailedText: `4.1 ${separator} Basics ${separator}
    Internal and External CSS, BOX model, float, positions, display, CSS Grid, Flex Box, Margin collapse, Different selectors, Specificity.
    
    4.2 ${separator} Understand layouts ${separator}
    ${separator} Assignment 4 ${separator}
    Implement login page for some site - https://app.pluralsight.com/id?

    ${separator} Assignment 5 ${separator}
    Acme Photography - https://jolly-kalam-23776e.netlify.app/photographysite/#images
    `,
  },
  {
    title: "Step 5",
    cardTitle: "Bit advanced styles",
    cardSubtitle: "Let's learn about mobile first UI",
    cardDetailedText: `5.1 ${separator} Responsive Design ${separator}
    Viewport, Media queries
    
    ${separator} Assignment 6 ${separator}
    Assignment 6 - Let's make Assignment 1 responsive.

    ${separator} Bonus ${separator}
    complete this CSS exercise - https://www.w3schools.com/css/exercise.asp
    `,
  },
  {
    title: "Step 6",
    cardTitle: "Basic GIT",
    cardSubtitle: "Let's learn about code versioning",
    cardDetailedText: `6.1 ${separator} What, Why, How ${separator}
    what is git, different softwares for version management

    6.2 ${separator} Practice ${separator}
    git clone, git status, git add, git commit, git pull, git push, git config user name email, git branch, raise a PR

    ${separator} Assignment 7 ${separator}
    Assignment 7 - Create a repo and try above commands.

    ${separator} Assignment 8 ${separator}
    Assignment 8 - Create a repo with name something like practice and commit all assignments as separate branch and follow the same for upcoming assignments. 
    `,
  },
  {
    title: "Step 7",
    cardTitle: "Basic JavaScript",
    cardSubtitle: "Let's dive into JS",
    cardDetailedText: `7.1 ${separator} Basics ${separator}
    String, Number methods, Iterators, Closures, RegEx

    7.2 ${separator} DOM manipulation ${separator}
    
    ${separator} Assignment 9 ${separator}
    Assignment 9 - Stopwatch-App - https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Stopwatch-App.md
    `,
  },
  {
    title: "Step 8",
    cardTitle: "JSON",
    cardSubtitle: "Let's learn about JSON",
    cardDetailedText: `8.1 ${separator} What, Why, How ${separator}
    Discuss the handling of JSON with JS, mostly mapping, stringify and Parse.
    `,
  },
  {
    title: "Step 9",
    cardTitle: "Package manager",
    cardSubtitle: "Let's learn about package managers with node ecosystem.",
    cardDetailedText: `${separator} What, Why, How ${separator}
    NPM Yarn
    `,
  },
  {
    title: "Step 10",
    cardTitle: "Bit advance JS",
    cardSubtitle: "Understand few advanced but most used JS techniques",
    cardDetailedText: `10.1 ${separator} Mostly Used ${separator}
    hoisting, Network calls, Event bubbling, Prototype, Scope, Shadow DOM, Promise, async await
    
    ${separator} Assignment 10 ${separator}
    Assignment 10 - TODO app assignment - https://github.com/AbhishekThorat/Todo_app_js

    ${separator} Assignment 11 ${separator}
    Assignment 11 - GitHub status app - https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/GitHub-Status-App.md

    ${separator} Assignment 12 ${separator}
    Assignment 12 - Add a support of Assignment 10 assignment with Assignment 11. Add a simple button to navigate to Assignment 10 and button on to do app to navigate back.
    `,
  },
  {
    title: "Step 11",
    cardTitle: "SPA",
    cardSubtitle: "React, Vue, Angular",
  },
  {
    title: "Step 12",
    cardTitle: "Build tools",
    cardSubtitle: "webpack, babel, npm scripts, linter and formatter",
  },
  {
    title: "Step 13",
    cardTitle: "ReactJS Basic",
    cardSubtitle: "Let's start with basic concepts",
    cardDetailedText: `13.1 ${separator} Basics ${separator}
    what, why, how, JSX, state, props, lifecycle methods, refs
    
    ${separator} Project setup ${separator}
    create-react-app, next.js

    ${separator} Assignment 13 ${separator}
    Assignment 13 - create basic project using create-react-app

    ${separator} Assignment 14 ${separator}
    Assignment 14 - Create few components like, button, textarea, link, container

    ${separator} Assignment 15 ${separator}
    Assignment 15 - color changer assignment. (Will add notes soon.)

    ${separator} Assignment 16 ${separator}
    Assignment 16 - Lets complete assignment 12 with ReactJS and identify difference.
    `,
  },
  {
    title: "Step 14",
    cardTitle: "Bit Advanced styles",
    cardSubtitle: "Let's learn the ways of styling react app.",
    cardDetailedText: `14.1 ${separator} SCSS ${separator}
    Variables, Nesting, Partials, Modules,
    Mixins, Extend/Inheritance, Operators, BEM
    
    14.2 ${separator} CSS in JS ${separator}
    styled components, how to handle styling with material UI.

    14.3 ${separator} Responsive UI using material-ui ${separator}
    Responsive using CSS in JS

    ${separator} Assignment 17 ${separator}
    Assignment 17 - Let's convert Assignment - 15 to responsive.
    `,
  },
  {
    title: "Step 15",
    cardTitle: "Bit Advanced ReactJS concepts",
    cardSubtitle:
      "Let's learn about bit advanced but mostly used ReactJS concepts.",
    cardDetailedText: `15.1 ${separator} hooks ${separator}
    15.2 ${separator} State management ${separator}
    Redux
    15.3 ${separator} Routing ${separator}
    react-router

    ${separator} Assignment 18 ${separator}
    Assignment 18 - Custom hook to track scroll position.

    ${separator} Assignment 19 ${separator}
    Assignment 19 - Custom hook to get location.

    ${separator} Assignment 20 ${separator}
    Assignment 20 - React basic login/registration app using firebase and react-create-app
    1. Create a registration page
    2. Integrate the firebase with react app and use the registration api to register new user.
    3. Create Login page.
    4. On successful login navigate use to basic dashboard and on errors show appropriate errors.
    `,
  },
  {
    title: "Step 16",
    cardTitle: "Typescript/flow",
    cardSubtitle: "Let's explore a way to make JS type protective.",
  },
  {
    title: "Step 17",
    cardTitle: "Unit test cases",
    cardSubtitle: "Let's explore a way to add unit test for code.",
    cardDetailedText: "Will add more details soon.",
  },
  {
    title: "Step 18",
    cardTitle: "Untold requirements",
    cardSubtitle: "How to be a good developer",
    cardDetailedText: `18.1 ${separator} Cross browser support ${separator}
    18.2 ${separator} What does pixel perfect means? ${separator}
    Zeplin, figma, invision
    `,
  },
  {
    title: "Step 19",
    cardTitle: "Debugging",
    cardSubtitle: "Let's improve debugging skills!",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FE-dev Roadmap</title>
      </Head>

      <main>
        <h1
          className="title"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: "white",
            padding: "16px",
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid lightgray",
          }}
        >
          Frontend Development Training Roadmap
        </h1>
        <div style={{ maxWidth: "900px", height: "80vh", margin: "auto" }}>
          <Chrono items={items} slideShow mode="VERTICAL_ALTERNATING" />
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: "16px",
          left: "0",
          right: "0",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          Handcrafted with <span style={{ color: "#ea4e4e" }}>&#9829;</span> by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-thorat-143aa2bb"
          >
            Abhishek
          </a>
        </div>
        <div>
          For contribution/issues/suggestions, please visit
          <a href="https://github.com/AbhishekThorat/fe-dev-training-roadmap">
            {" "}
            this github repo
          </a>
        </div>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .css-q6vr8b-TimelineContentDetails {
          white-space: pre-line;
        }
        .css-1nnu7kd-TimelineItemContentWrapper {
          min-height: auto;
        }
        .card-description {
          margin-top: 0;
        }
        .css-1nnu7kd-TimelineItemContentWrapper {
          min-height: auto !important;
        }
      `}</style>
    </div>
  );
}
