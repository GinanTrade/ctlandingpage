import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import CTButton from "../global/CTButton";
import Image from "next/image";

import IllustrationRestingLady from "./images/illus-rest-lady.svg";

import TheStarIcon from "./images/featured_on/logo-featured-thestar-bw@2x.png";
import MoodieDavittIcon from "./images/featured_on/logo-featured-moodiedavitt-bw@2x.png";
import EdgeTVIcon from "./images/featured_on/logo-featured-theedgetv-bw@2x.png";
import ETBIcon from "./images/featured_on/logo-featured-etb-bw@2x.png";
import TV3Icon from "./images/featured_on/logo-featured-tv3-bw@2x.png";
import BernamaIcon from "./images/featured_on/logo-featured-bernama-bw@2x.png";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./HighlightedText.module.css";
import { useRouter } from "next/navigation";

const contentTexts = {
  text: "We ensure the best experience for our guests with ",
};

const items = [
  "our best rate guarantee",
  "contactless services",
  "flexible cancellation",
  "dedication to cleanliness",
];

const featuredOn = [
  TheStarIcon,
  MoodieDavittIcon,
  EdgeTVIcon,
  ETBIcon,
  TV3Icon,
  BernamaIcon,
];

const staticText = ["Featured On"];

const CTDedication = () => {
  const router = useRouter();
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const highlightColor = theme.palette.primary.main;
  const defaultColor = theme.palette.CtColorScheme.black800;

  const [count, setCount] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      setUpdateCount((prevUpdateCount) => prevUpdateCount + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (updateCount > 0 && updateCount % 4 === 0) {
      setCount(0);
      setUpdateCount(0);
    }
  }, [updateCount]);

  const handleCommitmentClick = () => {
    router.push("/our-commitment");
  };

  return (
    <ContentWrapper>
      {!isHandheldDevice ? (
        <DesktopView
          handleCommitmentClick={handleCommitmentClick}
          count={count}
          defaultColor={defaultColor}
          highlightColor={highlightColor}
        />
      ) : (
        <HandheldView
          handleCommitmentClick={handleCommitmentClick}
          count={count}
          defaultColor={defaultColor}
          highlightColor={highlightColor}
        />
      )}
    </ContentWrapper>
  );
};

const DesktopView = (props: {
  handleCommitmentClick: VoidFunction;
  count: number;
  highlightColor: string;
  defaultColor: string;
}) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={2}
        maxWidth={"780px"}
      >
        <Typography variant="h3">
          {contentTexts.text}{" "}
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  props.count === index
                    ? styles.easeOutAnimation
                    : props.count - 1 === index ||
                      (props.count === 0 && index === items.length - 1)
                    ? styles.easeInAnimation
                    : ""
                }
                style={
                  {
                    "--highlight-color": props.highlightColor,
                    "--default-color": props.defaultColor,
                  } as React.CSSProperties
                }
              >
                {item}
              </span>
              {index < items.length - 1 ? ", " : "."}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
      <Box marginTop={10} marginBottom={"200px"}>
        <CTButton
          onClick={props.handleCommitmentClick}
          text="Our Commitment"
          variant="secondary"
        />
      </Box>
      <Box display={"flex"} alignItems={"flex-end"}>
        <Image
          src={IllustrationRestingLady}
          alt="cloud-man-walkin"
          style={{
            position: "absolute",
            right: 100,
          }}
        />
      </Box>
      <Box borderBottom={1}></Box>
      {/* <Grid
        container
        borderTop={1}
        borderBottom={1}
        paddingY={5}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Typography>{staticText[0]}</Typography>
        </Grid>
        {featuredOn.map((icon, index) => (
          <Grid item key={index} xs={6} sm={6} md={1.5} lg={1.5} xl={1.5}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={icon}
                alt={"featured-on"}
                style={{
                  maxWidth: "100%",
                  maxHeight: "60px",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

const HandheldView = (props: {
  handleCommitmentClick: VoidFunction;
  count: number;
  highlightColor: string;
  defaultColor: string;
}) => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} marginY={4} width={"100%"}>
        <Typography variant="h3">
          {contentTexts.text}{" "}
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  props.count === index
                    ? styles.easeOutAnimation
                    : props.count - 1 === index ||
                      (props.count === 0 && index === items.length - 1)
                    ? styles.easeInAnimation
                    : ""
                }
                style={
                  {
                    "--highlight-color": props.highlightColor,
                    "--default-color": props.defaultColor,
                  } as React.CSSProperties
                }
              >
                {item}
              </span>
              {index < items.length - 1 ? ", " : "."}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
      <Box marginTop={10} marginBottom={"100px"}>
        <CTButton
          onClick={props.handleCommitmentClick}
          text="Our Commitment"
          variant="secondary"
        />
      </Box>
      <Box display={"flex"} alignItems={"flex-end"} width={"100%"}>
        <Image
          src={IllustrationRestingLady}
          alt="cloud-man-walkin"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      {/* <Grid
        container
        borderTop={1}
        borderBottom={1}
        paddingY={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box display={"flex"} justifyContent={"center"} marginBottom={4}>
            <Typography>{staticText[0]}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={1.5} lg={1.5} xl={1.5}>
          <div
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
          >
            <motion.div
              animate={{
                x: ["-200%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 10,
                  repeat: Infinity,
                },
              }}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Box
                display={"flex"}
                flexShrink={0}
                width={`${100 / featuredOn.length}%`}
                marginX={4}
              >
                <Image
                  src={featuredOn[featuredOn.length - 2].src}
                  alt="featured-on"
                  width={80}
                  height={50}
                  style={{
                    marginRight: "10px", // Adjust spacing between icons as needed
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                flexShrink={0}
                width={`${100 / featuredOn.length}%`}
                marginX={4}
              >
                <Image
                  src={featuredOn[featuredOn.length - 1].src}
                  alt="featured-on"
                  width={80}
                  height={50}
                  style={{
                    marginRight: "10px", // Adjust spacing between icons as needed
                  }}
                />
              </Box>
              {featuredOn.map((icon, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  flexShrink={0}
                  width={`${100 / featuredOn.length}%`}
                  marginX={4}
                >
                  <Image
                    src={icon.src}
                    alt="featured-on"
                    width={80}
                    height={50}
                    style={{
                      marginRight: "10px", // Adjust spacing between icons as needed
                    }}
                  />
                </Box>
              ))}
              <Box
                display={"flex"}
                flexShrink={0}
                width={`${100 / featuredOn.length}%`}
                marginX={4}
              >
                <Image
                  src={featuredOn[0].src}
                  alt="featured-on"
                  width={80}
                  height={50}
                  style={{
                    marginRight: "10px", // Adjust spacing between icons as needed
                  }}
                />
              </Box>
            </motion.div>
          </div>
        </Grid>
      </Grid> */}
    </>
  );
};

export default CTDedication;
