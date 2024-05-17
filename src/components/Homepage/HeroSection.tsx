import Image from "next/image";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroBackground from "./images/hero-home-img@2x.jpg";

const textContents = [
  { text: "Airport Hotel" },
  { text: "A Short Stay at KLIA" },
  { text: "Refresh, Recharge, Take Off." },
];

const HeroSection = () => {
  const theme = useTheme();

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return !isHandheldDevice ? <DesktopView /> : <HandheldView />;
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <Box
      marginBottom={"100px"}
      width={"100%"}
      sx={{ position: "relative", height: "83vh" }}
    >
      <Image
        src={HeroBackground}
        alt="CapsuleHero"
        layout="fill"
        objectPosition="center"
      />
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        width={"50%"}
        sx={{
          position: "absolute",
          paddingX: 7,
          paddingBottom: 2,
          bottom: 0,
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Typography variant={"h6"} color={theme.palette.CtColorScheme.white}>
            {textContents[0].text}
          </Typography>
          <Typography variant="h6" color={theme.palette.primary.main}>
            /
          </Typography>
          <Typography variant={"h6"} color={theme.palette.CtColorScheme.white}>
            {textContents[1].text}
          </Typography>
        </Stack>
        <Typography
          variant="h1"
          fontWeight={500}
          color={theme.palette.CtColorScheme.white}
        >
          {textContents[2].text}
        </Typography>
      </Box>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      marginBottom={"100px"}
      width={"100%"}
      sx={{ position: "relative", height: "83vh" }}
    >
      <Image
        src={HeroBackground}
        alt="CapsuleHero"
        layout="fill"
        objectPosition="center"
      />
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        width={"370px"}
        sx={{
          position: "absolute",
          paddingX: 3,
          paddingBottom: 2,
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Typography variant={"h6"} color={theme.palette.CtColorScheme.white}>
            {textContents[0].text}
          </Typography>
          <Typography variant="h6" color={theme.palette.primary.main}>
            /
          </Typography>
          <Typography variant={"h6"} color={theme.palette.CtColorScheme.white}>
            {textContents[1].text}
          </Typography>
        </Stack>
        <Typography
          variant="h1"
          fontWeight={500}
          color={theme.palette.CtColorScheme.white}
        >
          {textContents[2].text}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
