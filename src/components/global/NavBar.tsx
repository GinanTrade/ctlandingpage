import {
  Box,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import OpenDrawerIcon from "../../assets/icons/general/icon-menu.svg";
import CTLogo from "../../assets/icons/general/Logo-CT.svg";
import CTLogoMobile from "../../assets/icons/general/LogoPrimary.svg";
import AccountIcon from "../../assets/icons/general/icon-account.svg";
import CTButton from "./CTButton";
import { useRouter } from "next/navigation";
import CustomDrawer from "./CustomDrawer";

const NavBar = (props: { defaultBlack?: boolean }) => {
  const router = useRouter();
  const theme = useTheme();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const [scrollTrigger, setScrollTrigger] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / viewportHeight) * 100;

      if (scrollPercentage >= 90) {
        setScrollTrigger(true);
      } else {
        setScrollTrigger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  return (
    <>
      <CustomDrawer open={openDrawer} handleClose={handleCloseDrawer} />
      {!isHandheldDevice ? (
        <DesktopView
          handleOpenDrawer={handleOpenDrawer}
          scrollTrigger={scrollTrigger}
          defaultBlack={props.defaultBlack}
        />
      ) : (
        <HandheldView
          handleOpenDrawer={handleOpenDrawer}
          scrollTrigger={scrollTrigger}
          defaultBlack={props.defaultBlack}
        />
      )}
    </>
  );
};

const DesktopView = (props: {
  defaultBlack?: boolean;
  scrollTrigger: boolean;
  handleOpenDrawer: VoidFunction;
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"5rem"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      paddingY={2}
      paddingX={7}
      position={"fixed"}
      zIndex={2}
      bgcolor={
        props.defaultBlack || props.scrollTrigger
          ? theme.palette.CtColorScheme.black900
          : ""
      }
    >
      <Stack direction={"row"} spacing={3} width={"33%"}>
        <Button onClick={props.handleOpenDrawer} sx={{ boxShadow: "none" }}>
          <Image
            src={OpenDrawerIcon}
            alt="drawer-open"
            width={30}
            height={30}
          />
        </Button>

        <Button onClick={() => router.push("/klia-1")}>KLIA Terminal 1</Button>
        <Button onClick={() => router.push("/klia-2")}>KLIA Terminal 2</Button>
      </Stack>
      <Box display={"flex"} width={"33%"} justifyContent={"center"}>
        <Button onClick={() => router.push("/")}>
          <Image src={CTLogo} alt="CapsuleTransit-Logo" />
        </Button>
      </Box>
      <Stack
        direction={"row"}
        spacing={3}
        width={"33%"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Image src={AccountIcon} alt="Capsule-Account-Icon" />
        <CTButton
          onClick={() => router.push("/booking")}
          text="BOOK YOUR STAY"
          variant="primary"
        />
      </Stack>
    </Box>
  );
};

const HandheldView = (props: {
  defaultBlack?: boolean;
  scrollTrigger: boolean;
  handleOpenDrawer: VoidFunction;
}) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"5rem"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      paddingY={2}
      paddingX={3}
      position={"fixed"}
      zIndex={2}
      bgcolor={
        props.defaultBlack || props.scrollTrigger
          ? theme.palette.CtColorScheme.black900
          : ""
      }
    >
      <Stack direction={"row"} spacing={3} width={"33%"}>
        <IconButton onClick={props.handleOpenDrawer}>
          <Image
            src={OpenDrawerIcon}
            alt="drawer-open"
            width={30}
            height={30}
          />
        </IconButton>
      </Stack>
      <Box display={"flex"} width={"33%"} justifyContent={"center"}>
        <IconButton onClick={() => router.push("/")}>
          <Image src={CTLogoMobile} alt="CapsuleTransit-Logo" />
        </IconButton>
      </Box>
      <Stack
        direction={"row"}
        spacing={3}
        width={"33%"}
        justifyContent={"flex-end"}
      >
        <CTButton
          onClick={() => router.push("/booking")}
          text="BOOK"
          variant="primary"
        />
      </Stack>
    </Box>
  );
};

export default NavBar;
