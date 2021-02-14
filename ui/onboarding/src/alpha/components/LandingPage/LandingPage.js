import logo from "../../assets/img/logo.png";
import "./LandingPage.css";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  header: {
    backgroundColor: "transparent",
    color: "Green",
    boxShadow: "0px 0px 0px 0px",
  },
  body: {
    backgroundColor: "Green",
  },
});

function LandingPage() {
  const styling = useStyles();
  return (
    <div className="LandingPage">
      <AppBar position="sticky" className={styling.header}>
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6"> Onboarding Application </Typography>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon></MailIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <header className="LandingPage-header">
        <div className="LandingPage-left">
          <img src={logo} className="LandingPage-logo" alt="logo" />
        </div>
        <div className="LandingPage-right">
          <span className="LandingPage-expand"></span>
          <span>n</span>
          <span>b</span>
          <span>o</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
