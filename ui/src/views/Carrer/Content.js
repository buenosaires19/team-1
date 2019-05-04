import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Informacion from './Informacion.js';
import Preguntas from './Preguntas.js';
import Universidades from './Universidades.js';
import Calendario from './Calendario.js';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Informacion" />
            <Tab label="Preguntas" />
            <Tab label="Universidades" />
            <Tab label="Calendario" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <Informacion
            info={this.props.data.info}
          />
          </TabContainer>}
        {value === 1 && <TabContainer>
          <Preguntas
            preguntas={this.props.data.questions}
          />
          </TabContainer>}
        {value === 2 && <TabContainer>
          <Universidades
            unis={this.props.data.faculties}
          />
          </TabContainer>}
        {value === 3 && <TabContainer><Calendario/></TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);