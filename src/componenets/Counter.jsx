import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const DownCounter = () => {
  const deadline = "September, 27, 2023";
  const calculateTimeRemaining = (deadline) => {
    const currentTime = new Date().getTime();
    const targetTime = new Date(deadline).getTime();
    const timeRemaining = targetTime - currentTime;
    return Math.max(timeRemaining, 0);
  };

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(deadline)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = calculateTimeRemaining(deadline);
      setTimeRemaining(remaining);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    return (
      <>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            textAlign: "center",
            gap: "20px 0px",
            fontFamily: "Rubik",
          }}
        >
          <Box sx={{ borderRadius: "8px" }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "20px", md: "40px" } }}
            >
              {days < 10 ? "0" + days : days}
            </Typography>
            <Typography
              variant="gray"
              sx={{ fontSize: { xs: "13px", md: "18px" } }}
            >
              Days
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: { xs: "20px", md: "40px" } }}
            >
              {hours < 10 ? "0" + hours : hours}
            </Typography>
            <Typography
              variant="gray"
              sx={{ fontSize: { xs: "13px", md: "18px" } }}
            >
              Hours
            </Typography>
          </Box>
          <Box sx={{ borderRadius: "8px" }}>
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: { xs: "20px", md: "40px" } }}
            >
              {minutes < 10 ? "0" + minutes : minutes}
            </Typography>
            <Typography
              variant="gray"
              sx={{ fontSize: { xs: "13px", md: "18px" } }}
            >
              Minutes
            </Typography>
          </Box>
          <Box sx={{ borderRadius: "8px" }}>
            <Typography
              variant="h2"
              mb={1}
              sx={{ fontSize: { xs: "20px", md: "40px" } }}
            >
              {seconds < 10 ? "0" + seconds : seconds}
            </Typography>
            <Typography
              variant="gray"
              sx={{ fontSize: { xs: "13px", md: "18px" } }}
            >
              Seconds
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <div>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default DownCounter;
