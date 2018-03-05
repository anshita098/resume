import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

import ContentPaste from 'material-ui-icons/ContentPaste';
import PersonPin from 'material-ui-icons/PersonPin';
import VolumeUp from 'material-ui-icons/VolumeUp';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 80,
    // marginLeft: '30px',
  },
  card: {
    width: '300px',
    height: '400px',
    backgroundColor: '#000000',
    color: 'white',
  },
  short: {
    width: '280px',
    padding: '3%',
  },
  list: {
    color: 'white',
  }
});

class Linear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
    };
    this.progress = this.progress.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress() {
    const { one, two, three, four, five, six } = this.state;
    this.setState({ one: 80, two: 75, three: 85, four: 90, five: 72, six: 93 });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container
          justify={'center'}
        >
          <Grid xs={6} sm={3}>
            <Card className={classes.card}>
              <List>
                <ListItem>
                  <ContentPaste />
                  <Typography className={classes.list}>Professional</Typography>
                </ListItem>
                <div className={classes.short}>
                  <Typography className={classes.list}>ReactJs</Typography>
                  <LinearProgress mode="determinate" value={this.state.one} />
                  <br />
                  <Typography className={classes.list}>Redux</Typography>
                  <LinearProgress mode="determinate" value={this.state.two} />
                  <br />
                  <Typography className={classes.list}>Git</Typography>
                  <LinearProgress mode="determinate" value={this.state.three} />
                  <br />
                  <Typography className={classes.list}>Material Design</Typography>
                  <LinearProgress mode="determinate" value={this.state.four} />
                  <br />
                  <Typography className={classes.list}>Material UI</Typography>
                  <LinearProgress mode="determinate" value={this.state.five} />
                  <br />
                  <Typography className={classes.list}>C++</Typography>
                  <LinearProgress mode="determinate" value={this.state.two} />
                </div>
              </List>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className={classes.card}>
              <List>
                <ListItem>
                  <PersonPin />
                  <Typography className={classes.list}>Personal</Typography>
                </ListItem>
                <div className={classes.short}>
                  <Typography className={classes.list}>Commitment</Typography>
                  <LinearProgress mode="determinate" value={this.state.four} />
                  <br />
                  <Typography className={classes.list}>Punctual</Typography>
                  <LinearProgress mode="determinate" value={this.state.three} />
                  <br />
                  <Typography className={classes.list}>Leadership</Typography>
                  <LinearProgress mode="determinate" value={this.state.three} />
                  <br />
                  <Typography className={classes.list}>Passion</Typography>
                  <LinearProgress mode="determinate" value={this.state.four} />
                  <br />
                  <Typography className={classes.list}>Analytical Skill</Typography>
                  <LinearProgress mode="determinate" value={this.state.five} />
                </div>
              </List>
            </Card>
          </Grid>
          <Grid xs={6} sm={3}>
            <Card className={classes.card}>
              <List>
                <ListItem>
                  <VolumeUp />
                  <Typography className={classes.list}>Language</Typography>
                </ListItem>
                <div className={classes.short}>
                  <Typography className={classes.list}>English</Typography>
                  <LinearProgress mode="determinate" value={this.state.three} />
                  <br />
                  <Typography className={classes.list}>Hindi</Typography>
                  <LinearProgress mode="determinate" value={this.state.four} />
                  <br />
                </div>
              </List>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Linear.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Linear);
