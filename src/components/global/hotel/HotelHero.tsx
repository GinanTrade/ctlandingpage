import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const HotelHero = (props: {
  image: any;
  scrollPosition: number;
  textContent: string;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return !isHandheldDevice ? (
    <DesktopView {...props} />
  ) : (
    <HandheldView {...props} />
  );
};

const DesktopView = (props: {
  image: any;
  scrollPosition: number;
  textContent: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{ position: "relative", height: "70vh", overflow: "hidden" }}
    >
      <Image
        src={props.image}
        alt="CapsuleHero"
        objectPosition="center"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "auto",

          top: `${props.scrollPosition * 0.5}px`, // Adjust parallax effect by changing multiplier
        }}
      />
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        justifyContent="flex-end"
        width="50%"
        sx={{
          position: "absolute",
          paddingX: 7,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h1" color={theme.palette.CtColorScheme.white}>
          {props.textContent}
        </Typography>
      </Box>
    </Box>
  );
};

const HandheldView = (props: {
  image: any;
  scrollPosition: number;
  textContent: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{ position: "relative", height: "70vh", overflow: "hidden" }}
    >
      <Image
        src={props.image}
        alt="CapsuleHero"
        objectPosition="center"
        style={{
          position: "absolute",
          zIndex: -1,
          maxWidth: "100%",
          width: "auto",
          height: "100%",
          objectFit: "cover",

          top: `${props.scrollPosition * 0.5}px`, // Adjust parallax effect by changing multiplier
        }}
      />
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        justifyContent="flex-end"
        width="50%"
        sx={{
          position: "absolute",
          paddingX: 3,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h1" color={theme.palette.CtColorScheme.white}>
          {props.textContent}
        </Typography>
      </Box>
    </Box>
  );
};

export default HotelHero;
