import { Link } from "react-router-dom";
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
} from "@material-ui/core";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "../utils/tools";
import covidScreen from "../images/trackingCovidScreen.png";

export default function PortOne() {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <CardActionArea style={{ borderBottom: "1px solid #e3e3e3" }}>
        <CardMedia
          component="img"
          image={covidScreen}
          title="Tracking COVID-19"
        />
      </CardActionArea>
      <CardContent style={{ width: "100%" }}>
        <Typography className={classes.cardTitle} variant="h5">
          Tracking COVID-19
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          component="p"
          style={{ paddingBottom: ".6rem" }}
        >
          Worldwide COVID-19 tracker with map & stats by country.
        </Typography>
        <Divider style={{ marginTop: "1rem" }} />
        <Typography gutterBottom variant="h6" style={{ paddingTop: "1.3rem" }}>
          Applied Tech:
        </Typography>
        <div className={classes.cardTechLogos}>
          <Tooltip title="HTML5" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="CSS3" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fverekia.com%2F_pages%2Fcss3%2Fintroduction-css3%2Fimg%2Fcss3-logo.png&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="React" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="Chart.js" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F10342521%3Fv%3D3%26s%3D200&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="Material-UI" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcrowdin-static.downloads.crowdin.com%2Fimages%2Fproject-logo%2F313933%2Fsmall%2Ff4688031a2cf3127ac08bc3ebaa05194167.png&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="React Leaflet" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftomwayson.github.io%2Fdev-summit-2017-ambitious-arcgis-workshop%2Fimg%2Fleaflet-logo.png&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
          <Tooltip title="numeral.js" arrow>
            <CardMedia
              className={classes.cardLogo}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.rawgit.com%2Ffeross%2Fstandard%2Fmaster%2Fdocs%2Flogos%2Fnpm.png&f=1&nofb=1"
              component="img"
              width="30"
              height="30"
            />
          </Tooltip>
        </div>
        <div className={classes.cardButtons}>
          <Link
            to={{
              pathname: "https://tracking-covid-19-de1fc.firebaseapp.com/",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" startIcon={<WebIcon />}>
              Live site
            </Button>
          </Link>
          <Link
            to={{
              pathname: "https://github.com/brodave318/tracking-covid19",
            }}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" startIcon={<GitHubIcon />}>
              github
            </Button>
          </Link>
        </div>
      </CardContent>
    </div>
  );
}
