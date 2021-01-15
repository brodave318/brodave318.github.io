import { Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";

const GridFix = withStyles(
  {
    container: {
      width: "100%",
      margin: 0,
    },
  },
  { name: "MuiGrid" }
)(Grid);

export default GridFix;
