import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TrainingDataType } from '../trainingData';
import { default as MuCard } from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    preLineTypography: {
      whiteSpace: "pre-line",
    }
  }),
);

const Card = ({ cardData }: { cardData: TrainingDataType }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MuCard className={classes.root}>
      <CardHeader
        title={cardData.title}
        titleTypographyProps={{
          variant: "h6",
        }}
        subheader={cardData.subTitle}
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {
            cardData.description && (
              <Typography className={classes.preLineTypography}>
                {cardData.description}
              </Typography>
            )
          }

          {
            cardData.assignments?.map((assignment) => (
              <React.Fragment key={assignment.title}>
                <Typography>
                  {assignment.title}
                </Typography>
                {
                  assignment.subTitle && (
                    <Typography variant="body1">
                      {assignment.subTitle}
                    </Typography>
                  )
                }
                {
                  assignment.referenceUrls?.map((url, index) =>
                    <Link key={url} target="blank" href={url} variant="body1">
                      Reference URL {index + 1}
                    </Link>
                  )
                }
              </React.Fragment>
            ))
          }
        </CardContent>
      </Collapse>
    </MuCard>
  );
}

export default Card;
