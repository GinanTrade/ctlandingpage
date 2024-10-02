import {
  IBookingLocation,
  IBookingSchedule,
  IHotelRooms,
  IPaymentInfo,
  IRoomBooking,
  IRoomImages,
} from "@/models/Booking";
import {
  Box,
  Button,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import { format } from "date-fns";
import CTButton from "../global/CTButton";
import Image from "next/image";
import { DurationIcons } from "@/constant/Icons";
import { featuresEnum, lotNumberEnum } from "@/constant/Enums";
import { Add, ArrowBackIos, Remove } from "@mui/icons-material";
import {
  displayThousands,
  getLotNumber,
  matchDurationEnum,
  predictBedType,
} from "@/utils/functions";

import FemaleSingleImage from "../landside/images/room-single-female@2x.jpg";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIHeader } from "@/api/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const title = "Select Your Room";

interface IApiResponseRoom {
  roomTypeName: string;
  roomZoneNames: string;
  maxPax: string;
  price: string;
  availableCount: number;
}

const SelectRoomSection = (props: {
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  taxPercentage: string;
  paymentInfo: IPaymentInfo;
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
  handleChangeStepper: (value: number) => void;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box
      display={"flex"}
      paddingY={3}
      borderTop={isHandheldDevice ? 0 : 1}
      borderBottom={1}
      marginTop={10}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <SummaryContent
            title="Outlet"
            data={`${props.selectedHotel.hotelName} @ ${props.selectedHotel.hotelLocation}`}
          />
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
          <Divider orientation="vertical" sx={{ width: "1px" }} />
        </Grid>
        {isHandheldDevice && (
          <Grid item xs={12} sm={12} md={12} lg={0} xl={0}>
            <Divider sx={{ bgcolor: "black" }} />
          </Grid>
        )}
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
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <CTButton
              onClick={() => {
                props.handleChangeStepper(2);
              }}
              text="Change"
              variant="secondary"
            />
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
      <Stack spacing={1}>
        <Typography>{props.title}</Typography>
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

const RoomTypesContent = (props: {
  bookingSchedule: IBookingSchedule;
  roomBookings: IRoomBooking[];
  selectedHotel: IBookingLocation;
  taxPercentage: string;
  handleAddRoomBooking: (value: IRoomBooking) => void;
  handleDeductRoomBooking: (value: IRoomBooking) => void;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const [rooms, setRooms] = useState<IHotelRooms[]>([]);
  const [roomImage, setRoomImages] = useState<IRoomImages[]>([]);

  const [completedRoomData, setCompletedRoomData] = useState<IHotelRooms[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);

  useEffect(() => {
    if (props.bookingSchedule.date && props.bookingSchedule.duration) {
      const checkInDatetimeEpoch = props.bookingSchedule.date.getTime() / 1000;
      const lotNumber = getLotNumber(props.selectedHotel.hotelName);
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API}/landing-page/list-for-booking/?checkInDatetime=${checkInDatetimeEpoch}&duration=${props.bookingSchedule.duration}&lotId=${lotNumber}`;

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
            capacity:
              data.maxPax + (parseInt(data.maxPax) > 1 ? " Adults" : " Adult"),
            price: parseFloat(data.price),
            availableCount: data.availableCount,
          }));

          const sortedRooms = convertedRooms.sort(
            (a: IHotelRooms, b: IHotelRooms) => {
              const capacityA = parseInt(a.capacity);
              const capacityB = parseInt(b.capacity);
              return capacityA - capacityB;
            }
          );

          setRooms(sortedRooms);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [props.bookingSchedule, props.selectedHotel.hotelName]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/room-type-images?populate=*`;

    setIsLoadingImage(true);
    axios
      .get(apiUrl, APIHeader)
      .then((response) => {
        const data = response.data.data;

        const formattedData: IRoomImages[] = data
          .sort((a: any, b: any) =>
            a.attributes.title.localeCompare(b.attributes.title)
          )
          .map((data: any) => ({
            name: data.attributes.title,
            url: `${process.env.NEXT_PUBLIC_STRAPI_BASE}${data.attributes.image.data.attributes.url}`,
          }));

        setRoomImages(formattedData);
      })
      .catch((response) => console.log(response))
      .finally(() => setIsLoadingImage(false));
  }, []);

  useEffect(() => {
    if (rooms.length > 0 && roomImage.length > 0) {
      const data = rooms.map((room) => {
        const strapiName = (
          props.selectedHotel.hotelName +
          "-" +
          room.name
        ).toLowerCase();
        const imageLocated = roomImage
          .filter((image) => image.name.includes(strapiName))
          .map((image) => image.url);

        if (imageLocated) {
          return {
            ...room,
            imageUrl: imageLocated,
          };
        } else {
          return room;
        }
      });
      setCompletedRoomData(data);
    } else {
      setCompletedRoomData(rooms);
    }
  }, [roomImage, rooms]);

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
        {isLoading || isLoadingImage
          ? [...Array(4)].map((_, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Skeleton variant="rectangular" width={"100%"} height={550} />
                </Box>
              </Grid>
            ))
          : completedRoomData
              .filter((room) => room.imageUrl && room.imageUrl.length > 0)
              .map((room, index) => {
                const roomSelected = props.roomBookings.find(
                  (roomBooking) => roomBooking.roomTypeId === room.name
                );
                return (
                  <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      sx={{ opacity: room.availableCount < 1 ? 0.5 : 1 }}
                    >
                      {room.imageUrl && room.imageUrl.length > 1 ? (
                        <Carousel showThumbs={false} swipeable={true}>
                          {room.imageUrl.map((image, index) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={index}
                              src={image}
                              alt={room.name}
                              style={{
                                width: "100%",
                                height: 550,
                                objectFit: "cover",
                              }}
                            />
                          ))}
                        </Carousel>
                      ) : (
                        room.imageUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={room.imageUrl[0]}
                            alt={room.name}
                            style={{
                              width: "100%",
                              height: 550,
                              objectFit: "cover",
                            }}
                          />
                        )
                      )}
                      <Typography variant="h6" fontWeight={700} marginTop={2}>
                        {room.name}
                        {/* {room.zone ? `(${room.zone})` : ""} */}
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
                        direction={isHandheldDevice ? "column" : "row"}
                        marginTop={1}
                        justifyContent={"space-between"}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"flex-end"}
                          spacing={1}
                        >
                          <Typography variant="h5">
                            RM
                            {room.price
                              /**
                               * Below is the code to calculate the room after tax, changed back due to client's request
                               */
                              // room.price +
                              // (room.price * parseInt(props.taxPercentage)) / 100
                              .toFixed(2)}
                          </Typography>
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
                        {room.availableCount < 1 ? (
                          <Button
                            variant="outlined"
                            disabled={room.availableCount < 1}
                            sx={{
                              color: "black",
                              borderColor: "black",
                              width: isHandheldDevice ? "100%" : "180px",
                              height: "40px",
                              marginTop: isHandheldDevice ? 1 : 0,
                              "&.Mui-disabled": {
                                opacity: 1, // Set your desired opacity
                                color: "black", // Ensure text color remains the same
                                bgcolor: theme.palette.CtColorScheme.grey100,
                                borderColor: "black", // Ensure border color remains the same
                              },
                            }}
                          >
                            FULLY BOOKED
                          </Button>
                        ) : roomSelected ? (
                          <Stack
                            direction={"row"}
                            width={isHandheldDevice ? "100%" : "180px"}
                            marginTop={isHandheldDevice ? 1 : 0}
                            height={"40px"}
                          >
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

                                  sum: 0,
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

                                  sum: 0,
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
                                imageUrl: room.imageUrl,

                                sum: 0,
                              })
                            }
                            sx={{
                              color: "black",
                              borderColor: "black",
                              width: isHandheldDevice ? "100%" : "180px",
                              height: "40px",
                              marginTop: isHandheldDevice ? 1 : 0,
                            }}
                          >
                            SELECT ROOM
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
  paymentInfo: IPaymentInfo;
  handleChangeStepper: (value: number) => void;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const amountOfRooms = props.roomBookings.reduce(
    (total, curr) => (total = total + curr.quantity),
    0
  );

  const totalRoomsPrice = props.paymentInfo.rounding
    ? props.paymentInfo.debitAmount - props.paymentInfo.rounding
    : props.paymentInfo.debitAmount;

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
      paddingX={3}
    >
      {!isHandheldDevice ? (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Typography variant="h4">{amountOfRooms} rooms selected</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Stack direction={"row"} alignItems={"flex-end"} spacing={1}>
              <Typography variant="h4">
                RM{displayThousands(parseFloat(totalAmount))}
              </Typography>
              <Typography variant="subtitle1">
                price before discount and tax
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  props.handleChangeStepper(4);
                  window.scrollTo(0, 0);
                }}
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
      ) : (
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Typography variant="h4">
              {amountOfRooms} rooms / RM
              {displayThousands(parseFloat(totalAmount))}
            </Typography>
            <Typography>price before discount and tax</Typography>
          </Stack>
          <Button
            onClick={() => props.handleChangeStepper(4)}
            sx={{
              padding: 0,
            }}
          >
            <Image
              src={CTRight}
              alt="CT-Right-Up"
              style={{
                color: "white",
                width: "60px",
              }}
            />
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default SelectRoomSection;
