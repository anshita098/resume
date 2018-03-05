import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    marginTop: 60,
    paddingLeft: '10%',
    backgroundColor: '#F50057',
  },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <Button
          onClick={() => {
            const href = 'https://www.codepen.io/ansh_098';
            window.open(href);
          }}
        >
          <b>https://www.codepen.io/ansh_098</b>
        </Button>
        <Button
          onClick={() => {
            const href = 'https://www.github.com/anshita098';
            window.open(href);
          }}
        >
          <b>https://www.github.com/anshita098</b>
        </Button>
        <Button
          onClick={() => {
            const href = 'https://www.linkedin.com/in/anshita-vishwakarma-48060211b/';
            window.open(href);
          }}
        >
          <b>https://www.linkedin.com/in/anshita-vishwakarma</b>
        </Button>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
