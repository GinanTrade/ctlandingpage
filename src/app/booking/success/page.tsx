"use client";

import ContentWrapper from "@/components/global/ContentWrapper";
import NavBar from "@/components/global/NavBar";
import { useBookingData } from "@/context/BookingContext";
import { IBookingInformation } from "@/models/Booking";
import {
  Box,
  ButtonBase,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CTButton from "@/components/global/CTButton";
import Footer from "@/components/global/Footer";

import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import axios from "axios";

const BookingSuccessPage = () => {
  const { bookingData, setBookingData } = useBookingData();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const router = useRouter();

  const handleDownloadReceipt = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API}/landing-page/generate-receipt/`;

    const formData = {
      bookingId: "556167b4-2637-43fd-b471-43b6127ab2b3",
    };

    axios
      .post(apiUrl, formData)
      .then((res) => {
        const pdfContent = atob(res.data.pdf_base64);
        handleDownloadFile(pdfContent);
      })
      .catch((res) => {
        // Notification.failed(res.response.data.message);
      });
  };

  const handleDownloadFile = (pdfContent: string) => {
    // Convert the decoded content to a Uint8Array
    const pdfData = new Uint8Array(pdfContent.length);
    for (let i = 0; i < pdfContent.length; i++) {
      pdfData[i] = pdfContent.charCodeAt(i);
    }

    const pdfBlob = new Blob([pdfData], { type: "application/pdf" });

    // Create a download link
    const url = URL.createObjectURL(pdfBlob);

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Receipt.pdf";

    // Click the link to start the download
    link.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
  };

  if (bookingData) {
    return (
      <>
        <NavBar defaultBlack />
        <ContentWrapper noMarginTop>
          <Box
            display="flex"
            height={isHandheldDevice ? "300px" : "400px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3">Booking Successful!</Typography>
          </Box>
          <SummarySection bookingData={bookingData} />
          <Stack
            direction={isHandheldDevice ? "column-reverse" : "row"}
            justifyContent={isHandheldDevice ? "start " : "space-between"}
            spacing={4}
            alignItems={"center"}
            width={"100%"}
            marginTop={8}
            marginBottom={10}
          >
            <ButtonBase onClick={() => router.push("/")}>
              <Box
                display={"flex"}
                justifyContent={"end"}
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
            <CTButton
              variant="secondary"
              onClick={handleDownloadReceipt}
              text="Download Receipt"
            />
          </Stack>
        </ContentWrapper>
        <Footer />
      </>
    );
  } else {
    return <div>...</div>;
  }
};

const SummarySection = (props: { bookingData: IBookingInformation }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Grid container borderTop={1} borderBottom={1} paddingY={3} rowSpacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={3.3} xl={3.3}>
        <Stack spacing={2}>
          <SummaryContent
            title="Booking Number"
            data={props.bookingData.bookingNo}
          />
          <SummaryContent
            title="Outlet"
            data={
              props.bookingData.selectedHotel.hotelName +
              " @ " +
              props.bookingData.selectedHotel.hotelLocation
            }
          />
          <Typography maxWidth={"350px"}>
            {props.bookingData.selectedHotel.hotelDetailedLocation}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
        <Box
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          height={"100%"}
        >
          <Divider
            orientation="vertical"
            sx={{ marginRight: 3, bgcolor: "black" }}
          />
        </Box>
      </Grid>
      {isHandheldDevice && (
        <Grid item xs={12} sm={12} md={12} lg={0} xl={0}>
          <Divider sx={{ bgcolor: "black" }} />
        </Grid>
      )}
      <Grid item xs={12} sm={12} md={12} lg={3.3} xl={3.3}>
        <Stack spacing={2}>
          <SummaryContent
            title="Date"
            data={
              props.bookingData.bookingSchedule.date
                ? format(props.bookingData.bookingSchedule.date, "dd MMMM yyyy")
                : "N/A"
            }
          />
          <SummaryContent
            title="Check-in Time"
            data={
              props.bookingData.bookingSchedule.date
                ? format(props.bookingData.bookingSchedule.date, "h:mm aa")
                : "N/A"
            }
          />
          <SummaryContent
            title="Stay Duration"
            data={props.bookingData.bookingSchedule.duration + " hours"}
          />
        </Stack>
      </Grid>
      <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
        <Box
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          height={"100%"}
        >
          <Divider
            orientation="vertical"
            sx={{ marginRight: 3, bgcolor: "black" }}
          />
        </Box>
      </Grid>
      {isHandheldDevice && (
        <Grid item xs={12} sm={12} md={12} lg={0} xl={0}>
          <Divider sx={{ bgcolor: "black" }} />
        </Grid>
      )}
      <Grid item xs={12} sm={12} md={12} lg={3.3} xl={3.3}>
        <Stack spacing={2}>
          <SummaryContent
            title="Room"
            data={props.bookingData.roomBookings.map(
              (roomBooking) =>
                roomBooking.quantity +
                " x " +
                roomBooking.roomType +
                " " +
                roomBooking.zone
            )}
          />
          <SummaryContent
            title="Total"
            data={"RM" + props.bookingData.payment.debitAmount.toString()}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

const SummaryContent = (props: { title: string; data: string | string[] }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  if (!isHandheldDevice) {
    return (
      <Stack spacing={0.5} width={"100%"}>
        <Typography width={"90%"}>{props.title}</Typography>
        {typeof props.data === "string" ? (
          <Typography variant="h6" fontWeight={700}>
            {props.data}
          </Typography>
        ) : (
          props.data.map((data, index) => (
            <Typography key={index} variant="h6" fontWeight={700}>
              {data}
            </Typography>
          ))
        )}
      </Stack>
    );
  } else {
    return (
      <Stack direction={"row"} spacing={1}>
        <Typography width={"140px"}>{props.title}</Typography>
        {typeof props.data === "string" ? (
          <Typography fontWeight={700}>{props.data}</Typography>
        ) : (
          props.data.map((data, index) => (
            <Typography key={index} fontWeight={700}>
              {data}
            </Typography>
          ))
        )}
      </Stack>
    );
  }
};

export default BookingSuccessPage;
