import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import CTButton from "../global/CTButton";
import Image from "next/image";

import IllustrationCSR from "./image/illus-CSR.png";

const contentTexts = [
  {
    text: "We made our first monthly contribution in September 2023, totalling an impressive RM5,711!",
  },
  {
    text: "Our goal is that by 2028, we will serve 1,000,000 refreshed explorers, and donated RM678,577 to feed the homeless.",
  },
];

const CSRHistory = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return <>{!isHandheldDevice ? <DesktopView /> : <HandheldView />}</>;
};

const DesktopView = () => {
  return (
    <Box paddingTop={"100px"} borderBottom={1} marginBottom={"80px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginY={4}
        maxWidth={"750px"}
      >
        <Typography variant="h4">{contentTexts[0].text}</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginY={4}
        maxWidth={"750px"}
        marginBottom={"200px"}
      >
        <Typography variant="h4">{contentTexts[1].text}</Typography>
      </Box>
      <Box display={"flex"} alignItems={"flex-end"}>
        <Image
          src={IllustrationCSR}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 160,
          }}
        />
      </Box>
    </Box>
  );
};

const HandheldView = () => {
  return (
    <Box paddingTop={"60px"} borderBottom={1} marginBottom={"80px"}>
      <Box display={"flex"} flexDirection={"column"} marginY={4} width={"100%"}>
        <Typography variant="h4">{contentTexts[0].text}</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} marginY={4} width={"100%"}>
        <Typography variant="h4">{contentTexts[1].text}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        width={"100%"}
      >
        <Image
          src={IllustrationCSR}
          alt="cloud-man-walkin"
          style={{ width: "80%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default CSRHistory;
