import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from "@mui/material";
import { useState } from "react";
import CTButton from "../global/CTButton";
import {
  ChevronLeft,
  Help,
  HelpOutline,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { IBookingLocation } from "@/models/Booking";

import T1Icon from "./images/Icons/t1-icon.svg";
import T2Icon from "./images/Icons/t2-icon.svg";
import TrainBusIcon from "./images/Icons/train-bus-icon.svg";

import Terminal1DetailedIcon from "./images/Icons/terminal-1-detailed-icon.svg";
import Terminal1DetailedIconHovered from "./images/Icons/terminal-1-detailed-icon-hover.svg";
import RestrictedAreaIcon from "./images/Icons/restricted-area-icon.svg";
import RestrictedAreaIconHovered from "./images/Icons/restricted-area-icon-hover.svg";
import PublicAreaIcon from "./images/Icons/public-area-icon.svg";
import PublicAreaIconHovered from "./images/Icons/public-area-icon-hover.svg";

interface IKLIAOptions {
  terminalName: string;
  location: {
    icon: StaticImageData;
    iconHovered: StaticImageData;
    name: string;
    description?: string;
    remarks: string;
    hotels: { name: string; detailedLocation: string }[];
  }[];
}

const options = [{ title: "KLIA Terminal 1" }, { title: "KLIA Terminal 2" }];

const KLIA1Options: IKLIAOptions = {
  terminalName: "KLIA Terminal 1",
  location: [
    {
      icon: Terminal1DetailedIcon,
      iconHovered: Terminal1DetailedIconHovered,
      name: "Public Area",
      description:
        "At KLIA Terminal 1, our hotel provides a single-servie sleep-only lounge for you to rest and take a nap",
      remarks:
        "If you are landing in Malaysia, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian Imigration and access our Sleep Lounge",
      hotels: [
        {
          name: "Sleep Lounge",
          detailedLocation:
            "Lot L1-1, 2, 3 & 4, Level 1, Gateway Terminal KLIA2, Jalan KLIA 2/1, 64000 KLIA, Sepang, Selangor, Malaysia",
        },
      ],
    },
  ],
};

const KLIA2Options: IKLIAOptions = {
  terminalName: "KLIA Terminal 2",
  location: [
    {
      icon: RestrictedAreaIcon,
      iconHovered: RestrictedAreaIconHovered,
      name: "Restricted Area",
      remarks:
        "If you are departing from Malaysia, you will need valid documents for flight check-in (boarding pass, passport, or visa) to enter to restricted area and access our Airside",
      hotels: [
        {
          name: "Airside",
          detailedLocation:
            "Lot L1-1, 2, 3 & 4, Level 1, Gateway Terminal KLIA2, Jalan KLIA 2/1, 64000 KLIA, Sepang, Selangor, Malaysia",
        },
      ],
    },
    {
      icon: PublicAreaIcon,
      iconHovered: PublicAreaIconHovered,
      name: "Public Area",
      remarks:
        "If you are landing in Malaysia, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian Imigration and access our Landside and MAX",
      hotels: [
        {
          name: "Landside",
          detailedLocation:
            "Lot L1-1, 2, 3 & 4, Level 1, Gateway Terminal KLIA2, Jalan KLIA 2/1, 64000 KLIA, Sepang, Selangor, Malaysia",
        },
        {
          name: "MAX",
          detailedLocation:
            "Lot L1-1, 2, 3 & 4, Level 1, Gateway Terminal KLIA2, Jalan KLIA 2/1, 64000 KLIA, Sepang, Selangor, Malaysia",
        },
      ],
    },
  ],
};

const StaySection = (props: {
  handleChangeSelectedHotel: (value: IBookingLocation) => void;
}) => {
  const [staySectionStepper, setStaySectionStepper] = useState<string>("");

  const handleChangeStaySectionStepper = (title: string) => {
    setStaySectionStepper(title);
  };

  if (staySectionStepper === "") {
    return (
      <StaySectionHome
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
      />
    );
  } else if (staySectionStepper === options[0].title) {
    return (
      <KLIAStaySection
        content={KLIA1Options}
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
        handleChangeSelectedHotel={props.handleChangeSelectedHotel}
      />
    );
  } else if (staySectionStepper === options[1].title) {
    return (
      <KLIAStaySection
        content={KLIA2Options}
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
        handleChangeSelectedHotel={props.handleChangeSelectedHotel}
      />
    );
  }
};

const informationText =
  "If you wish to travel between KLIA Terminal 1 and Terminal 2, you can take either the free shuttle bus service or ERL (Train).";

const StaySectionHome = (props: {
  handleChangeStaySectionStepper: (title: string) => void;
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const isSmallDevice = useMediaQuery("(max-width:400px)");

  const [informationHovered, setInformationHovered] = useState<boolean>(false);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={isHandheldDevice ? 6 : 10}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        width={isHandheldDevice ? "350px" : "100%"}
      >
        Where are you departing / landing?
      </Typography>
      <Stack direction={"row"} spacing={isHandheldDevice ? 0 : "70px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"35%"}
          height={"600px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={2}
          >
            <Image
              src={T1Icon}
              alt="terminal-1-icon"
              style={{ width: isHandheldDevice ? 100 : 150, height: "auto" }}
            />
          </Box>
          <Typography variant="h4" textAlign={"center"} marginBottom={5}>
            {options[0].title}
          </Typography>
          <CTButton
            onClick={() =>
              props.handleChangeStaySectionStepper(options[0].title)
            }
            text={isHandheldDevice ? "Select" : "SELECT LOCATION"}
            variant="secondary"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"30%"}
          onMouseLeave={() => setInformationHovered(false)}
        >
          <Image
            src={TrainBusIcon}
            alt="transit-icon"
            style={{
              marginBottom: "50px",
              objectFit: "contain",
              width: isHandheldDevice ? 200 : "100%",
              height: "auto",
            }}
          />
          <Box onMouseEnter={() => setInformationHovered(true)}>
            {informationHovered ? (
              <Help color="primary" />
            ) : (
              <HelpOutline color="primary" />
            )}
          </Box>
          {informationHovered && (
            <Box
              position={"fixed"}
              display={"flex"}
              border={1}
              width={"300px"}
              bgcolor={theme.palette.primary.main}
              padding={2}
              zIndex={10}
            >
              {informationText}
            </Box>
          )}
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"35%"}
          height={"600px"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={2}
          >
            <Image
              src={T2Icon}
              alt="terminal-2-icon"
              style={{ width: isHandheldDevice ? 100 : 150, height: "auto" }}
            />
          </Box>
          <Typography variant="h4" textAlign={"center"} marginBottom={5}>
            {options[1].title}
          </Typography>
          <CTButton
            onClick={() =>
              props.handleChangeStaySectionStepper(options[1].title)
            }
            text={isHandheldDevice ? "Select" : "SELECT LOCATION"}
            variant="secondary"
          />
        </Box>
      </Stack>
    </Box>
  );
};

const KLIAStaySection = (props: {
  content: IKLIAOptions;
  handleChangeStaySectionStepper: (title: string) => void;
  handleChangeSelectedHotel: (value: IBookingLocation) => void;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const [hover, setHovered] = useState<string>("");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={isHandheldDevice ? 6 : 10}
      paddingX={3}
    >
      <Stack
        direction={isHandheldDevice ? "column" : "row"}
        width={"100%"}
        marginBottom={6}
        alignItems={isHandheldDevice ? "center" : "start"}
      >
        <Box display={"flex"} width={isHandheldDevice ? "70px" : "33%"}>
          <Button onClick={() => props.handleChangeStaySectionStepper("")}>
            <ChevronLeft />
            <Typography variant="h6" color={"primary"} fontWeight={600}>
              Back
            </Typography>
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={isHandheldDevice ? "100%" : "33%"}
        >
          <Typography variant="h4">{props.content.terminalName}</Typography>
        </Box>
      </Stack>
      <Stack
        direction={isHandheldDevice ? "column" : "row"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={isHandheldDevice ? "center" : "start"}
        spacing={5}
      >
        {props.content.location.map((location, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop={10}
            width={isHandheldDevice ? "350px" : "480px"}
            onMouseEnter={() => setHovered(location.name)}
            onMouseLeave={() => setHovered("")}
          >
            <Stack spacing={2}>
              <Box display={"flex"} justifyContent={"center"} height={"80px"}>
                {hover === location.name ? (
                  <Image src={location.iconHovered} alt={location.name} />
                ) : (
                  <Image src={location.icon} alt={location.name} />
                )}
              </Box>
              <Typography variant="h6" fontWeight={600} textAlign={"center"}>
                {location.name}
              </Typography>
              <Typography textAlign={"center"}>
                {location.description}
              </Typography>
              <Typography textAlign={"center"}>{location.remarks}</Typography>
            </Stack>
            <Stack spacing={3} marginTop={isHandheldDevice ? 6 : 10}>
              {location.hotels.map((hotel, index) => (
                <Button
                  onClick={() =>
                    props.handleChangeSelectedHotel({
                      hotelLocation: props.content.terminalName,
                      hotelName: hotel.name,
                      hotelDetailedLocation: hotel.detailedLocation,
                    })
                  }
                  key={index}
                >
                  <Typography variant="h4" marginRight={3}>
                    {hotel.name}
                  </Typography>
                  <Image src={IconArrowRight} alt="CT-Right-Up" />
                </Button>
              ))}
            </Stack>
            {isHandheldDevice &&
              props.content.location.length - 1 !== index && (
                <Divider
                  variant="middle"
                  sx={{
                    width: "350px",
                    marginTop: 4,
                  }}
                />
              )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default StaySection;
