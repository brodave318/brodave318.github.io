import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  burgerMenuList: {
    backgroundColor: "rgb(38, 52, 132)",
    height: "100vh",
    paddingTop: "2rem",
  },
  burgerMenuButton: {
    backgroundColor: "red",
    color: "#fff",
    width: "100%",
  },
  burgerMenuSocials: {
    display: "flex",
    justifyContent: "space-around",
    color: "#fff",
    paddingTop: "1.5rem",
  },
  navText: {
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  navLink: {
    textDecoration: "none",
  },
  navButtons: {
    fontWeight: "bold",
    marginRight: ".5rem",
  },
  navIconColor: {
    color: "#fff",
    marginLeft: "1rem",
  },
  hero: {
    background:
      "linear-gradient(180deg, rgba(3,0,52,1) 28%, rgba(9,9,121,1) 98%)",
    paddingTop: "7rem",
    paddingBottom: "4.6rem",
    height: "100%",
    color: "azure",
  },
  heroLogo: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    fontSize: "5rem",
    fontWeight: "bolder",
    fontFamily: "'Fjalla One', sans-serif",
  },
  heroLogoLT: {
    textShadow: "2px 2px 0px yellow, -2px -2px 0px orange",
    paddingRight: "10px",
    paddingTop: "2.2rem",
    color: "#e62020",
  },
  heroDH: {
    color: "#ce2029",
    textShadow: "2px 2px 0px yellow, -2px -2px 0px orange",
    fontSize: "8rem",
  },
  heroLogoGT: {
    textShadow: "2px 2px 0px orange, -2px -2px 0px yellow",
    paddingLeft: "12px",
    letterSpacing: "9px",
    paddingTop: "2.2rem",
    color: "#e62020",
  },
  heroHeader: {
    textAlign: "center",
    fontSize: "2.8rem",
    fontFamily: "'Fjalla One', sans-serif",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  heroName: {
    textShadow:
      "2px 2px 0 #2987ff, 2px -2px 0 #2987ff, -2px 2px 0 #2987ff, -2px -2px 0 #2987ff, 2px 0px 0 #2987ff, 0px 2px 0 #2987ff, -2px 0px 0 #2987ff, 0px -2px 0 #2987ff, 2px 2px 2px #2987ff",
    display: "inline-block",
    fontSize: "5rem",
    color: "antiquewhite",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
  },
  heroQuote: {
    display: "inline-block",
    marginTop: "3rem",
    fontFamily: "'Bad Script', cursive",
    fontSize: "2.5rem",
    fontWeight: "300",
    borderBottom: "2px groove rgba(255,255,255,.1)",
    paddingBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  portfolio: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(to right, #370e4c, #390b40)",
    height: "100%",
    paddingBottom: "3rem",
  },
  portfolioTitle: {
    textAlign: "center",
    fontFamily: "Krona One",
    textTransform: "uppercase",
    letterSpacing: "20px",
    paddingTop: "145px",
    marginBottom: "6rem",
    color: "#ffe9ab",
    textShadow: "4px 4px 0 #f80, -4px -4px 0 #ff0000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginBottom: "4.5rem",
      paddingTop: "130px",
    },
  },
  portfolioPower: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2.5rem",
  },
  portfolioPowerText: { color: "#e3e3e3", fontSize: "1.3rem" },
  portfolioPowerLogos: { height: "25px", width: "25px" },
  portfolioDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "3rem",
  },
  portfolioGridItem: {
    display: "flex",
    justifyContent: "center",
  },
  portfolioCard: {
    width: "85%",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTitle: { textAlign: "center", padding: "1rem" },
  cardTechLogos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  cardLogo: {
    objectFit: "contain",
    width: "1%",
    flex: 1,
    alignSelf: "center",
  },
  cardButtons: {
    padding: "30px 0 20px",
    display: "flex",
    justifyContent: "space-around",
  },
  contact: {
    paddingTop: "64px",
    paddingBottom: "3.5rem",
    background:
      "linear-gradient(360deg, rgba(3,0,52,1) 28%, rgba(9,9,121,1) 98%)",
    width: "100%",
    color: "#fff",
  },
  contactTitle: {
    paddingTop: "40px",
    fontSize: "7rem",
    paddingBottom: "3.5rem",
    fontWeight: "bold",
    fontFamily: "Fjalla One",
    letterSpacing: "10px",
    textShadow: "0px 0px 10px yellow, 0px 0px 50px #777",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },
  contactHireMe: {
    fontSize: "6.4rem",
    fontFamily: "Fjalla One",
    lineHeight: 1,
    textShadow: "0 0 13px #cb00ff",
  },
  contactSubtitle: {
    fontSize: "2.8rem",
    fontFamily: "Fjalla One",
    textShadow: "0 0 13px aliceblue",
  },
  contactPaper: {
    marginTop: "5rem",
    width: "85%",
    marginLeft: "7.5%",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "20px",
    paddingTop: "21px",
  },
  contactLinks: { textDecoration: "none", color: "#3a7ec0" },
  contactIcons: {
    fontSize: "6rem",
    color: "#114476",
  },
  contactPhone: {
    display: "inline-block",
    color: "#3a7ec0",
    textAlign: "center",
  },
  portfolioCardGridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
