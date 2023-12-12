import { Box, Container, Typography } from "@mui/material";
import React from "react";
import homebg from "../assets/homebg.png";
import logo from "../assets/logo.png";
import DownCounter from "../smallComponents/Counter";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${homebg})`,
        width: "100%",
        mixBlendMode: "normal",
        backgroundPosition: { xs: "center", md: "center" },
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundSize: "cover",
        boxSizing: "border-box",
        py: 15,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "0px 30px",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "50px", sm: "90px", md: "120px" } }}>
              <img
                src={logo}
                alt=""
                srcSet=""
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>{" "}
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Jura",
                fontSize: { xs: "20px", sm: "40px", md: "50px" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              {" "}
              Infiniti Coin
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Lalezar",
              fontSize: { xs: "50px", sm: "90px", md: "118px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "90%",
              textAlign: "center",
            }}
          >
            Coming Soon
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Our website is under construction. We're working hard to improve our
            website and we'll ready to launch after
          </Typography>
          <Box>
            <DownCounter />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
