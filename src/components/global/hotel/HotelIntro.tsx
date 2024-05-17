import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Image from "next/image";
import CTButton from "../CTButton";
import { useRouter } from "next/navigation";

export interface IBreadCrumbs {
  name: string;
  url: string;
}

const HotelIntro = (props: {
  breadCrumbsContent: IBreadCrumbs[];
  textContent: string;
  images: any[];
  buttonUrl: string;
  subtitle?: React.ReactNode;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? (
    <DesktopView {...props} />
  ) : (
    <HandheldView {...props} />
  );
};

const DesktopView = (props: {
  breadCrumbsContent: IBreadCrumbs[];
  textContent: string;
  images: any[];
  buttonUrl: string;
  subtitle?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingY={3}
      position={"relative"}
    >
      <Breadcrumbs
        separator={<KeyboardArrowRightIcon fontSize="small" />}
        sx={{ paddingX: 7 }}
      >
        {props.breadCrumbsContent.map((content, index) => {
          return index !== props.breadCrumbsContent.length - 1 ? (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={content.url}
            >
              {content.name}
            </Link>
          ) : (
            <Typography key={index}>{content.name}</Typography>
          );
        })}
      </Breadcrumbs>
      <Box
        display={"flex"}
        width={"900px"}
        flexDirection={"column"}
        marginTop={10}
        paddingX={7}
        position={"absolute"}
      >
        <Typography variant="h3">{props.textContent}</Typography>
        {props.subtitle && props.subtitle}
        <Box display={"flex"} marginTop={10}>
          <CTButton
            onClick={() => router.push(props.buttonUrl)}
            text="BOOK NOW"
            variant="secondary"
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Box height={"1000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 100,
            }}
          >
            <Image
              src={props.images[0]}
              alt="airside-display-1"
              style={{ height: "80vh", width: "100%" }}
            />
          </div>
        </Box>
        <Box height={"2000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 100,
            }}
          >
            <Image
              src={props.images[1]}
              alt="airside-display-1"
              style={{ height: "80vh", width: "100%" }}
            />
          </div>
        </Box>
        <Box height={"3000px"} width={"35%"} paddingX={7} marginTop={10}>
          <div
            style={{
              position: "sticky",
              top: 100,
            }}
          >
            <Image
              src={props.images[2]}
              alt="airside-display-1"
              style={{ height: "80vh", width: "100%" }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

const HandheldView = (props: {
  breadCrumbsContent: IBreadCrumbs[];
  textContent: string;
  images: any[];
  buttonUrl: string;
  subtitle?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingY={3}
      position={"relative"}
    >
      <Breadcrumbs
        separator={<KeyboardArrowRightIcon fontSize="small" />}
        sx={{ paddingX: 3 }}
      >
        {props.breadCrumbsContent.map((content, index) => {
          return index !== props.breadCrumbsContent.length - 1 ? (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={content.url}
            >
              {content.name}
            </Link>
          ) : (
            <Typography key={index}>{content.name}</Typography>
          );
        })}
      </Breadcrumbs>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        marginTop={10}
        paddingX={3}
      >
        <Typography variant="h3">{props.textContent}</Typography>
        {props.subtitle && props.subtitle}
        <Box display={"flex"} marginTop={10}>
          <CTButton
            onClick={() => router.push(props.buttonUrl)}
            text="BOOK NOW"
            variant="secondary"
          />
        </Box>
      </Box>
      <Stack paddingX={2} spacing={5} marginTop={"200px"}>
        <Image
          src={props.images[0]}
          alt="airside-display-1"
          style={{ height: "600px", width: "100%" }}
        />
        <Image
          src={props.images[1]}
          alt="airside-display-1"
          style={{ height: "600px", width: "100%" }}
        />
        <Image
          src={props.images[2]}
          alt="airside-display-1"
          style={{ height: "600px", width: "100%" }}
        />
      </Stack>
    </Box>
  );
};

export default HotelIntro;
