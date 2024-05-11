import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import KecharaLogo from "./image/logo-kechara.png";
import CTLogo from "./image/logo-capsuletransit.png";
import CloseIcon from "@/assets/icons/general/icon-menu-close-black.svg";

const textContent = ["Sleep well and help others eat well", "CSR", "Campaign"];

const CSRHero = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? <DesktopView /> : <HandheldView />;
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width="100%"
      alignItems={"center"}
      borderBottom={1}
    >
      <Stack
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"200px"}
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
            <b>{textContent[1]}</b> {textContent[2]}
          </Typography>
        </div>
        <Typography
          variant={"h2"}
          color={"black"}
          maxWidth={"700px"}
          textAlign={"center"}
          marginBottom={"100px"}
        >
          {textContent[0]}
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={8}
        marginTop={"60px"}
        marginBottom={"100px"}
      >
        <Image src={CTLogo} alt="CapsuleTransitLogo" />
        <Image src={CloseIcon} alt="CloseIcon" width={30} height={30} />
        <Image src={KecharaLogo} alt="KecharaLogo" />
      </Stack>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width="100%"
      alignItems={"center"}
      borderBottom={1}
    >
      <Stack
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"120px"}
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
            <b>{textContent[1]}</b> {textContent[2]}
          </Typography>
        </div>
        <Typography
          fontSize={"46px"}
          fontWeight={700}
          color={"black"}
          textAlign={"center"}
        >
          {textContent[0]}
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={5}
        marginTop={"60px"}
        marginBottom={"100px"}
      >
        <Image src={CTLogo} alt="CapsuleTransitLogo" width={120} height={30} />
        <Image src={CloseIcon} alt="CloseIcon" width={20} height={20} />
        <Image src={KecharaLogo} alt="KecharaLogo" width={120} height={30} />
      </Stack>
    </Box>
  );
};

export default CSRHero;
