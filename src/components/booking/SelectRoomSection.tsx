import {
  IBookingLocation,
  IBookingSchedule,
  IHotelRooms,
  IRoomBooking,
} from "@/models/Booking";
import {
  Box,
  Button,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import { format } from "date-fns";
import CTButton from "../global/CTButton";
import Image from "next/image";
import { DurationIcons } from "@/constant/Icons";
import { featuresEnum, lotNumberEnum } from "@/constant/Enums";
import { Add, Remove } from "@mui/icons-material";
import {
  displayThousands,
  getLotNumber,
  matchDurationEnum,
  predictBedType,
} from "@/utils/functions";

import FemaleSingleImage from "../landside/images/room-single-female@2x.jpg";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useEffect, useState } from "react";
import BASE_API from "@/constant/api";

const title = "Select Your Room";

const sampleHotel = [
  {
    image: FemaleSingleImage,
    name: "Female Single",
    zone: "Female-Only Zone",
    bedType: "Single Bed",
    capacity: "1 Adult",
    price: 155,
  },
  {
    image: FemaleSingleImage,
    name: "Male Single",
    zone: "Male-Only Zone",
    bedType: "Single Bed",
    capacity: "1 Adult",
    price: 155,
  },
  {
    image: FemaleSingleImage,
    name: "Queen",
    bedType: "Queen Bed",
    capacity: "2 Adult",
    price: 185,
  },
];

interface IApiResponseRoom {
  roomTypeName: string;
  roomZoneNames: string;
  maxPax: string;
  price: number;
  availableCount: number;
}

const SelectRoomSection = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  handleAddRoomBooking: (value: IRoomBooking) => void;
  handleDeductRoomBooking: (value: IRoomBooking) => void;
  handleChangeStepper: (value: number) => void;
}) => {
  return (
    <>
      <ContentWrapper noMarginTop>
        <BookingSummary {...props} />
        <RoomTypesContent {...props} />
      </ContentWrapper>
      {props.roomBookings.length > 0 && <BookNowButton {...props} />}
    </>
  );
};

const BookingSummary = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
}) => {
  return (
    <Box
      display={"flex"}
      paddingY={3}
      borderTop={1}
      borderBottom={1}
      marginTop={10}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <SummaryContent
            title="Outlet"
            data={`${props.selectedHotel.hotelName} @ ${props.selectedHotel.hotelLocation}`}
          />
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
          <Divider orientation="vertical" sx={{ width: "1px" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Date"
            data={
              props.bookingSchedule.date
                ? format(props.bookingSchedule.date, "dd MMMM yyyy")
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Check-in Time"
            data={
              props.bookingSchedule.date
                ? format(props.bookingSchedule.date, "h:mm aa")
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <SummaryContent
            title="Stay Duration"
            data={
              props.bookingSchedule.duration
                ? props.bookingSchedule.duration + " hours"
                : "N/A"
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Box
            display={"flex"}
            height={"100%"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <CTButton onClick={() => {}} text="Change" variant="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const SummaryContent = (props: { title: string; data: string }) => {
  return (
    <Stack spacing={1}>
      <Typography>{props.title}</Typography>
      <Typography fontWeight={700}>{props.data}</Typography>
    </Stack>
  );
};

const RoomTypesContent = (props: {
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  selectedHotel: IBookingLocation;
  handleAddRoomBooking: (value: IRoomBooking) => void;
  handleDeductRoomBooking: (value: IRoomBooking) => void;
}) => {
  const theme = useTheme();

  const [rooms, setRooms] = useState<IHotelRooms[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.bookingSchedule.date && props.bookingSchedule.duration) {
      const checkInDatetimeEpoch = props.bookingSchedule.date.getTime() / 1000;
      const lotNumber = getLotNumber(props.selectedHotel.hotelName);
      const apiUrl = `${BASE_API}/landing-page/list-for-booking/?checkInDatetime=${checkInDatetimeEpoch}&duration=${props.bookingSchedule.duration}&lotId=${lotNumber}`;

      setIsLoading(true);
      fetch(apiUrl, {
        method: "GET",
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          const data = result.data;
          const convertedRooms = data.map((data: IApiResponseRoom) => ({
            image: FemaleSingleImage,
            name: data.roomTypeName,
            zone: data.roomZoneNames,
            bedType: predictBedType(data.maxPax),
            capacity: data.maxPax + " Adult",
            price: data.price,
            availableCount: data.availableCount,
          }));

          setRooms(convertedRooms);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [props.bookingSchedule, props.selectedHotel.hotelName]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginY={10}
    >
      <Box display={"flex"} marginBottom={7}>
        <Typography variant="h4">{title}</Typography>
      </Box>

      <Grid
        container
        marginTop={8}
        maxWidth={"900px"}
        columnSpacing={3}
        marginBottom={8}
        rowSpacing={{ xs: 8, sm: 8, md: 5, lg: 5, xl: 5 }}
      >
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Skeleton variant="rectangular" width={"100%"} height={550} />
                </Box>
              </Grid>
            ))
          : rooms.map((room, index) => {
              const roomSelected = props.roomBookings.find(
                (roomBooking) => roomBooking.roomTypeId === room.name
              );
              return (
                <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Typography variant="h6" fontWeight={700} marginTop={2}>
                      {room.name} {room.zone ? `(${room.zone})` : ""}
                    </Typography>
                    <Stack direction={"row"} spacing={1} marginTop={1}>
                      <Typography color={theme.palette.CtColorScheme.grey400}>
                        {room.bedType}
                      </Typography>
                      <Typography color={"primary"}>/</Typography>
                      <Typography color={theme.palette.CtColorScheme.grey400}>
                        {room.capacity}
                      </Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      marginTop={1}
                      justifyContent={"space-between"}
                    >
                      <Stack direction={"row"} alignItems={"end"} spacing={1}>
                        <Typography variant="h5">RM{room.price}</Typography>
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
                                  matchDurationEnum(
                                    props.bookingSchedule.duration
                                  )
                                )}
                                alt="feature"
                                style={{ marginBottom: 3 }}
                              />
                            </Stack>
                          )}
                      </Stack>
                      {roomSelected ? (
                        <Stack direction={"row"} width={"180px"}>
                          <Button
                            variant="outlined"
                            onClick={() =>
                              props.bookingSchedule.duration &&
                              props.handleDeductRoomBooking({
                                roomTypeId: room.name,
                                roomType: room.name,
                                duration: props.bookingSchedule.duration,
                                price: room.price,
                                quantity: 1,
                                bedType: room.bedType,
                                capacity: room.capacity,
                                zone: room.zone,
                              })
                            }
                            sx={{
                              width: "10%",
                              padding: 0,
                              border: 1,
                              color: "black",
                              bgcolor: theme.palette.primary.main,
                            }}
                          >
                            <Remove />
                          </Button>
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            width={"80%"}
                            borderTop={1}
                            borderBottom={1}
                          >
                            {roomSelected
                              ? props.roomBookings.find(
                                  (roomBooking) =>
                                    roomBooking.roomTypeId === room.name
                                )?.quantity
                              : 0}
                          </Box>
                          <Button
                            variant="outlined"
                            disabled={
                              roomSelected.quantity >= room.availableCount
                            }
                            onClick={() =>
                              props.bookingSchedule.duration &&
                              props.handleAddRoomBooking({
                                roomTypeId: room.name,
                                roomType: room.name,
                                duration: props.bookingSchedule.duration,
                                price: room.price,
                                quantity: 1,
                                bedType: room.bedType,
                                capacity: room.capacity,
                                zone: room.zone,
                              })
                            }
                            sx={{
                              width: "10%",
                              padding: 0,
                              border: 1,
                              color: "black",
                              bgcolor: theme.palette.primary.main,
                            }}
                          >
                            <Add />
                          </Button>
                        </Stack>
                      ) : (
                        <Button
                          variant="outlined"
                          onClick={() =>
                            props.bookingSchedule.duration &&
                            props.handleAddRoomBooking({
                              roomTypeId: room.name,
                              roomType: room.name,
                              duration: props.bookingSchedule.duration,
                              price: room.price,
                              quantity: 1,
                              bedType: room.bedType,
                              capacity: room.capacity,
                              zone: room.zone,
                            })
                          }
                          sx={{
                            color: "black",
                            borderColor: "black",
                            width: "180px",
                          }}
                        >
                          ADD ROOM
                        </Button>
                      )}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

const BookNowButton = (props: {
  roomBookings: IRoomBooking[];
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();

  const amountOfRooms = props.roomBookings.reduce(
    (total, curr) => (total = total + curr.quantity),
    0
  );

  const totalAmount = props.roomBookings
    .reduce((total, curr) => (total = total + curr.price * curr.quantity), 0)
    .toFixed(2);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      position={"fixed"}
      borderTop={1}
      width={"100%"}
      height={"80px"}
      zIndex={10}
      bottom={0}
      bgcolor={theme.palette.primary.main}
      paddingX={7}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Typography variant="h4">{amountOfRooms} rooms selected</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Stack direction={"row"} alignItems={"end"} spacing={1}>
            <Typography variant="h4">
              RM{displayThousands(parseFloat(totalAmount))}
            </Typography>
            <Typography variant="subtitle1">
              price before discount and tax
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
            <Button
              onClick={() => props.handleChangeStepper(4)}
              sx={{
                padding: 0,
              }}
            >
              <Typography variant="h4">{"Book Now"}</Typography>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectRoomSection;
