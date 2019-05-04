import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import profile from "assets/img/faces/christian.jpg";

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 1,
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.preguntas)
    return (
      <div>
        {
        this.props.preguntas.map(e => {
          return(
          <List
        component="nav"
        className={classes.root}
          >
        <ListItem onClick={this.handleClick}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={e.autorImage} />
        </ListItemAvatar>
        <ListItemText
          primary={e.question}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                {e.autor}
              </Typography>
            </React.Fragment>
          }
        />
          </ListItem>
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {e.replies.length > 0 && 
              e.replies.map(r => {
                return(
                   <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" >
                    <ListItem className={classes.nested}>
                      <ListItemIcon>
                      {/* <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}> */}
                        <ListItem alignItems="flex">
                          <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={r.autorImage} />
                          </ListItemAvatar>
                          <ListItemText
                          style={{flex:1, flexGrow: 1, width: 0}}
                          primary={r.reply}
                          secondary={
                              <React.Fragment>
                              <Typography component="span" className={classes.inline} color="textPrimary">
                                  {r.autor} {r.autorCompany}
                              </Typography>
                              </React.Fragment>
                          }
                        />
                      </ListItem>
                      {/* </GridItem>
              </GridContainer> */}

                      </ListItemIcon>
                    </ListItem>
                  </List>
                 </Collapse> 
                )
              })
            }
            
      </List>
          )
        })
      }
      </div>
    );
  }
}


export default withStyles(styles)(NestedList);