import React from 'react';
import {
   makeStyles, Box,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  headerOuter: {
    backgroundColor: theme.custom.workspace.header.background.white,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerContainer: {
    maxWidth: 1440,
    margin: '0 auto',
  },
  rootH5: {
    fontWeight: 500,
  },
  headerRow: {
    borderBottom: '1px solid #EEEEEE',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerOuter}>
      <div className={classes.headerRow}>
        <Box py="18px" pl="24px">
          
        </Box>
      </div>
    </div>
  );
};

export default Header;