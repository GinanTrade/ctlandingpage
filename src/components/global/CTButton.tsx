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
            clipPath:
              "polygon(5% 0%, 95% 0%, 100% 15%, 100% 90%, 95% 100%, 5% 100%, 0% 85%, 0% 15%);",
            transition: "clip-path 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "1px solid", // Adjust border as needed
              borderColor: theme.palette.CtColorScheme.neon200,
              clipPath:
                "polygon(5% 0%, 95% 0%, 100% 15%, 100% 90%, 95% 100%, 5% 100%, 0% 85%, 0% 15%);",
            },
          }}
        >
          <Typography variant="button" color={"white"} noWrap>
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
            clipPath:
              "polygon(5% 0%, 95% 0%, 100% 15%, 100% 90%, 95% 100%, 5% 100%, 0% 85%, 0% 15%);",
            transition: "clip-path 0.3s ease",
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
