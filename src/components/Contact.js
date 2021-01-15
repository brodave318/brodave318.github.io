import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./utils/tools";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <div style={{ textAlign: "center" }}>
        <Typography className={classes.contactTitle}>Contact</Typography>
        <Typography className={classes.contactHireMe}>HiRE ME!</Typography>
        <Typography className={classes.contactSubtitle}>
          Let's work together
        </Typography>
      </div>
      <Paper className={classes.contactPaper}>
        <Grid container justify="space-around">
          <Grid item>
            <Button style={{ textTransform: "none" }}>
              <Link
                className={classes.contactLinks}
                to={{ pathname: "mailto:brodave318@gmail.com" }}
                target="_blank"
              >
                <IconButton>
                  <MailOutlineIcon className={classes.contactIcons} />
                </IconButton>
                <Typography>
                  Send an email
                  <Divider style={{ background: "#3a7ec0" }} />
                  brodave318@gmail.com
                </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <div style={{ display: "inline-grid" }}>
              <IconButton>
                <PhoneAndroidIcon className={classes.contactIcons} />
              </IconButton>
              <Typography className={classes.contactPhone}>
                Text or Call
                <Divider style={{ background: "#3a7ec0" }} />
                (760) 556-0566
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Button style={{ textTransform: "none" }}>
              <Link
                className={classes.contactLinks}
                to={{
                  pathname: "https://github.com/brodave318?tab=repositories",
                }}
              >
                <IconButton className={classes.iconColor}>
                  <GitHubIcon className={classes.contactIcons} />
                </IconButton>
                <Typography style={{ color: "#3a7ec0" }}>
                  Github Repos
                </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button style={{ textTransform: "none" }}>
              <Link
                className={classes.contactLinks}
                to={{
                  pathname:
                    "https://www.linkedin.com/in/david-hernandez-099871142/",
                }}
                target="_blank"
              >
                <IconButton className={classes.iconColor}>
                  <LinkedInIcon className={classes.contactIcons} />
                </IconButton>
                <Typography style={{ color: "#3a7ec0" }}>LinkedIn</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
