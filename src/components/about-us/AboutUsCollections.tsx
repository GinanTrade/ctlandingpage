import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";

import CapsuleTransitImage from "./images/logo-display-capsuletransit@2x.png";
import CapsuleTransitMAXImage from "./images/logo-display-capsuletransitMAX@2x.png";
import CapsuleTransitInterstellar from "./images/logo-display-interstellar@2x.png";
import Image from "next/image";

const textContent = [
  "Reimagine Airport Accommodation",
  "That’s our life mission. With that, we introduced 3 different collections to cater to various travellers. We believe there is something out there for everyone!",
];

const hotels = [
  {
    image: CapsuleTransitImage,
    title: "CapsuleTransit",
    description:
      "For the adventurous who are looking for a place to freshen up and rest in our signature pods before catching early and red eye flights or even while in transit.",
  },
  {
    image: CapsuleTransitMAXImage,
    title: "CapsuleTransit MAX",
    description:
      "For those who prefers more of everything. Privacy. Space. En-suite bathroom.",
  },
  // {
  //   image: CapsuleTransitInterstellar,
  //   title: "Interstellar",
  //   description:
  //     "Sophisticated pods strategically placed in pocket spaces around the airport. Locate, check in, and access into the pods using only your mobile phone.",
  // },
];

const AboutUsCollections = () => {
  const theme = useTheme();

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <ContentWrapper>
      <Box display={"flex"} flexDirection={"column"} borderTop={1}>
        <Stack spacing={2} marginTop={"80px"} maxWidth={"600px"}>
          <Typography variant="body2">{textContent[0]}</Typography>
          <Typography>{textContent[1]}</Typography>
        </Stack>

        {!isHandheldDevice ? <DesktopView /> : <HandheldView />}
      </Box>
    </ContentWrapper>
  );
};

const DesktopView = () => {
  const theme = useTheme();
  return (
    <Grid container marginTop={"90px"} rowSpacing={8}>
      {hotels.map((hotel, index) => (
        <Grid key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
          <Stack spacing={6}>
            <Image
              src={hotel.image}
              alt={hotel.title}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "auto",
                maxWidth: "40%",
              }}
            />
            <Stack direction={"column"} spacing={3}>
              <Divider
                sx={{
                  width: "30px",
                  bgcolor: theme.palette.CtColorScheme.grey400,
                  marginTop: 1,
                }}
              />
              <Typography fontWeight={700}>{hotel.title}</Typography>
              <Typography maxWidth={"70%"}>{hotel.description}</Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      marginTop={"90px"}
      spacing={4}
      overflow={"auto"}
      sx={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {hotels.map((hotel, index) => (
        <Box key={index} width={"410px"}>
          <Stack spacing={8}>
            <Image
              src={hotel.image}
              alt={hotel.title}
              style={{
                maxWidth: "410px",
                maxHeight: "100%",
                height: "auto",
                width: "auto",
              }}
            />
            <Stack direction={"column"} spacing={3}>
              <Divider
                sx={{
                  width: "30px",
                  bgcolor: theme.palette.CtColorScheme.grey400,
                  marginTop: 1,
                }}
              />
              <Typography fontWeight={700}>{hotel.title}</Typography>
              <Typography maxWidth={"100%"}>{hotel.description}</Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default AboutUsCollections;
