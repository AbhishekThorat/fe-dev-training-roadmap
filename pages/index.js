import Head from "next/head";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "May 26, 1951",
    cardTitle: "Origins",
    cardSubtitle:
      "President John F. Kennedy says he will send astronauts to the moon by 1970.",
  },
  {
    title: "Jan. 26, 1962",
    cardTitle: "Ranger crashes into moon",
    cardSubtitle: "Unmanned Ranger sent to crash into moon but misses target.",
  },
  {
    title: "Nov. 6, 1966",
    cardTitle: "5 satellites map moon",
    cardSubtitle: "Second of five U.S. satellites sent to orbit, map moon.",
  },
  {
    title: "Jan. 27, 1967",
    cardTitle: "First soft landing",
    cardSubtitle:
      "Moon probe makes soft landing near crater Tycho. Photos, soil samples taken.",
  },
  {
    title: "Oct. 11, 1968",
    cardTitle: "Manned flight",
    cardSubtitle: "First manned flight of Apollo 7 spacecraft",
  },
  {
    title: "Dec. 21, 1968",
    cardTitle: "Saturn rockets",
    cardSubtitle:
      "First flight to the moon carried by Saturn V rocket. Apollo 8 astronauts orbit the moon 10 times",
  },
  {
    title: "March 3, 1969",
    cardTitle: "Lunar module",
    cardSubtitle: "First flight of lunar module",
  },
  {
    title: "May 18, 1969",
    cardTitle: "Apollo 10",
    cardSubtitle: "Apollo 10 flies around moon",
  },
  {
    title: "July 16, 1969",
    cardTitle: "Astronauts",
    cardSubtitle:
      "Astronauts Neil Armstrong, Buzz Aldrin and Michael Collins fly to moon on Apollo 11",
  },
  {
    title: "July 20, 1969",
    cardTitle: "Neil Armstrong",
    cardSubtitle: "Neil Armstrong becomes the first man to walk on the moon",
  },
  {
    title: "Nov. 14, 1969",
    cardTitle: "Second landing",
    cardSubtitle: "Apollo 12 astronauts make second landing",
  },
  {
    title: "Feb. 19, 1970",
    cardTitle: "Failure",
    cardSubtitle: "U.S.S.R. fails fourth attempt to launch a moon rocket",
  },
  {
    title: "April 11, 1970",
    cardTitle: "Mission 13",
    cardSubtitle: "Apollo 13 moon mission aborted when oxygen tank explodes",
  },
  {
    title: "Jan. 31, 1971",
    cardTitle: "Mission 14",
    cardSubtitle: "Apollo 14 lands on the moon",
  },
  {
    title: "May 18, 1969",
    cardTitle: "Mission 15",
    cardSubtitle:
      "Apollo 15 makes fourth landing. First use of the lunar rover vehicle",
  },
  {
    title: "May 18, 1969",
    cardTitle: "Mission 16",
    cardSubtitle: "Apollo 16 makes fifth landing",
  },
  {
    title: "May 18, 1969",
    cardTitle: "Mission 17",
    cardSubtitle: "Apollo 17 makes final moon landing",
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
      `}</style>
    </div>
  );
}
