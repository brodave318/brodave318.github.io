import React from "react";
import {
  Card,
  CardMedia,
  /*Grid,*/ Tooltip,
  Typography,
} from "@material-ui/core";
// import "./Portfolio.css";
import useStyles from "./utils/tools";
import PortOne from "./Ports/PortOne";
import PortTwo from "./Ports/PortTwo";
import PortThree from "./Ports/PortThree";
import Grid from "./utils/GridFix";

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.portfolio}>
      <h1 className={classes.portfolioTitle}>Portfolio</h1>
      <Grid container spacing={3} className={classes.portfolioPower}>
        <Grid item>
          <Typography className={classes.portfolioPowerText}>
            This Site Powered by
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title="HTML5" arrow>
          <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1"
              alt="HTML5 logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="CSS3" arrow>
          <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fverekia.com%2F_pages%2Fcss3%2Fintroduction-css3%2Fimg%2Fcss3-logo.png&f=1&nofb=1"
              alt="CSS3 logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="React" arrow>
            <img
              src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
              alt="React logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Material-UI" arrow>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrowdin-static.downloads.crowdin.com%2Fimages%2Fproject-logo%2F313933%2Fsmall%2Ff4688031a2cf3127ac08bc3ebaa05194167.png&f=1&nofb=1"
              alt="Material-UI logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="React-Router" arrow>
            <img
              src="https://miro.medium.com/max/494/1*F1iFV5NTRN9YrAIC2VtFaA.png"
              alt="React-Router logo"
              className={classes.portfolioPowerLogos}
            />
          </Tooltip>
        </Grid>
      </Grid>

      <div className={classes.portfolioDisplay}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            xs={12}
            md={4}
            className={classes.portfolioCardGridItem}
          >
            <Card className={classes.portfolioCard}>
              <PortOne />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.portfolioCardGridItem}
          >
            <Card className={classes.portfolioCard}>
              <PortTwo />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.portfolioCardGridItem}
          >
            <Card className={classes.portfolioCard}>
              <PortThree />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
