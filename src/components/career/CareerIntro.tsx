import { Box, Grid, Stack, Typography } from "@mui/material";

const textContent = [
  "Fast. Extraordinary. Accurate.",
  "Think that describes you? Then join us and be part of the team that values speed, amazing service and being precise; which we believe is our drive to success.",

  "CapsuleTransit is made up of forward-thinking talents coming from a diverse background of expertise in Hospitality, Construction, Design and Business Management which brought award-winning hotels to fruition through our people's passion and commitment.",
  "If you are a jovial, positive, and people person, then we'd love to meet you so you can get in the ground floor to build the largest global hotel group for millenials by giving our guests experiences they'll never forget.",
];

const CareerIntro = () => {
  return (
    <Box width={"100%"}>
      <Grid container borderTop={1} paddingY={6}>
        <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
          <Stack width={"100%"} spacing={"50px"}>
            <Typography variant="h3" color={"primary"}>
              {textContent[0]}
            </Typography>
            <Typography variant="h5" maxWidth={"70%"}>
              {textContent[1]}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
          <Box
            display={"flex"}
            height={"100%"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
          >
            <Stack width={"60%"} spacing={1}>
              <Typography>{textContent[2]}</Typography>
              <Typography>{textContent[3]}</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerIntro;
