import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const useStyles = makeStyles({
  navText: {
    justifyContent: "center",
  },
  navLink: {
    textDecoration: "none",
  },
  buttons: {
    fontWeight: "bold",
    marginRight: ".5rem",
  },
  iconColor: {
    color: "#fff",
    marginLeft: "1rem",
  },
});

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.navText}>
        <Link to="/" className={classes.navLink}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.buttons}
            endIcon={<HomeIcon />}
            onClick={() => history.push("/")}
          >
            Home
          </Button>
        </Link>
        <Link to="/portfolio" className={classes.navLink}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.buttons}
            endIcon={<WorkIcon />}
            onClick={() => history.push("/portfolio")}
          >
            Portfolio
          </Button>
        </Link>
        <Link to="/contact" className={classes.navLink}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.buttons}
            endIcon={<TelegramIcon />}
            onClick={() => history.push("/contact")}
          >
            Contact
          </Button>
        </Link>

        <Switch>
          <Route exact path="/" render={(props) => <Navigation {...props} />} />
          <Route
            exact
            path="/portfolio"
            render={(props) => <Portfolio {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </Switch>

        <div>
          <Link to={{}}>
            <IconButton className={classes.iconColor}>
              <MailOutlineIcon />
            </IconButton>
          </Link>
          <Link
            to={{
              pathname: "https://github.com/brodave318?tab=repositories",
            }}
            target="_blank"
          >
            <IconButton className={classes.iconColor}>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/david-hernandez-099871142/",
            }}
            target="_blank"
          >
            <IconButton className={classes.iconColor}>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
