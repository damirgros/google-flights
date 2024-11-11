import { Box, Typography } from "@mui/material";
import flightImage from "./assets/image.svg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "350px",
        backgroundImage: `url(${flightImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "black",
          padding: "10px 20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Flights
      </Typography>
    </Box>
  );
};

export default HeroSection;
