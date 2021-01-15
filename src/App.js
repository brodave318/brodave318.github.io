import React, { useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemText,
  ListItem,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuIcon from "@material-ui/icons/Menu";
import TelegramIcon from "@material-ui/icons/Telegram";
import WorkIcon from "@material-ui/icons/Work";
import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import useStyles from "./components/utils/tools";

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <AppBar position="fixed" style={{ width: "100%" }}>
        <Toolbar className={classes.navText}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={drawerOpen}
              onClose={() => {
                setDrawerOpen(false);
              }}
            >
              <List className={classes.burgerMenuList}>
                <Link to="/" className={classes.navLink}>
                  <ListItem button key="home">
                    <Button className={classes.burgerMenuButton}>
                      <HomeIcon
                        fontSize="small"
                        style={{ paddingBottom: "2px" }}
                      />
                      <ListItemText
                        primary="home"
                        style={{ textAlign: "center" }}
                      />
                    </Button>
                  </ListItem>
                </Link>
                <Link to="/portfolio" className={classes.navLink}>
                  <ListItem button key="portfolio">
                    <Button className={classes.burgerMenuButton}>
                      <WorkIcon
                        fontSize="small"
                        style={{ paddingBottom: "3px" }}
                        component="svg"
                      />
                      &nbsp;
                      <ListItemText primary="portfolio" />
                    </Button>
                  </ListItem>
                </Link>
                <Link to="/contact" className={classes.navLink}>
                  <ListItem
                    button
                    key="contact"
                    style={{ textAlign: "center" }}
                  >
                    <Button className={classes.burgerMenuButton}>
                      <TelegramIcon
                        fontSize="small"
                        style={{ paddingBottom: "2px" }}
                      />
                      <ListItemText primary="contact" />
                    </Button>
                  </ListItem>
                </Link>
                <ListItem
                  button
                  key="socials"
                  className={classes.burgerMenuSocials}
                >
                  <Tooltip title="Repos" arrow>
                    <Link
                      to={{
                        pathname:
                          "https://github.com/brodave318?tab=repositories",
                      }}
                      target="_blank"
                    >
                      <GitHubIcon />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Profile" arrow>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/in/david-hernandez-099871142/",
                      }}
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Resume" arrow>
                    <Link
                      to={{
                        pathname: "https://docdro.id/zgAc0lJ",
                      }}
                      target="_blank"
                    >
                      <CloudDownloadIcon />
                    </Link>
                  </Tooltip>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <Link to="/" className={classes.navLink}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                className={classes.navButtons}
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
                className={classes.navButtons}
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
                className={classes.navButtons}
                endIcon={<TelegramIcon />}
                onClick={() => history.push("/contact")}
              >
                Contact
              </Button>
            </Link>
            <Tooltip title="Repos" arrow>
              <Link
                to={{
                  pathname: "https://github.com/brodave318?tab=repositories",
                }}
              >
                <IconButton className={classes.navIconColor}>
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Profile" arrow>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/david-hernandez-099871142/",
                }}
                target="_blank"
              >
                <IconButton className={classes.navIconColor}>
                  <LinkedInIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Resume" arrow>
              <Link
                to={{
                  pathname: "https://docdro.id/zgAc0lJ",
                }}
                target="_blank"
              >
                <IconButton className={classes.navIconColor}>
                  <CloudDownloadIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
