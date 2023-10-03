import { Box, Container, Hidden } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Header from "./Header";

const Parent = () => {
  return (
    <Box sx={{ background: "#000000" }}>
      <Hidden mdDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <Header />
      </Hidden>

      <Box>
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
