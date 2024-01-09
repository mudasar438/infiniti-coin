import React from "react";

import dc from "../assets/Vector.png";
import tw from "../assets/path1009.png";
import te from "../assets/telegram-1.png";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        width: "100%",
        // gap: "20px 0px",
        py: 3,
        mt: { xs: "100px", sm: "90px", md: 0 },
      }}
    >
      <Box>
        <Box display="flex" gap={2}>
          <a href="https://t.me/INFINITI_COIN" target="_new">
            <img src={te} alt="" srcSet="" />
          </a>
          <a
            href="https://twitter.com/infiniti_coin?s=11&t=X7cnYs8ODhi5Go1Cm--_1w"
            target="_new"
          >
            <img src={tw} alt="" srcSet="" />
          </a>
          <a href="https://discord.gg/WeCuwkDH" target="_new">
            <img src={dc} alt="" srcSet="" />
          </a>
        </Box>
      </Box>
      <Typography variant="body2" className="text-center">
        © 2023 Infiniti Coin. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
