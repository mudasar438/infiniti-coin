import { Box, Container, Hidden } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Header from "./Header";

const Parent = () => {
  return (
    <Box sx={{ background: "#080A0B" }}>
      <Hidden mdDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <Header />
      </Hidden>

      <Box>
        <Container>
          <Box
            sx={{
              position: "absolute",
              transform: "translateX(-129px)",
              height: "300px",
              maxWidth: "90%",
              width: "300px",
              opacity: 0.6,
              zIndex: 1,

              borderRadius: "50%",
              // background: "#080A0B",
              background: "#58C5DA",
              filter: "blur(150px)",
            }}
          />
        </Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Parent;
