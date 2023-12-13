import { Box, Container, Typography } from "@mui/material";
import React from "react";
import homebg from "../assets/homebg.png";
import logo from "../assets/logo.png";
import DownCounter from "../smallComponents/Counter";
import menu from "../assets/menu.png";
import mhomebg from "../assets/mhomebg.png";

const Home = () => {
  return (
    <Box sx={{ background: "#0C090E" }}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: { xs: `url(${mhomebg})`, sm: `url(${homebg})` },
          width: "100%",
          mixBlendMode: "normal",
          backgroundPosition: { xs: "center", md: "center" },
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundSize: { xs: "contain", sm: "cover" },
          boxSizing: "border-box",
          pb: 15,
          mt: { xs: "-50px", sm: "0px" },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ zIndex: 100, mt: { xs: "50px", sm: "0px" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "2px solid red",
              py: 2,
              mx: { xs: "0px", xl: "120px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "0px 10px",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: { xs: "40px", sm: "50px", md: "80px" } }}>
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
                  fontSize: { xs: "16px", sm: "20px", md: "30px" },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  mb: "5px",
                }}
              >
                {" "}
                Infiniti Coin
              </Typography>
            </Box>
            <img src={menu} alt="" srcSet="" />
          </Box>{" "}
        </Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px 0px",
            }}
          >
            <Typography
              className="glow-text"
              sx={{
                textAlign: "center",
                fontSize: { xs: "16px", sm: "30px", md: "40px" },
                fontWeight: "700",
                pt: { xs: 5, sm: 10, md: 15 },
              }}
            >
              Get Ready For Our ICO LAUNCH 🚀
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Our website is currently under construction. We are working
              diligently to enhance it, and we will be ready to launch soon.
            </Typography>
            <Box>
              <DownCounter />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
