import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import perfil from '../videos/kapo.JPG'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 630,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  console.log(props.data)
  return (
    <List className={classes.root}>
      <Route render={({ history }) => (
      <ListItem button alignItems="flex-start" onClick={() => { history.push('/socio-perfil',props.data[0].profesional_id) }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={perfil}/>
        </ListItemAvatar>
        <ListItemText
          primary={props.data[0].career}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                {props.data[0].profesional_name} {props.data[0].company}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
        )} />
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
