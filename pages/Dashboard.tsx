import React from 'react';
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Timeline from '../components/timeline';
import ScrollTop from '../components/scrollToTop';

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    marginTop: "auto",
  },
  root: {
    maxWidth: "900px",
    margin: "auto",
  },
  centerAligned: {
    textAlign: "center",
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title>FE-dev Roadmap</title>
      </Head>
      <div>
        <Timeline />
      </div>

      <footer className={classes.footer}>
        <Box className={classes.centerAligned}>
          Handcrafted with <span style={{ color: "#ea4e4e" }}>&#9829;</span> in India
        </Box>
        <Box className={classes.centerAligned}>
          For contribution/issues/suggestions, please visit
          <Link color="secondary" href="https://github.com/AbhishekThorat/fe-dev-training-roadmap">
            {" "}
            this github repo
          </Link>
        </Box>
      </footer>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}