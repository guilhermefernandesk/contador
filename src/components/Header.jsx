import React from "react";
import { makeStyles } from "@mui/material";

const Header = () => {
    const classes = useStyles();

    <div className={classes.header}>
        <a href="#" className={`${classes.headerLink} ${classes.logo}`}>Logo</a>
        <div className={classes.headerRight}>
            <a href="#">Login</a>
        </div>
    </div>
}

export default Header;

const useStyles = makeStyles({
    headerLink: {
      float: 'left',
      color: 'black',
      textAlign: 'center',
      padding: 12,
      textDecoration: 'none',
      fontSize: 18,
      lineHeight: 25,
      borderRadius: 4,
      '&.logo': {
        fontSize: 25,
        fontWeight: 'bold',
      },
      '&:hover': {
        backgroundColor: '#ddd',
        color: 'black',
      },
    },
    headerRight: {
      float: 'right',
    },
  });