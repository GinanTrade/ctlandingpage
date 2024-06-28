import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import NewsRoomHeroImage from "./images/hero-bg-newswroom.jpg";

const textContent = ["Newsroom", "Stay", "Updated"];

const NewsRoomHero = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? <DesktopView /> : <HandheldView />;
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={"5rem"}
      sx={{
        position: "relative",
        height: "55vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={NewsRoomHeroImage}
        alt="NewsRoomHero"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      />
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Typography variant={"h2"} color={theme.palette.CtColorScheme.white}>
          {textContent[0]}
        </Typography>
        {/* <div
          style={{
            display: "inline-block",
          }}
        >
          <Typography
            variant="h6"
            display="inline"
            bgcolor={theme.palette.primary.main}
            padding="7px"
          >
            {textContent[1]} <b>{textContent[2]}</b>
          </Typography>
        </div> */}
      </Stack>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={NewsRoomHeroImage}
        alt="NewsRoomHero"
        style={{
          position: "absolute",
          zIndex: -1,
          // maxWidth: "100%",
          // maxHeight: "100%",
          height: "100%",
        }}
      />
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Typography variant={"h2"} color={theme.palette.CtColorScheme.white}>
          {textContent[0]}
        </Typography>
        {/* <div
          style={{
            display: "inline-block",
          }}
        >
          <Typography
            variant="h6"
            display="inline"
            bgcolor={theme.palette.primary.main}
            padding="5px"
          >
            {textContent[1]} <b>{textContent[2]}</b>
          </Typography>
        </div> */}
      </Stack>
    </Box>
  );
};

export default NewsRoomHero;
