import { Box, Button, Icon, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

import OpenDrawerIcon from "../../assets/icons/general/icon-menu.svg";
import CTLogo from "../../assets/icons/general/Logo-CT.svg";
import AccountIcon from "../../assets/icons/general/icon-account.svg";
import CTButton from "./CTButton";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const handleRouting = () => {
    router.push("/klia-2");
  };
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
    >
      <Stack direction={"row"} spacing={3} width={"33%"}>
        <IconButton>
          <Image
            src={OpenDrawerIcon}
            alt="drawer-open"
            width={30}
            height={30}
          />
        </IconButton>
        <Button onClick={() => router.push("/klia-2")}>KLIA Terminal 1</Button>
        <Button onClick={() => router.push("/klia-2")}>KLIA Terminal 2</Button>
      </Stack>
      <Box display={"flex"} width={"33%"} justifyContent={"center"}>
        <IconButton onClick={() => router.push("/")}>
          <Image src={CTLogo} alt="CapsuleTransit-Logo" />
        </IconButton>
      </Box>
      <Stack direction={"row"} spacing={3} width={"33%"} justifyContent={"end"}>
        <Image src={AccountIcon} alt="Capsule-Account-Icon" />
        <CTButton onClick={() => {}} text="BOOK YOUR STAY" variant="primary" />
      </Stack>
    </Box>
  );
};

export default NavBar;
