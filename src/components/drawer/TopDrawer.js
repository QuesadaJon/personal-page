import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './TopDrawer.styles';

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function TopDrawer() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if(
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <IconButton className={classes.iconButton} onClick={toggleDrawer(true)}>
        <DehazeIcon className={classes.iconButton} color="primary" />
      </IconButton>
      <Drawer
        open={isOpen}
        anchor="left"
        onClick={toggleDrawer(false)}
        onClose={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.toolbar}>
          <Typography variant="h5">
            DA PORTFOLIO PAGE
          </Typography>
        </div>
        <Divider />
        <div className={classes.list}>
          <List className={classes.list}>
            <ListItem
              button
              onClick={() => alert('click!')}
            >
              <ListItemIcon>{<GitHubIcon />}</ListItemIcon>
              <ListItemText primary={'GitHub'} />
            </ListItem>
            <ListItem
              button
              onClick={() => alert('click!')}
            >
              <ListItemIcon>{<LinkedInIcon />}</ListItemIcon>
              <ListItemText primary={'Linkedin'} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

TopDrawer.propTypes = {

};

export default TopDrawer;

