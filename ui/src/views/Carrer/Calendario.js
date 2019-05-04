import React, { Component } from 'react';
import Calendar from 'react-calendar';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Calendario extends Component {
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
     
      render() {
        const { classes } = this.props;
        return (
          <div>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes}>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
             </GridItem>
            </GridContainer>
          </div>
        );
      }
}

export default Calendario
