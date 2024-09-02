import Image from "next/image";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroBackground from "./images/hero-home-img@2x.png";
import HeroMobileBackground from "./images/hero-home-img@2x-mobile.png";
import HeroTitle from "./images/hero-title.png";

const textContents = [
  { text: "CapsuleTransit" },
  { text: "LETS YOU DREAM" },
  { text: "Airport Hotel" },
  { text: "A Short Stay at KLIA" },
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
      // marginBottom={"100px"}
      width={"100%"}
      sx={{ position: "relative", height: "100vh" }}
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
        alignItems={"center"}
        width={"100%"}
        sx={{
          position: "absolute",
          paddingX: 7,
          paddingBottom: 6,
          bottom: 0,
        }}
      >
        <Stack alignItems={"center"}>
          <Image
            src={HeroTitle}
            alt="CapsuleTransit LETS YOUR DREAM"
            style={{ maxWidth: "1000px", height: "auto" }}
          />
        </Stack>
        <Stack direction={"row"} spacing={1} marginTop={6}>
          <Typography variant={"h5"} color={theme.palette.CtColorScheme.white}>
            {textContents[2].text}
          </Typography>
          <Typography variant="h5" color={theme.palette.primary.main}>
            /
          </Typography>
          <Typography variant={"h5"} color={theme.palette.CtColorScheme.white}>
            {textContents[3].text}
          </Typography>
        </Stack>
        {/* <Typography
          variant="h1"
          fontWeight={500}
          color={theme.palette.CtColorScheme.white}
        >
          {textContents[2].text}
        </Typography> */}
      </Box>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  const isSmallerDevice = useMediaQuery("(max-width:500px)");
  const isVerySmallDevice = useMediaQuery("(max-width:370px)");
  return (
    <Box
      marginBottom={"100px"}
      width={"100%"}
      sx={{ position: "relative", height: "100vh" }}
    >
      <Image
        src={HeroMobileBackground}
        alt="CapsuleHero"
        layout="fill"
        objectPosition="center"
        objectFit="fill"
      />
      <Box
        display={"flex"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        width={"100%"}
        sx={{
          position: "absolute",
          paddingX: 3,
          paddingBottom: 6,
        }}
      >
        <Stack alignItems={"center"} spacing={2}>
          <Image
            src={HeroTitle}
            alt="CapsuleTransit LETS YOUR DREAM"
            style={{ maxWidth: "100vw", height: "auto" }}
          />
        </Stack>
        <Stack
          direction={isVerySmallDevice ? "column" : "row"}
          alignItems={"center"}
          spacing={1}
          marginTop={6}
        >
          <Typography
            variant={isSmallerDevice ? "h6" : "h5"}
            fontWeight={700}
            color={theme.palette.CtColorScheme.white}
          >
            {textContents[2].text}
          </Typography>
          <Typography
            variant={isSmallerDevice ? "h6" : "h5"}
            fontWeight={700}
            color={theme.palette.primary.main}
          >
            /
          </Typography>
          <Typography
            variant={isSmallerDevice ? "h6" : "h5"}
            fontWeight={700}
            color={theme.palette.CtColorScheme.white}
          >
            {textContents[3].text}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroSection;
