import {
  Box,
  Button,
  Drawer,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
import HeaderTop from "../global/HeaderTop";
import { useState } from "react";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import CTIcon from "@/assets/icons/general/LogoWhite.svg";
import OurStoryIllustration from "./images/illus-our-story.svg";
import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-right-primary.svg";

import AboutImage from "./images/img-about@2x.jpg";

const textContent = [
  "WHY SAY SO?",
  "In 2014, CapsuleTransit opened its doors to travellers in tandem with the opening of the largest airport for budget carriers, KLIA2, Malaysia.",
  "Headquartered in gateway@klia2, a shopping complex integrated into the terminal, we aim to provide a safe and convenient place for the weary travellers to take a break and unwind before they take on the world.",
];

const AboutUsHistory = () => {
  const [openWhySoDrawer, setOpenWhySoDrawer] = useState<boolean>(false);

  const handleOpenWhySoDrawer = () => {
    setOpenWhySoDrawer(true);
  };

  const handleCloseWhySoDrawer = () => {
    setOpenWhySoDrawer(false);
  };

  return (
    <ContentWrapper>
      <HeaderTop title="">
        <Button onClick={handleOpenWhySoDrawer} sx={{ color: "black" }}>
          {textContent[0]}
          <Image src={EyeIcon} alt={"eye-icon"} style={{ marginLeft: 5 }} />
        </Button>
      </HeaderTop>

      <Grid
        container
        direction={"row-reverse"}
        justifyContent={"space-between"}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box display={"flex"} justifyContent={"end"}>
            <Image
              src={AboutImage}
              alt="capsule-about"
              style={{ maxWidth: "750px", height: "80vh" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack spacing={5} maxWidth={"630px"}>
            <Typography variant="h4" fontWeight={700}>
              {textContent[1]}
            </Typography>
            <Typography variant="h4">{textContent[2]}</Typography>
          </Stack>
        </Grid>
      </Grid>

      <WhySoDrawer
        open={openWhySoDrawer}
        handleClose={handleCloseWhySoDrawer}
      />
    </ContentWrapper>
  );
};

const WhySoDrawerContent = [
  "Our Story",
  "Imagine you have a flight to a place that you have always dreamt of going. Now imagine that flight is at odd hours in the morning, or late at night. How far would you go to make sure that you get on that flight?",
  "That is the inspiration for our vision for CapsuleTransit:",
  "To deliver convenience for globe-trotters that are travelling near and far.",
  "Now you can sleep soundly knowing you are minutes away from the terminal when you wake up.",
  "Got it!",
];

const WhySoDrawer = (props: { open: boolean; handleClose: VoidFunction }) => {
  const theme = useTheme();
  return (
    <Drawer
      open={props.open}
      anchor="right"
      //   slotProps={{
      //     backdrop: {
      //       sx: {
      //         backgroundColor: theme.palette.primary.main,
      //       },
      //     },
      //   }}
      PaperProps={{
        style: { width: "100%", backgroundColor: theme.palette.primary.main },
      }} // Use style instead of width
      sx={{ width: "100vw" }} // Ensure Drawer takes 100vw
    >
      <Box
        alignSelf={"end"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        role="presentation"
        width={"100%"}
        maxWidth={"1600px"}
        height={"100%"}
        paddingY={2}
        paddingX={7}
        bgcolor={theme.palette.CtColorScheme.blue800}
        overflow={"hidden"}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"end"}
          borderBottom={1}
          borderColor={theme.palette.CtColorScheme.white}
          marginBottom={10}
          paddingBottom={2}
        >
          <Image src={CTIcon} alt="ct-icon" />
          <Typography color={theme.palette.CtColorScheme.white}>
            {WhySoDrawerContent[0]}
          </Typography>
        </Stack>

        <Box
          display={"flex"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box
                display={"flex"}
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"end"}
              >
                <Image
                  src={OurStoryIllustration}
                  alt="our-story-illustration"
                  //   style={{
                  //     width: "100%", // Follow the width of the Box
                  //     height: "auto", // Maintain aspect ratio
                  //     display: "block",
                  //   }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack direction={"column"} width={"75%"} spacing={4}>
                <Typography color={theme.palette.CtColorScheme.white}>
                  {WhySoDrawerContent[1]}
                </Typography>
                <Typography color={theme.palette.CtColorScheme.white}>
                  {WhySoDrawerContent[2]}
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Typography variant="h5" color={"primary"}>
                    “
                  </Typography>
                  <Typography
                    variant="h5"
                    color={theme.palette.CtColorScheme.white}
                  >
                    {WhySoDrawerContent[3]}{" "}
                    <span
                      style={{
                        marginLeft: "5px",
                        color: theme.palette.primary.main,
                      }}
                    >
                      ”
                    </span>
                  </Typography>
                </Stack>
                <Typography color={theme.palette.CtColorScheme.white}>
                  {WhySoDrawerContent[4]}
                </Typography>
                <Button
                  onClick={props.handleClose}
                  sx={{
                    padding: 0,
                    justifyContent: "flex-start",
                    color: "white",
                  }}
                >
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    spacing={2}
                    alignItems={"center"}
                    marginTop={5}
                  >
                    <Image
                      src={IconArrowRight}
                      alt="CT-Right-Up"
                      color={theme.palette.primary.main}
                      style={{
                        transform: "scaleX(-1)",
                      }}
                    />
                    <Typography variant="h4" color={"primary"}>
                      {WhySoDrawerContent[5]}
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AboutUsHistory;
