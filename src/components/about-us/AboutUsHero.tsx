import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const textContent = [
  "About",
  " Us",
  "We deliver convenience for globe-trotters that are travelling near and far.",
];

const AboutUsHero = () => {
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
      height={"60vh"}
      justifyContent={"flex-end"}
      paddingX={7}
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
      <Typography variant="h3" maxWidth={"700px"} marginTop={1}>
        {textContent[2]}
      </Typography>
    </Box>
  );
};

const HandheldView = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"60vh"}
      justifyContent={"flex-end"}
      paddingX={3}
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
      <Typography variant="h1" width={"100%"} marginTop={1}>
        {textContent[2]}
      </Typography>
    </Box>
  );
};

export default AboutUsHero;
