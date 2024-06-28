import {
  Box,
  Button,
  Divider,
  Drawer,
  Fade,
  Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Instagram } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import CloseIcon from "@/assets/icons/general/icon-menu-close.svg";
import CTIcon from "@/assets/icons/general/LogoPrimary.svg";

import DrawerAirside from "@/assets/images/drawer/menu-airside_2x.png";
import DrawerLandside from "@/assets/images/drawer/menu-landside_2x.png";
import DrawerMAX from "@/assets/images/drawer/menu-max_2x.png";
import DrawerSleepLounge from "@/assets/images/drawer/menu-sleeplounge_2x.png";
import FacebookIcon from "@/assets/icons/social-media/icon-facebook.svg";
import InstagramIcon from "@/assets/icons/social-media/icon-instagram.svg";
import LinkedInIcon from "@/assets/icons/social-media/icon-linkedin.svg";
import TiktokIcon from "@/assets/icons/social-media/icon-tiktok.svg";

const hotels = [
  {
    title: "Hotel @ KLIA T1",
    hotels: [{ title: "Sleep Lounge", url: "/klia-1/sleep-lounge" }],
  },
  {
    title: "Hotel @ KLIA T2",
    hotels: [
      { title: "Airside", url: "/klia-2/airside" },
      { title: "Landside", url: "/klia-2/landside" },
      { title: "MAX", url: "/klia-2/max" },
    ],
  },
];

const rightSection = {
  title: "Discover",
  links: [
    { title: "About Us", url: "/about-us" },
    { title: "Capsule Highlight", url: "/highlight" },
    { title: "Our Commitment", url: "/our-commitment" },
    { title: "Newsroom", url: "/news" },
    { title: "divider", url: "/" },
    { title: "FAQ", url: "/faq" },
    { title: "CSR", url: "/csr" },
    { title: "Best Rate Guarantee", url: "/" },
    { title: "Social Media", url: "/" },
  ],
};

const socialMedias = [
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/capsule.transit/",
  },
  {
    icon: TiktokIcon,
    link: "https://www.tiktok.com/@capsuletransit",
  },
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/capsuletransit/",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/capsule-hotel-group/?originalSubdomain=my",
  },
];

const CustomDrawer = (props: { open: boolean; handleClose: VoidFunction }) => {
  const theme = useTheme();
  const router = useRouter();

  const [hovered, setHovered] = useState("");

  const handleHovered = (name: string) => {
    setHovered(name);
  };

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return (
    <Drawer
      open={props.open}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        },
      }}
      PaperProps={{ style: { width: "100vw" } }} // Use style instead of width
      sx={{ width: "100vw" }} // Ensure Drawer takes 100vw
    >
      {isHandheldDevice ? (
        <HandheldDrawer handleClose={props.handleClose} />
      ) : (
        <DesktopDrawer
          handleClose={props.handleClose}
          handleHovered={handleHovered}
          hovered={hovered}
        />
      )}
    </Drawer>
  );
};

const DesktopDrawer = (props: {
  hovered: string;
  handleClose: VoidFunction;
  handleHovered: (name: string) => void;
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      role="presentation"
      width={"100%"}
      height={"100%"}
      paddingY={2}
      paddingX={7}
      bgcolor={theme.palette.CtColorScheme.blue800}
      overflow={"hidden"}
    >
      <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
        <IconButton onClick={props.handleClose}>
          <Image src={CloseIcon} alt="close-icon" width={35} height={35} />
        </IconButton>
      </Box>
      <Grid container alignItems={"center"} height={"100%"}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {hotels.map((terminal, index) => (
            <Stack key={index} direction={"column"}>
              <Typography
                color={"primary"}
                fontWeight={600}
                fontSize={"20px"}
                marginY={2}
              >
                {terminal.title}
              </Typography>
              {terminal.hotels.map((hotel, index) => (
                <Button
                  key={index}
                  onClick={() => router.push(hotel.url)}
                  sx={{ padding: 0, justifyContent: "start" }}
                >
                  <Typography
                    variant="body2"
                    color={theme.palette.CtColorScheme.white}
                    textAlign={"start"}
                    onMouseEnter={() => props.handleHovered(hotel.title)}
                    onMouseLeave={() => props.handleHovered("")}
                  >
                    {hotel.title}
                  </Typography>
                </Button>
              ))}
            </Stack>
          ))}
        </Grid>
        <Grid item xs={0} sm={0} md={4} lg={4} xl={4}>
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position="relative"
          >
            <Image
              src={CTIcon}
              alt="capsule-transit"
              style={{ width: "70%", height: "auto", zIndex: 0 }}
            />
            <Fade
              in={props.hovered === "Airside"}
              mountOnEnter
              unmountOnExit
              style={{ position: "absolute" }}
            >
              <Image
                src={DrawerAirside}
                alt="capsule-transit"
                style={{ width: "70%", height: "auto", zIndex: 0 }}
              />
            </Fade>
            <Fade
              in={props.hovered === "Landside"}
              mountOnEnter
              unmountOnExit
              style={{ position: "absolute" }}
            >
              <Image
                src={DrawerLandside}
                alt="capsule-transit"
                style={{ width: "70%", height: "auto", zIndex: 0 }}
              />
            </Fade>
            <Fade
              in={props.hovered === "MAX"}
              mountOnEnter
              unmountOnExit
              style={{ position: "absolute" }}
            >
              <Image
                src={DrawerMAX}
                alt="capsule-transit"
                style={{ width: "70%", height: "auto", zIndex: 0 }}
              />
            </Fade>
            <Fade
              in={props.hovered === "Sleep Lounge"}
              mountOnEnter
              unmountOnExit
              style={{ position: "absolute" }}
            >
              <Image
                src={DrawerSleepLounge}
                alt="capsule-transit"
                style={{ width: "70%", height: "auto", zIndex: 0 }}
              />
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Stack
            direction={"row"}
            width={"100%"}
            height={"100%"}
            spacing={5}
            paddingLeft={"150px"}
          >
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                backgroundColor: theme.palette.CtColorScheme.neon200,
              }}
            />
            <Grid container direction={"row"}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                marginBottom={1}
              >
                <Typography
                  variant="button"
                  color={"primary"}
                  fontSize={"20px"}
                >
                  {rightSection.title}
                </Typography>
              </Grid>
              {rightSection.links.map((link, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  sm={6}
                  md={12}
                  lg={12}
                  xl={12}
                  marginY={1}
                >
                  {link.title === "divider" ? (
                    <Divider
                      sx={{
                        width: "30px",
                        bgcolor: theme.palette.CtColorScheme.grey400,
                        marginTop: 1,
                      }}
                    />
                  ) : link.title === "Social Media" ? (
                    <Stack
                      key={index}
                      direction={"row"}
                      spacing={3}
                      paddingTop={1}
                    >
                      {socialMedias.map((socialMedia, index1) => (
                        <IconButton
                          key={index1}
                          onClick={() => router.push(socialMedia.link)}
                          sx={{ padding: 0 }}
                        >
                          <Image
                            src={socialMedia.icon}
                            alt={socialMedia.link}
                          />
                        </IconButton>
                      ))}
                    </Stack>
                  ) : (
                    <Button
                      onClick={() => router.push(link.url)}
                      sx={{
                        padding: 0,
                        justifyContent: "flex-start",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 500,
                      }}
                    >
                      {link.title}
                    </Button>
                  )}
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

const HandheldDrawer = (props: { handleClose: VoidFunction }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      role="presentation"
      width={"100%"}
      height={"100%"}
      paddingY={2}
      paddingX={3}
      bgcolor={theme.palette.CtColorScheme.blue800}
      overflow={"hidden"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Image src={CTIcon} alt="close-icon" />
        <IconButton onClick={props.handleClose} sx={{ alignSelf: "flex-end" }}>
          <Image src={CloseIcon} alt="close-icon" />
        </IconButton>
      </Stack>
      <Grid container rowSpacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {hotels.map((terminal, index) => (
            <Stack key={index} direction={"column"}>
              <Typography
                color={"primary"}
                fontWeight={600}
                fontSize={"20px"}
                marginY={2}
              >
                {terminal.title}
              </Typography>
              {terminal.hotels.map((hotel, index) => (
                <Button
                  key={index}
                  onClick={() => router.push(hotel.url)}
                  sx={{ padding: 0, justifyContent: "start" }}
                >
                  <Typography
                    variant="body2"
                    color={theme.palette.CtColorScheme.white}
                  >
                    {hotel.title}
                  </Typography>
                </Button>
              ))}
            </Stack>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Stack
            direction={"column"}
            width={"100%"}
            height={"100%"}
            spacing={3}
          >
            <Divider
              variant="middle"
              flexItem
              sx={{
                backgroundColor: theme.palette.CtColorScheme.neon200,
              }}
            />
            <Grid container direction={"row"}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                marginBottom={1}
              >
                <Typography
                  variant="button"
                  color={"primary"}
                  fontSize={"20px"}
                >
                  {rightSection.title}
                </Typography>
              </Grid>
              {rightSection.links
                .filter((link) => link.title !== "divider")
                .map((link, index) => (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={6}
                    md={12}
                    lg={12}
                    xl={12}
                    marginY={1}
                  >
                    {link.title === "Instagram" ? (
                      <IconButton
                        onClick={() => router.push(link.url)}
                        sx={{ padding: 0, color: "white" }}
                      >
                        <Instagram />
                      </IconButton>
                    ) : (
                      <Button
                        onClick={() => router.push(link.url)}
                        sx={{
                          padding: 0,
                          justifyContent: "flex-start",
                          color: "white",
                          fontSize: "20px",
                          fontWeight: 500,
                        }}
                      >
                        {link.title}
                      </Button>
                    )}
                  </Grid>
                ))}
            </Grid>
            <Divider
              variant="middle"
              flexItem
              sx={{
                backgroundColor: theme.palette.CtColorScheme.neon200,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomDrawer;
