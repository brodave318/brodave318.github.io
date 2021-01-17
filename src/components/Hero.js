import React from "react";
import useStyles from "./utils/tools";

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.heroLogo}>
        <div className={classes.heroLogoLT}>&lt;</div>
        <div className={classes.heroDH}>dh</div>
        <div className={classes.heroLogoGT}>/&gt;</div>
      </div>
      <div className={classes.heroHeader}>
        <div style={{ lineHeight: "1.7" }}>
          I am <span className={classes.heroName}>Dave Hernandez</span>
          <br />
          <span className="hero__header__intro">
            Passionate, Creative Web Developing
            <br />
            Building Beautiful Ideas to Life.
          </span>
          <br />
          <span className={classes.heroQuote}>
            <i>"...never stop learning & perfect..."</i>
          </span>
        </div>
      </div>
    </div>
  );
}
