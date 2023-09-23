import React, { useContext, useState } from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import { AppContext } from "../utils";
import { logo } from "../assets/index";

const array = [
  {
    name: "Home",
    link1: "/",
  },
  {
    name: "Whitepaper",
    link1: "/whitepaper",
  },
  {
    name: "buy token",
    link1: "/howToBuy",
  },
  {
    name: "Contact us",
    link1: "/contactus",
  },
];
const array2 = [
  {
    name: "Roadmap",
    link1: "roadmap",
  },
  {
    name: "Our team",
    link1: "ourteam",
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#0F131B",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "#fff",
    },
  },
});

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();
  console.log("account in header.............", account);
  const classes = useStyles();
  const [state, setState] = useState({ left: false });
  const location = useLocation();
  const routeName = location.pathname;

  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "20px",
      color: isActive ? "#000" : "#fff ",
      fontFamily: "Poppins",
      display: "flex",
      gap: "20px",
      alignItems: "center",
      background: isActive ? "#fff" : "",
    };
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}

      <Box
        sx={{
          display: "flex",
          width: "150px",
          height: "70px",
          mx: "auto",
          mt: "50px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          srcSet=""
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <List sx={{ mt: 5, px: 2 }}>
        {array.map(({ link1, name }, index) => {
          return (
            <Box key={index}>
              <NavLink to={link1} style={styledactivelink}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {name}
                </Typography>
              </NavLink>
            </Box>
          );
        })}
        {routeName === "/" && (
          <>
            {array2.map((item, index) => {
              return (
                <Box key={index}>
                  <ScrollLink
                    onClick={toggleDrawer(anchor, false)}
                    to={item?.link1}
                    style={{
                      textDecoration: "none",
                      textTransform: "capitalize",
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "20px",
                      color: "#fff ",
                      fontFamily: "Poppins",
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      // background: isActive ? "#fff" : "",
                    }}
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {item?.name}
                    </Typography>
                  </ScrollLink>
                </Box>
                // <ScrollLink
                //   key={index}
                //   to={item.link1}
                //   spy
                //   smooth
                //   offset={-100}
                //   duration={1000}
                //   style={{
                //     textDecoration: "none",
                //     textTransform: "capitalize",
                //     padding: "10px",
                //     borderRadius: "5px",
                //     fontSize: "20px",
                //     color: "#fff ",
                //     fontFamily: "Poppins",
                //     display: "flex",
                //     gap: "20px",
                //     alignItems: "center",
                //     // background: isActive ? "#fff" : "",
                //   }}
                // >
                //   {item.name}
                // </ScrollLink>
              );
            })}
          </>
        )}

        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0px 20px",
          }}
        >
          {account ? (
            <Button
              onClick={open}
              className="hvr-bounce-to-right-sign"
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              {account.slice(0, 4) + "...." + account.slice(-4)}
            </Button>
          ) : (
            <Button
              onClick={open}
              className="hvr-bounce-to-right-sign"
              sx={{ textTransform: "capitalize", fontSize: "14px" }}
            >
              connect wallet
            </Button>
          )}
        </Box>
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Hidden lgUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: "5px",
                      p: 3,
                    }}
                  >
                    <Box component="img" src={logo} alt="logo" width="30px " />

                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",

                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <Box
                        sx={{
                          height: "100vh",
                          width: "100%",
                          background: "#0F131B",
                        }}
                      >
                        {list(anchor)}
                      </Box>
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}
