import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import IllustrationCommitment from "./images/illus-commitment.svg";

const textContent = ["Career", "Be Part of CapsuleTransit"];

const CareerHero = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return !isHandheldDevice ? <DesktopView /> : <HandheldView />;
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"70vh"}
        justifyContent={"center"}
        paddingX={7}
        position={"relative"}
      >
        <div
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
            <b>{textContent[0]}</b>
          </Typography>
        </div>
        <Typography variant="h1" maxWidth={"500px"}>
          {textContent[1]}
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"flex-end"}>
        <Image
          src={IllustrationCommitment}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
          }}
        />
      </Box>
    </>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      paddingX={3}
      paddingTop={"200px"}
    >
      <div
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
          {textContent[0]} <b>{textContent[1]}</b>
        </Typography>
      </div>
      <Typography variant="h1" maxWidth={"1000px"}>
        {textContent[2]}
      </Typography>
      <Box display={"flex"} marginTop={5} justifyContent={"center"}>
        <Image
          src={IllustrationCommitment}
          alt="cloud-man-walkin"
          style={{
            maxWidth: "100%",
            maxHeight: "250px",
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};
export default CareerHero;
