import { IBookingLocation, IBookingSchedule } from "@/models/Booking";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ArrowDropDownIcon,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { TimeSelection } from "./constant/TimeSelection";

const title = "When would you like to check in?";

const durations = [3, 6, 12];

const ScheduleSection = (props: {
  bookingLocation: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  handleChangeDatePromotion: (value: IBookingSchedule) => void;
  handleChangeStepper: (value: number) => void;
  handleEmptyRoomBooking: VoidFunction;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const [openErrorAlert, setOpenErrorAlert] = useState<string>("");

  const handleOpenAlert = (text: string) => {
    setOpenErrorAlert(text);
  };

  const handleCloseAlert = () => {
    setOpenErrorAlert("");
  };

  const currentDateTime = new Date();

  const handleDateOnChange = (date: Date): void => {
    const newValue = { ...props.bookingSchedule, date: date };
    props.handleChangeDatePromotion(newValue);
  };

  const handleDurationOnChange = (duration: number): void => {
    const newValue = { ...props.bookingSchedule, duration: duration };
    props.handleChangeDatePromotion(newValue);
    props.handleEmptyRoomBooking();
  };

  const isSameDay = (date1: Date, date2?: Date) =>
    date2 && date1.toDateString() === date2.toDateString();

  const getMinTime = () => {
    if (isSameDay(currentDateTime, props.bookingSchedule.date)) {
      return currentDateTime; // Minimum time is current time if the selected date is today
    } else if (props.bookingSchedule.date) {
      const minDate = new Date();
      return new Date(minDate.setHours(0, 0, 0, 0)); // Start of the day (00:00)
    }
    return null;
  };

  const handleNextButtonClick = () => {
    if (!props.bookingSchedule.date) {
      handleOpenAlert(
        "It seems like you haven't picked a date yet. Please select a date to continue"
      );
    } else if (props.bookingSchedule.date < currentDateTime) {
      handleOpenAlert(
        "Oops! It looks like you've selected a past date. Please pick a date in the future."
      );
    } else if (!props.bookingSchedule.duration) {
      handleOpenAlert("Please select a duration to proceed with your booking.");
    } else {
      props.handleChangeStepper(3);
    }
  };

  const handleChangeDate = (selectedDate: Date | null) => {
    if (selectedDate) {
      const now = new Date();
      const malaysiaTimeOffset = 8 * 60; // Malaysia is UTC+8
      const localOffset = now.getTimezoneOffset(); // Get the local offset in minutes
      const malaysiaTime = new Date(
        now.getTime() + (malaysiaTimeOffset + localOffset) * 60000
      );

      const isToday = selectedDate.toDateString() === now.toDateString();

      if (isToday) {
        // Get the current hour and minutes
        let hours = malaysiaTime.getHours();
        let minutes = malaysiaTime.getMinutes();

        // Calculate the next 30-minute mark
        if (minutes > 30) {
          minutes = 0;
          hours += 1; // Move to the next hour
        } else {
          minutes = 30;
        }

        // Set the selectedDate to the rounded time
        selectedDate.setHours(hours);
        selectedDate.setMinutes(minutes);
        selectedDate.setSeconds(0);
        selectedDate.setMilliseconds(0);
      } else {
        selectedDate.setHours(0);
        selectedDate.setMinutes(0);
        selectedDate.setSeconds(0);
        selectedDate.setMilliseconds(0);
      }
      handleDateOnChange(selectedDate);
    }
  };

  const handleChangeTime = (event: SelectChangeEvent<string>) => {
    const [hours, minutes] = event.target.value.split(":").map(Number);

    const newDate = props.bookingSchedule.date
      ? props.bookingSchedule.date
      : new Date();

    newDate.setHours(hours);
    newDate.setMinutes(minutes);

    handleDateOnChange(newDate);
  };

  const filterTimes = (time: string) => {
    const selectedDate = props.bookingSchedule.date;
    const now = new Date();

    // Convert current time to Malaysia time (UTC+8)
    const malaysiaTimeOffset = 8 * 60; // Malaysia is UTC+8
    const localOffset = now.getTimezoneOffset(); // Get the local offset in minutes
    const malaysiaTime = new Date(
      now.getTime() + (malaysiaTimeOffset + localOffset) * 60000
    );

    const comparisonTime = malaysiaTime.toTimeString().slice(0, 5); // Malaysia time in HH:mm format
    if (
      !selectedDate ||
      selectedDate.toDateString() === malaysiaTime.toDateString()
    ) {
      return time > comparisonTime;
    }

    return true;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingY={isHandheldDevice ? 6 : 10}
        paddingX={3}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          width={isHandheldDevice ? "320px" : "100%"}
        >
          {title}
        </Typography>
        <Stack
          width={isHandheldDevice ? "100%" : "1050px"}
          direction={isHandheldDevice ? "column" : "row"}
          spacing={2}
          marginTop={isHandheldDevice ? 5 : 0}
        >
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "300px"}
            spacing={2}
          >
            <Typography fontWeight={"600"}>Date</Typography>
            <DatePicker
              value={props.bookingSchedule.date}
              onChange={(newValue) => {
                handleChangeDate(newValue);
              }}
              format="dd/MM/yyyy"
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              minDate={currentDateTime}
              sx={{ fontWeight: 600 }}
            />
          </Stack>
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "300px"}
            spacing={2}
            position={"relative"}
          >
            <Typography fontWeight={"600"}>Time</Typography>
            {/** * TimePicker component has been deprecated and should no longer
            be used. 
            * Reason: Dennis requested to change to a select that can select both time at the same time. 

              <TimePicker
              value={props.bookingSchedule.date}
              onChange={(newValue) => handleDateOnChange(newValue as Date)}
              format={"HH:mm"}
              ampm={false}
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              minTime={getMinTime() ?? undefined}
              slotProps={{
                layout: {
                  sx: {
                    [`.${multiSectionDigitalClockSectionClasses.root}:after`]: {
                      display: "none",
                    },
                    "& .MuiList-root": {
                      width: "70px",
                    },
                    "& .MuiClockNumber-root": {
                      padding: "4px",
                      fontSize: "1.15rem",
                    },
                    "& .MuiClockPointer-thumb": {
                      width: "4px",
                      height: "4px",
                    },
                  },
                },
              }}
              desktopModeMediaQuery="@media (min-width:0px)"
              sx={{
                fontWeight: 600,
                "&::after": {
                  display: "none", // Hide the ::after pseudo-element if it's causing issues
                },
              }}
            /> */}
            <Select
              labelId="time-select-label"
              value={
                props.bookingSchedule.date
                  ? format(props.bookingSchedule.date, "HH:mm")
                  : ""
              }
              placeholder="HH:mm"
              onChange={handleChangeTime}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300, // Set the maximum height in pixels
                  },
                },
              }}
            >
              <MenuItem disabled value="-">
                <Typography variant="subtitle2" textOverflow={"clip"}>
                  <em>HH:mm (MYT, UTC+8).</em>
                </Typography>
              </MenuItem>
              {TimeSelection.filter(filterTimes).map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                position: "absolute",
                bottom: -20, // Adjust this value to control distance from Select
                left: 0,
                right: 0,
                textAlign: "center",
              }}
            ></Typography>
          </Stack>
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            width={isHandheldDevice ? "100%" : "350px"}
            height={isHandheldDevice ? "100px" : "300px"}
            spacing={2}
          >
            <Typography fontWeight={"600"}>Duration</Typography>
            <Select
              value={props.bookingSchedule.duration}
              onChange={(event) =>
                handleDurationOnChange(event.target.value as number)
              }
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: theme.palette.CtColorScheme.neon200,
                  },
                },
              }}
              sx={{ fontWeight: 600 }}
            >
              {durations.map((duration, index) => (
                <MenuItem
                  key={index}
                  value={duration}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {duration} hours
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Box
          display={"flex"}
          marginTop={"80px"}
          justifyContent={"space-between"}
          width={isHandheldDevice ? "100%" : "800px"}
        >
          <Button onClick={() => props.handleChangeStepper(1)}>
            <Image
              src={IconArrowRight}
              alt="CT-Right-Up"
              style={{ transform: "rotate(180deg)" }}
            />
            <Typography variant="h4" marginLeft={3}>
              Back
            </Typography>
          </Button>
          <Button onClick={handleNextButtonClick}>
            <Typography variant="h4" marginRight={3}>
              Next
            </Typography>
            <Image src={IconArrowRight} alt="CT-Right-Up" />
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={Boolean(openErrorAlert)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="error"
          variant="filled"
          sx={{ width: "100%", fontSize: "1rem" }}
        >
          {openErrorAlert}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default ScheduleSection;
