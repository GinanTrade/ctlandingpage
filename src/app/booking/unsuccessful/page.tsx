"use client";

import ContentWrapper from "@/components/global/ContentWrapper";
import NavBar from "@/components/global/NavBar";
import { Error } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useRouter } from "next/navigation";
import Footer from "@/components/global/Footer";

const textContent = [
  "There is error while booking the hotel, it can be:",
  "Please make sure you have resolved issues above before making another booking.",
];

const reasons = [
  "the internet connection during the payment process.",
  "insufficient amount in the selected payment method.",
];

const BookingUnsuccessfulPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <NavBar defaultBlack />
      <ContentWrapper noMarginTop>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"800px"}
        >
          <Typography variant="h3" marginY={6}>
            Booking Unsuccessful
          </Typography>
          <Divider
            sx={{
              width: isHandheldDevice ? "100%" : "700px",
              bgcolor: "black",
            }}
          />
          <Stack spacing={2} marginTop={4} alignItems={"center"}>
            <Error sx={{ color: theme.palette.CtColorScheme.pink300 }} />
            <Typography fontWeight={700}>{textContent[0]}</Typography>
            <ul>
              {reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
            <Typography textAlign={"center"}>{textContent[1]}</Typography>
          </Stack>
          <ButtonBase onClick={() => router.push("/")} sx={{ marginTop: 6 }}>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Image
                src={CTRight}
                alt="CT-Right-Up"
                style={{
                  color: "white",
                  width: "60px",
                  transform: "rotate(180deg)",
                  marginRight: 2,
                }}
              />
              <Typography variant="h4">Back to Home</Typography>
            </Box>
          </ButtonBase>
        </Box>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default BookingUnsuccessfulPage;
