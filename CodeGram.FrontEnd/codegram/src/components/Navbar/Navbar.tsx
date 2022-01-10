import { FaUserAlt } from "react-icons/fa";
import './Navbar.css';
import {Button, Typography, Avatar, Grid} from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import { useAuth } from "../../auth/AccountProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
const useStyles = makeStyles({
    nav: {
      padding: "24px 48px",
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
    },
    rightItemContainer: {
      marginLeft: "auto",
    },
    gridItem: {
      padding: "12px",
    },
    imgLogo: {
      verticalAlign: "middle",
      width: "85px",
    },
    postAJob: {
      marginLeft: "20px",
    },
  });
const Navbar = () => {
  const classes = useStyles();
  const { instance } = useMsal();
  const user = useAuth();
  useEffect(() => {
    (async () => {
      if (user) {
        const token = await instance.acquireTokenSilent({
          account: user,
          scopes: [window._env_.scope],
        });
        // console.log(token);
      }
    })();
  }, [instance, user]);
  // console.log(user)
    return (
        <nav className="container navbar">
            <div className="item">
                <span className="navbar__logo">
                    <span className="navbar__logo__code">&lt;code&gt;</span>
                    <span className="navbar__logo__gram">gram</span>
                </span>
            </div>
            <div className="item">
                <a className="navbar__profile">
                    <FaUserAlt />
                </a>
            </div>
            <div
          className={`${classes.flexContainer} ${classes.rightItemContainer}`}
        >
          {user ? (
            <>
              
              <Button
                className={classes.gridItem}
                onClick={() => instance.logoutRedirect()}
              >
                <Grid container direction="row" spacing = {3}>
                  <Grid item>
                    <Typography color="black" fontWeight="700">
                      Log out{" "}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LogoutIcon sx ={{fontSize: "20px", color: "black"}} />
                  </Grid>
                </Grid>
              </Button>
            </>
          ) : (
            <Button
              className={classes.gridItem}
              onClick={() => instance.loginRedirect({scopes:[]})}
            >
              <Grid container direction="row" spacing = {3}>
                  <Grid item>
                    <Typography color="black" fontWeight="700">
                      Log in{" "}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LoginIcon sx ={{fontSize: "20px", color: "black"}} />
                  </Grid>
                </Grid>
            </Button>
          )}
          </div>
        </nav>
    );
}

export default Navbar;
