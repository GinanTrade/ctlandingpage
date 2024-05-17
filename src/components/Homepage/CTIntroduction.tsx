import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import CTButton from "../global/CTButton";
import Image from "next/image";

import IllustrationCloudMan from "./images/illus-travel-guy.svg";

const textContents = [
  { text: "Welcome to" },
  { text: "Capsule Transit Hotel" },
  {
    text: "Located at Kuala Lumpur International Airport, a place with all you need for",
  },
  { text: "a long layover." },
  { text: "STAY AT KLIA TERMINAL 1" },
  { text: "STAY AT KLIA TERMINAL 2" },
];

const gridContents = [
  { title: "Best Locations", description: "Lorem Ipsum" },
  { title: "Flexible Check-in Time", description: "Lorem Ipsum" },
  { title: "Book by the Hours", description: "Lorem Ipsum" },
  { title: "Luggage Storage Service", description: "Lorem Ipsum" },
  { title: "Refreshing Shower Service", description: "Lorem Ipsum" },
  { title: "Gender-Specific Zones", description: "Lorem Ipsum" },
];

const CTIntroduction = () => {
  const theme = useTheme();

  const handleKLIA1ButtonPress = () => {};
  const handleKLIA2ButtonPress = () => {};
  const handleHighlightButtonPress = () => {};

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <ContentWrapper>
      {!isHandheldDevice ? (
        <DesktopView handleHighlightButtonPress={handleHighlightButtonPress} />
      ) : (
        <HandheldView handleHighlightButtonPress={handleHighlightButtonPress} />
      )}
    </ContentWrapper>
  );
};

const DesktopView = (props: { handleHighlightButtonPress: VoidFunction }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        padding={"5px"}
        bgcolor={theme.palette.CtColorScheme.neon200}
        spacing={1}
        marginY={2}
        display={"inline-flex"}
      >
        <Typography variant="h6" fontWeight={500}>
          {textContents[0].text}
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {textContents[1].text}
        </Typography>
      </Stack>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={4}
        marginBottom={"200px"}
      >
        <Typography variant="body2" maxWidth={"800px"}>
          {textContents[2].text}
        </Typography>
        <Typography variant="body2" color={theme.palette.CtColorScheme.neon300}>
          {textContents[3].text}
        </Typography>
      </Box>
      {/* <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        marginTop={10}
        marginBottom={"200px"}
      >
        <CTButton
          onClick={handleKLIA1ButtonPress}
          text={textContents[4].text}
          variant="secondary"
        />
        <CTButton
          onClick={handleKLIA2ButtonPress}
          text={textContents[5].text}
          variant="secondary"
        />
      </Stack> */}
      <Box
        display={"flex"}
        alignItems={"flex-end"}
        // position={"absolute"}
      >
        <Image
          src={IllustrationCloudMan}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
          }}
        />
      </Box>
      <Grid container borderTop={1} direction={"row"}>
        {gridContents.map((content, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              paddingY={4}
              borderBottom={1}
              marginRight={index % 2 === 0 ? 5 : 0}
            >
              <Typography variant="h4">{content.title}</Typography>
              <Typography variant="h6">{content.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box marginY={10}>
        <CTButton
          onClick={props.handleHighlightButtonPress}
          text="SEE HIGHLIGHT DETAIL"
          variant="secondary"
        />
      </Box>
    </>
  );
};

const HandheldView = (props: { handleHighlightButtonPress: VoidFunction }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        padding={"5px"}
        bgcolor={theme.palette.CtColorScheme.neon200}
        spacing={1}
        marginY={2}
        display={"inline-flex"}
      >
        <Typography variant="h6" fontWeight={500}>
          {textContents[0].text}
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          {textContents[1].text}
        </Typography>
      </Stack>
      <Box display={"flex"} flexDirection={"column"} marginY={4}>
        <Typography variant="body2" width={"90%"}>
          {textContents[2].text}
        </Typography>
        <Typography variant="body2" color={theme.palette.CtColorScheme.neon300}>
          {textContents[3].text}
        </Typography>
      </Box>

      <Box display={"flex"} justifyContent={"flex-end"} height={"300px"}>
        <Image
          src={IllustrationCloudMan}
          alt="cloud-man-walkin"
          style={{ height: "100%", width: "auto" }}
        />
      </Box>
      <Grid container borderTop={1} direction={"row"}>
        {gridContents.map((content, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              paddingY={4}
              borderBottom={1}
            >
              <Typography variant="h4">{content.title}</Typography>
              <Typography variant="h6">{content.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box marginY={10}>
        <CTButton
          onClick={props.handleHighlightButtonPress}
          text="SEE HIGHLIGHT DETAIL"
          variant="secondary"
        />
      </Box>
    </>
  );
};

export default CTIntroduction;
