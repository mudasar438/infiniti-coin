import { Box, Typography, styled } from "@mui/material";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
import couterbg from "../assets/couterbg.png";
import couterbg1 from "../assets/couterbg1.png";

const TextStyled = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Ubuntu",
  fontSize: "18px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "17px",
  },
}));
const TextStyleSmall = styled(Typography)(({ theme }) => ({
  color: "#3F3D3D",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "1.8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "9px",
  },
}));
const CountdownBox = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  verticalAlign: "middle",
  backgroundSize: "cover",
  boxSizing: "border-box",

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));
const DownCounter = ({ time }) => {
  const targetDate = moment.tz("2024-01-01T00:00:00", "Asia/Dubai");
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  function getTimeRemaining() {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${couterbg1})`,
              sm: `url(${couterbg})`,
            },
            mixBlendMode: "normal",
            backgroundPosition: { xs: "center", md: "right" },
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "100% 100%",
            // backgroundColor: { xs: "#D9D9D9", sm: "transparent" },
            boxSizing: "border-box",
            borderRadius: "8px",
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "190px", sm: "150px", md: "300px" },
            height: { xs: "100px", sm: "150px", md: "250px", lg: "300px" },
            position: "relative",
          }}
        >
          <CountdownBox>
            <TextStyleSmall>DAYS</TextStyleSmall>
            <TextStyled
              sx={{
                textAlign: "center",
                color: "#3F3D3D",
                fontFamily: "Jura",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                // mt: { xs: 1.5, md: 2.4 },
              }}
            >
              {timeRemaining?.days}
            </TextStyled>
          </CountdownBox>
        </Box>
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${couterbg1})`,
              sm: `url(${couterbg})`,
            },
            mixBlendMode: "normal",
            backgroundPosition: { xs: "center", md: "right" },
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "100% 100%",
            // backgroundColor: { xs: "#D9D9D9", sm: "transparent" },
            boxSizing: "border-box",
            borderRadius: "8px",
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "190px", sm: "150px", md: "300px" },
            height: { xs: "100px", sm: "150px", md: "250px", lg: "300px" },
            position: "relative",
          }}
        >
          <CountdownBox>
            <TextStyleSmall>Hours</TextStyleSmall>
            <TextStyled
              sx={{
                textAlign: "center",
                color: "#3F3D3D",
                fontFamily: "Jura",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                // mt: { xs: 1.5, md: 2.4 },
              }}
            >
              {timeRemaining?.hours < 10
                ? // eslint-disable-next-line no-unsafe-optional-chaining
                  "0" + timeRemaining?.hours
                : timeRemaining?.hours}
            </TextStyled>
          </CountdownBox>
        </Box>
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${couterbg1})`,
              sm: `url(${couterbg})`,
            },
            mixBlendMode: "normal",
            backgroundPosition: { xs: "center", md: "right" },
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "100% 100%",
            // backgroundColor: { xs: "#D9D9D9", sm: "transparent" },
            boxSizing: "border-box",
            borderRadius: "8px",
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "190px", sm: "150px", md: "300px" },
            height: { xs: "100px", sm: "150px", md: "250px", lg: "300px" },
            position: "relative",
          }}
        >
          <CountdownBox>
            <TextStyleSmall>Minutes</TextStyleSmall>
            <TextStyled
              sx={{
                textAlign: "center",
                color: "#3F3D3D",
                fontFamily: "Jura",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                // mt: { xs: 1.5, md: 2.4 },
              }}
            >
              {timeRemaining?.minutes < 10
                ? // eslint-disable-next-line no-unsafe-optional-chaining
                  "0" + timeRemaining?.minutes
                : timeRemaining?.minutes}
            </TextStyled>
          </CountdownBox>
        </Box>
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${couterbg1})`,
              sm: `url(${couterbg})`,
            },
            mixBlendMode: "normal",
            backgroundPosition: { xs: "center", md: "right" },
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            backgroundSize: "100% 100%",
            // backgroundColor: { xs: "#D9D9D9", sm: "transparent" },
            boxSizing: "border-box",
            borderRadius: "8px",
            px: { xs: 1, md: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "190px", sm: "150px", md: "300px" },
            height: { xs: "100px", sm: "150px", md: "250px", lg: "300px" },
            position: "relative",
          }}
        >
          <CountdownBox>
            <TextStyleSmall>Seconds</TextStyleSmall>
            <TextStyled
              sx={{
                textAlign: "center",
                color: "#3F3D3D",
                fontFamily: "Jura",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                // mt: { xs: 1.5, md: 2.4 },
              }}
            >
              {timeRemaining?.seconds < 10
                ? // eslint-disable-next-line no-unsafe-optional-chaining
                  "0" + timeRemaining?.seconds
                : timeRemaining?.seconds}
            </TextStyled>
          </CountdownBox>
        </Box>
      </Box>
    </>
  );
};

export default DownCounter;
