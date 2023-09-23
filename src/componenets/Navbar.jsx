import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useContext } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { AppContext } from "../utils";
import { logo } from "../assets";

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
export const Navbar = () => {
  const location = useLocation();
  const routeName = location.pathname;
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "12px",
      color: isActive ? "#58C5DA" : "#fff",
      alignItems: "center",
      fontWeight: "700",
    };
  };

  return (
    <Container sx={{ position: "relative" }}>
      <Box
        py={5}
        sx={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <Box>
          <img width="40px" src={logo} alt="logo" srcSet="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "0px 80px",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {array.map((item, index) => {
                return (
                  <NavLink
                    to={item.link1}
                    key={index}
                    style={styledactivelink}
                    className="cool-link"
                  >
                    {item.name.toUpperCase()}
                  </NavLink>
                );
              })}
              {routeName === "/" && (
                <>
                  {array2.map((item, index) => {
                    return (
                      <ScrollLink
                        key={index}
                        to={item.link1}
                        spy
                        smooth
                        offset={-100}
                        duration={1000}
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          padding: "10px",
                          borderRadius: "5px",
                          fontSize: "12px",
                          color: "#fff",
                          alignItems: "center",
                          fontWeight: "700",
                          textTransform: "uppercase",
                        }}
                        className="cool-link"
                      >
                        {item.name}
                      </ScrollLink>
                    );
                  })}
                </>
              )}
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
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
      </Box>
    </Container>
  );
};
