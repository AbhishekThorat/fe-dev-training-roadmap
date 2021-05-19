import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { default as MuTimeline } from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import Card from './card';

import { trainingData, TIME_LINE_OPPOSITE_CONTENT_PREFIX } from '../trainingData';

interface StyleProps {
  isSmallViewPort: boolean
}

const useStyles = makeStyles<Theme, Pick<StyleProps, 'isSmallViewPort'>>((theme: Theme) => createStyles({
  root: {
    maxWidth: "900px",
    margin: "auto",
  },
  oppositeContent: {
    maxWidth: (props) => (props.isSmallViewPort ? '80px' : 'unset'),
  }
}),
);

const Timeline = () => {
  const isSmallViewPort = useMediaQuery('(max-width:768px)');
  const classes = useStyles({ isSmallViewPort });
  return (
    <MuTimeline align={isSmallViewPort ? "left" : "alternate"} className={classes.root}>

      {
        trainingData.map((data, index) => (
          <TimelineItem key={index}>

            <TimelineOppositeContent className={classes.oppositeContent}>
              <Typography variant="body2" color="textSecondary">
                {
                  `${TIME_LINE_OPPOSITE_CONTENT_PREFIX} ${index}`
                }
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot>
                <AcUnitIcon style={{ maxHeight: "1em", maxWidth: "1em" }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Card cardData={data} />
            </TimelineContent>

          </TimelineItem>
        ))
      }
    </MuTimeline>
  );
}

export default Timeline;
