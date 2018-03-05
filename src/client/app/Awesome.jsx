import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";

import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";

import Collapse from "material-ui/transitions/Collapse";

import AccountCircle from "material-ui-icons/AccountCircle";
import Email from "material-ui-icons/Email";
import Phone from "material-ui-icons/Phone";
import LocationOn from "material-ui-icons/LocationOn";
import DoneAll from "material-ui-icons/DoneAll";
import School from "material-ui-icons/School";
import Brush from "material-ui-icons/Brush";
import FitnessCenter from "material-ui-icons/FitnessCenter";
import Star from "material-ui-icons/Star";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Stepper from "react-reveal/Stepper";

import Simple from "./stepper.jsx";
import Linear from "./skills.jsx";
import SimpleCard from "./footer.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  card: {
    maxWidth: "100%"
  },
  card1: {
    padding: "16"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  font: {
    fontSize: "40px"
  },
  simple: {
    backgroundColor: "#1DE9B6"
  },
  skills: {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "10px"
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  anime: {
    height: "5px",
    width: "300px",
    backgroundColor: "#01579B",
    marginLeft: "800px",
    marginTop: "-40px"
  },
  anime1: {
    height: "5px",
    width: "300px",
    backgroundColor: "#0277BD",
    marginLeft: "900px",
    marginTop: "-10px"
  },
  anime2: {
    height: "5px",
    width: "300px",
    backgroundColor: "#0288D1",
    marginLeft: "1000px",
    marginTop: "-10px"
  }
});

class Mypro extends React.Component {
  constructor(props) {
    super(props);
    this.step = new Stepper()
      .step("navbar", 500)
      .step("title", 1000)
      .step("skill", 3000);
    this.state = {
      expanded: "false"
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} justify="space-around">
          <Grid xs={12}>
            <Fade top big>
              <Card className={classes.card} step={this.step.is("navbar")}>
                <CardContent>
                  <Typography className={classes.font}>
                    <b>
                      <i>
                        <u>Anshita Vishwakarma</u>
                      </i>
                    </b>
                  </Typography>
                  {!this.state.expanded ? (
                    <Fade right big>
                      <div className={classes.anime} />
                      <br />
                      <div className={classes.anime1} />
                      <br />
                      <div className={classes.anime2} />
                    </Fade>
                  ) : null
                  // <Fade left big>
                  //   <div className={classes.anime}></div>
                  //   <br />
                  //   <div className={classes.anime1}></div>
                  //   <br />
                  //   <div className={classes.anime2}></div>
                  // </Fade>
                  }
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <div className={classes.flexGrow} />
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                  <div className={classes.flexGrow} />
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <Fade top big>
                    <CardContent>
                      <Typography>
                        <List>
                          <ListItem>
                            <AccountCircle />
                            <ListItemText primary="I am a UI/UX Developer with a tinge of creativity. React is my partner in crime, Redux is my bae and webpack is lit. Currently I am working in a Edtech Startup named Mayash. I always challenge my limits in every field and Taylor Swift is love." />
                          </ListItem>
                          <Divider inset />
                          <ListItem>
                            <Email />
                            <ListItemText
                              primary="anshitavishwakarma098@gmail.com"
                              secondary="Personal"
                            />
                          </ListItem>
                          <Divider inset />
                          <ListItem>
                            <LocationOn />
                            <ListItemText
                              primary="Gwalior, Madhya Pradesh"
                              secondary="Personal"
                            />
                          </ListItem>
                          <Divider inset />
                          <ListItem>
                            <Star />
                            <ListItemText primary="Interests" secondary="" />
                          </ListItem>
                          <ListItem>
                            <ListItem>
                              <FitnessCenter />
                            </ListItem>
                            <ListItem>
                              <Brush />
                            </ListItem>
                          </ListItem>
                        </List>
                      </Typography>
                    </CardContent>
                  </Fade>
                </Collapse>
              </Card>
            </Fade>
          </Grid>
          <Grid xs={12} step={this.step.is("title")} className={classes.simple}>
            <Simple />
          </Grid>
          <Grid xs={12} step={this.step.is("skill")}>
            <Typography className={classes.skills}>
              <b>
                <u>
                  <i>Skills</i>
                </u>
              </b>
            </Typography>
            <Linear />
          </Grid>
          <Grid xs={12}>
            <SimpleCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Mypro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mypro);
