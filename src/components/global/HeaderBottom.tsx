import { Box, Grid, Stack, useMediaQuery } from "@mui/material";

const HeaderBottom = (props: {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return !isHandheldDevice ? (
    <DesktopView
      leftComponent={props.leftComponent}
      middleComponent={props.middleComponent}
      rightComponent={props.rightComponent}
    />
  ) : (
    <HandheldView
      leftComponent={props.leftComponent}
      middleComponent={props.middleComponent}
      rightComponent={props.rightComponent}
    />
  );
};

const DesktopView = (props: {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}) => {
  return (
    <Grid container borderTop={1} height={"20px"} paddingY={2}>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={"20px"}>
        {props.leftComponent}
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={"20px"}>
        {props.middleComponent}
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        height={"20px"}
        justifyContent={"flex-end"}
      >
        {props.rightComponent}
      </Grid>
    </Grid>
  );
};

const HandheldView = (props: {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}) => {
  return (
    <Grid container borderTop={1} height={"20px"} paddingY={2}>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={"20px"}>
        {props.leftComponent}
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={4} xl={4} height={"20px"}>
        <Stack spacing={1} width={"100%"} alignItems={"flex-end"}>
          {props.middleComponent}
          {props.rightComponent}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HeaderBottom;
