import Image from "next/image";
import ContentWrapper from "../global/ContentWrapper";
import HeaderBottom from "../global/HeaderBottom";
import HeaderTop from "../global/HeaderTop";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

import CTIconBlack from "@/assets/icons/general/icon-logo-ct-black.svg";
import AboutBanner from "./images/img-banner-about.jpg";

const header = ["Refresh, Recharge, Take Off", "Airport and Transit Hotel"];

const content = {
  title: "How Far We Have Come",
  content: [
    {
      highlight: "50K+",
      highlightDescription: "Travellers Annually",
      paragraph:
        "Every year, we welcome over 50,000 travellers from around the globe to KLIA, offering them a comfortable and convenient stay experience.",
    },
    {
      highlight: "4",
      highlightDescription: "Hotels",
      paragraph:
        "We currently have 4 hotels located in KLIA Terminal 1 and Terminal 2, and we strive to bring more accessibility and experience in the coming years.",
    },
    {
      highlight: "10",
      highlightDescription: "Years in Hospitality",
      paragraph:
        "With a decade of experience in the hospitality industry, we have honed our skills and expertise to serve our guests better.",
    },
    {
      highlight: "24/7",
      highlightDescription: "All day, Every Day",
      paragraph:
        "We provide round-the-clock service every day of the year, so that our guests can rely on us for a restful stay no matter what time they arrive.",
    },
  ],
};

const AboutUsAchievements = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Image src={CTIconBlack} alt="ct-icon-black" />}
        middleComponent={<Typography>{header[0]}</Typography>}
        rightComponent={
          <Typography textAlign={"right"}>{header[1]}</Typography>
        }
      />
      <Box
        display={"flex"}
        width={"100%"}
        height={isHandheldDevice ? "300px" : "550px"}
        marginTop={"110px"}
      >
        <Image
          src={AboutBanner}
          alt="about-banner"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Grid container marginTop={5} rowSpacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Typography variant="h5">{content.title}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <Grid container rowGap={8}>
            {content.content.map((achievement, index) => (
              <Grid key={index} item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Stack>
                  <Typography variant="body2">
                    {achievement.highlight}
                  </Typography>
                  <Typography fontSize={"20px"} fontWeight={600}>
                    {achievement.highlightDescription}
                  </Typography>
                  <Typography
                    fontSize={"16px"}
                    marginTop={3}
                    maxWidth={isHandheldDevice ? "100%" : "70%"}
                  >
                    {achievement.paragraph}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};
export default AboutUsAchievements;
