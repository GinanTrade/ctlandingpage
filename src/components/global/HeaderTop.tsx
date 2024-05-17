import { Stack, Typography, useMediaQuery } from "@mui/material";

const HeaderTop = (props: {
  title: string;
  children: React.ReactNode;
  marginBottom?: number;
  paddingBottom?: number;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? (
    <DesktopView
      title={props.title}
      marginBottom={props.marginBottom}
      paddingBottom={props.paddingBottom}
    >
      {props.children}
    </DesktopView>
  ) : (
    <HandheldView title={props.title} marginBottom={props.marginBottom}>
      {props.children}
    </HandheldView>
  );
};

const DesktopView = (props: {
  title: string;
  children: React.ReactNode;
  marginBottom?: number;
  paddingBottom?: number;
}) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"flex-end"}
      borderBottom={1}
      marginBottom={props.marginBottom ? props.marginBottom : 8}
      paddingBottom={props.paddingBottom}
    >
      <Typography variant="h3" width={"400px"}>
        {props.title}
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        marginBottom={1}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

const HandheldView = (props: {
  title: string;
  children: React.ReactNode;
  marginBottom?: number;
}) => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      justifyContent={"space-between"}
      borderBottom={1}
      marginBottom={props.marginBottom ? props.marginBottom : 6}
      paddingBottom={2}
      spacing={4}
    >
      <Typography variant="h3">{props.title}</Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        marginBottom={1}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

export default HeaderTop;
