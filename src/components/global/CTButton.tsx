import {
  Box,
  ButtonBase,
  Collapse,
  Typography,
  keyframes,
  useTheme,
} from "@mui/material";
import { useState } from "react";

type ButtonVariant = "primary" | "secondary";

const CTButton = (props: {
  text: string;
  onClick: VoidFunction;
  variant: ButtonVariant;
}) => {
  const theme = useTheme();

  const [hovered, setHovered] = useState(true);

  const handleToggle = () => {
    setHovered(!hovered);
  };

  return (
    <ButtonBase
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
      onClick={props.onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "2.5rem",
      }}
    >
      <Collapse
        in={!hovered}
        timeout={300}
        orientation="horizontal"
        sx={{ height: "100%" }}
      >
        <Box
          display="flex"
          height="100%"
          justifyContent="center"
          alignItems="center"
          paddingX={3}
          sx={{
            position: "relative",
            bgcolor:
              props.variant === "primary"
                ? "transparent"
                : theme.palette.CtColorScheme.neon200,
            border: "1px solid", // Adjust border as needed
            borderColor: theme.palette.CtColorScheme.neon200,
          }}
        >
          <Typography
            variant="button"
            color={props.variant === "primary" ? "white" : "black"}
            noWrap
          >
            {props.text}
          </Typography>
        </Box>
      </Collapse>
      <Collapse
        in={hovered}
        timeout={300}
        orientation="horizontal"
        sx={{ height: "100%" }}
      >
        <Box
          display="flex"
          height="100%"
          justifyContent="center"
          alignItems="center"
          paddingX={3}
          border={0}
          sx={{
            position: "relative",
            bgcolor:
              props.variant === "primary"
                ? theme.palette.CtColorScheme.neon200
                : "transparent",
            border: "1px solid", // Adjust border as needed
            borderColor: theme.palette.CtColorScheme.neon200,
          }}
        >
          <Typography variant="button" color={"black"} noWrap>
            {props.text}
          </Typography>
        </Box>
      </Collapse>
    </ButtonBase>
  );
};

export default CTButton;
