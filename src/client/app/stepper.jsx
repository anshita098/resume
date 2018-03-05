import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
  root: {
    width: '100%',
    padding: '4%',
    marginLeft: theme.spacing.unit
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  resetContainer: {
    marginTop: 0,
    padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
  },
  slide: {
    fontSize: '100px',
    marginTop: '60px',
  },
  simple: {
    backgroundColor: '#1DE9B6',
  },
});

function getSteps() {
  return ['D.A.V. A.C.C. Public School,Kymore,Madhya Pradesh',
    'Madhav Institute of Technology & Science,Gwalior,Madhya Pradesh(Ongoing)',
    'Mayash(Ongoing)'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `In school I used to explore all the domains and keep learning from them.
       I was a self motivated student and always challenge my limits.`;
    case 1:
      return `In college I started my programming career with C++ and 
      later went on to learn python, react, redux and many other things.`;
    case 2:
      return `Here I worked on React along with Redux. 
      Writing modular code is my daily task. Code spilliting and Webpack are my helpers.`;
    default:
      return 'Unknown step';
  }
}

class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    }
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset() {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Grid container
        >
          <Grid xs={12} sm={6}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.simple}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel><b>{label}</b></StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                      </Button>
                          <Button
                            raised
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {
              activeStep === steps.length && (
                <Paper square elevation={0} className={classnames(classes.simple, classes.resetContainer)}>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Reset
            </Button>
                </Paper>
              )
            }
          </Grid>

          <Grid xs={12} sm={6}>
            {
              activeStep === 0 ? <Fade right big> <Typography className={classes.slide}><i>School</i></Typography></Fade> : null
            }
            {
              activeStep === 1 ? <Fade right big><Typography className={classes.slide}><i>College</i></Typography></Fade> : null
            }
            {
              activeStep === 2 ? <Fade right big><Typography className={classes.slide}><i>Experience</i></Typography></Fade> : null
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

Simple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Simple);