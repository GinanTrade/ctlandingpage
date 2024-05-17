import {
  IBookingLocation,
  IBookingSchedule,
  IPaymentInfo,
  IRoomBooking,
} from "@/models/Booking";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { format } from "date-fns";
import CTButton from "../global/CTButton";
import Image from "next/image";
import { displayThousands, matchDurationEnum } from "@/utils/functions";
import { DurationIcons } from "@/constant/Icons";
import { Add } from "@mui/icons-material";
import {
  airsideFacilities,
  landsideFacilities,
  sleepLoungeFacilities,
} from "./FacilitiesList";
import { useState } from "react";

import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import PaymentOverview from "./PaymentOverview";

const contentWidth = "900px";
const mobileWidth = "100%";

const SummarySection = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
  serviceChargePercentage: string;
  handleChangeStepper: (value: number) => void;
  handleAddPromotion: (promotionName: string, promotionAmount: string) => void;
}) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingX={3}
      >
        <Box marginY={10}>
          <Typography variant="h4">Summary</Typography>
        </Box>
        <SummaryHeader {...props} />
        <RoomBookingSection {...props} />
        <FacilitiesSection {...props} />
        <AddRoomsSection {...props} />
        <PaymentOverview {...props} />
        <PaymentPolicySection />
        <ImportantInformationSection />
      </Box>
      <ContinueSection {...props} />
    </>
  );
};

const SummaryHeader = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box display={"flex"} borderTop={1} paddingTop={2} paddingBottom={7}>
      <Grid
        container
        rowSpacing={2}
        width={isHandheldDevice ? mobileWidth : contentWidth}
      >
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Stack spacing={1} width={isHandheldDevice ? "100%" : "100%"}>
            <SummaryContent
              title="Outlet"
              data={
                props.selectedHotel.hotelName +
                " @ " +
                props.selectedHotel.hotelLocation
              }
            />
            <Stack direction={"row"}>
              {isHandheldDevice && <Box width={"140px"} />}
              <Typography width={"80%"}>
                {props.selectedHotel.hotelPhoneNumber}
              </Typography>
            </Stack>
            <Stack direction={"row"}>
              {isHandheldDevice && <Box width={"140px"} />}
              <Typography width={"80%"}>
                {props.selectedHotel.hotelDetailedLocation}
              </Typography>
            </Stack>
            {props.selectedHotel.hotelName === "Airside" && (
              <Typography color={theme.palette.CtColorScheme.pink300}>
                <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                  <li>
                    Make sure you have your boarding pass and Visa or related
                    documents to enter the restricted area.
                  </li>
                </ul>
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <Divider orientation="vertical" sx={{ width: "1px" }} />
          </Box>
        </Grid>
        {isHandheldDevice && (
          <Grid item xs={12} sm={12} md={12} lg={0} xl={0}>
            <Divider sx={{ bgcolor: "black" }} />
          </Grid>
        )}

        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Stack spacing={2}>
            <SummaryContent
              title="Date"
              data={
                props.bookingSchedule.date
                  ? format(props.bookingSchedule.date, "dd MMMM yyyy")
                  : "N/A"
              }
            />
            <SummaryContent
              title="Check-in Time"
              data={
                props.bookingSchedule.date
                  ? format(props.bookingSchedule.date, "h:mm aa")
                  : "N/A"
              }
            />
            <SummaryContent
              title="Stay Duration"
              data={
                props.bookingSchedule.duration
                  ? props.bookingSchedule.duration + " hours"
                  : "N/A"
              }
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <CTButton onClick={() => {}} text="Change" variant="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryContent = (props: { title: string; data: string }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  if (!isHandheldDevice) {
    return (
      <Stack spacing={0.5} width={"100%"}>
        <Typography width={"90%"}>{props.title}</Typography>
        <Typography fontWeight={700}>{props.data}</Typography>
      </Stack>
    );
  } else {
    return (
      <Stack direction={"row"} spacing={1}>
        <Typography width={"140px"}>{props.title}</Typography>
        <Typography fontWeight={700}>{props.data}</Typography>
      </Stack>
    );
  }
};
const RoomBookingSection = (props: {
  roomBookings: IRoomBooking[];
  bookingSchedule: IBookingSchedule;
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box width={isHandheldDevice ? mobileWidth : contentWidth} borderTop={1}>
      {props.roomBookings.map((roomBooking, index) => (
        <Grid
          container
          key={index}
          width={"100%"}
          borderBottom={1}
          paddingY={3}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box
              width={isHandheldDevice ? "100%" : "300px"}
              height={"250px"}
              bgcolor={"grey"}
            >
              {roomBooking.imageUrl && (
                <img
                  src={roomBooking.imageUrl}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Stack
              justifyContent={"space-between"}
              height={"100%"}
              marginLeft={isHandheldDevice ? 0 : 2}
            >
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6" fontWeight={700}>
                    {roomBooking.roomType} {`(${roomBooking.zone})`}
                  </Typography>
                  <Button
                    onClick={() => {
                      props.handleChangeStepper(3);
                    }}
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={1}
                  marginTop={isHandheldDevice ? 0 : 1}
                  marginBottom={isHandheldDevice ? 1 : 0}
                >
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {roomBooking.bedType}
                  </Typography>
                  <Typography color={"primary"}>/</Typography>
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {roomBooking.capacity}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
              >
                <Stack direction={"row"} alignItems={"flex-end"} spacing={1}>
                  <Typography variant="h5">RM{roomBooking.price}</Typography>
                  <Typography variant="subtitle2">
                    for {props.bookingSchedule.duration}h
                  </Typography>
                  {props.bookingSchedule.duration &&
                    DurationIcons.duration(
                      matchDurationEnum(props.bookingSchedule.duration)
                    ) !== "" && (
                      <Stack direction={"row"} alignItems={"center"}>
                        <Image
                          src={DurationIcons.duration(
                            matchDurationEnum(props.bookingSchedule.duration)
                          )}
                          alt="feature"
                          style={{ marginBottom: 3 }}
                        />
                      </Stack>
                    )}
                </Stack>
                <Stack direction={"row"}>
                  <Typography>Qty: {roomBooking.quantity}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

const FacilitiesSection = (props: { selectedHotel: IBookingLocation }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const data =
    props.selectedHotel.hotelName === "Airside"
      ? airsideFacilities
      : props.selectedHotel.hotelName === "Landside"
      ? landsideFacilities
      : props.selectedHotel.hotelName === "Sleep Lounge"
      ? sleepLoungeFacilities
      : props.selectedHotel.hotelName === "MAX"
      ? []
      : [];

  return (
    <Box width={isHandheldDevice ? mobileWidth : contentWidth} paddingY={2}>
      <Typography variant="h6" fontWeight={700} marginBottom={1}>
        Included
      </Typography>
      <Grid container spacing={1}>
        {data.map((data, index) => (
          <Grid item xs={6} key={index}>
            <li
              style={{
                listStyle: "none",
                fontSize: isHandheldDevice ? "12px" : "14px",
              }}
            >
              ✓ {data}
            </li>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const AddRoomsSection = (props: {
  handleChangeStepper: (value: number) => void;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      display={"flex"}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      justifyContent={"center"}
      borderTop={1}
      paddingY={3}
      height={"200px"}
    >
      <Button
        onClick={() => props.handleChangeStepper(3)}
        sx={{ height: "50px", color: "black" }}
      >
        Add Rooms <Add />
      </Button>
    </Box>
  );
};

const paymentPolicyText =
  "Full payment will be charged once your booking is confirmed. There are no additional fees for credit or debit cards and all prices shown are inclusive of local taxes. Discounted and promotional rates are non-refundable. Any amendments or cancellation bookings with discounted or promotional rates will be charged in full. In the case of modification of check-in dates, cancellation or no-show will, 100% of the room rate including any other applicable charges and taxes will be charged to your credit/debit card.";

const PaymentPolicySection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      marginTop={isHandheldDevice ? 4 : "130px"}
      alignItems={"start"}
    >
      <Typography fontWeight={700}>Payment and Cancellation Policy</Typography>
      <Typography>{paymentPolicyText}</Typography>
    </Stack>
  );
};

const importantInformationText =
  "Please make sure that the hotel and location you have selected matches the area of the airport your flight will depart from. If you are entering Malaysia or in transit to another destination, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian immigration and access our hotel. The hotel will not be liable to any cost and will not refund any charges if the wrong booking have been made. If you are departing from Malaysia, you can easily access the hotel as It is located before immigration and customs checkpoint. If you are landing at KLIA1, proceed through immigration, customs checkpoints and baggage reclaim, embark either the free shuttle bus service or ERL (Train) to the South Terminal and follow the directions to our hotel. Please log on to https://www.imi.gov.my/index.php/en/main-services/visa/ should you require a VISA to enter Malaysia and to exit the airport departure hall to access CapsuleTransit.";

const ImportantInformationSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      marginTop={3}
      alignItems={"start"}
    >
      <Typography fontWeight={700}>Important Information</Typography>
      <Typography>{importantInformationText}</Typography>
    </Stack>
  );
};

const ContinueSection = (props: {
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderTop={1}
      width={"100%"}
      height={"80px"}
      zIndex={10}
      bottom={0}
      bgcolor={theme.palette.primary.main}
      paddingX={7}
      marginTop={10}
    >
      <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
        <Button
          onClick={() => {
            props.handleChangeStepper(5);
            window.scrollTo(0, 0);
          }}
          sx={{
            padding: 0,
          }}
        >
          <Typography variant="h4">All Good, Continue</Typography>
          <Image
            src={CTRight}
            alt="CT-Right-Up"
            style={{
              color: "white",
              width: "60px",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default SummarySection;
