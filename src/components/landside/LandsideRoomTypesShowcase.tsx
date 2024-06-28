import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderTop from "../global/HeaderTop";
import { useRef, useState } from "react";
import Image from "next/image";
import ContentWrapper from "../global/ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import Landside1 from "./images/room-types-showcase/Capsule-Queen-1.jpg";
import Landside2 from "./images/room-types-showcase/Capsule-Queen-2.jpg";
import Landside3 from "./images/room-types-showcase/Capsule-Queen-3.jpg";
import Landside4 from "./images/room-types-showcase/Capsule-Queen-4.jpg";
import Landside5 from "./images/room-types-showcase/Capsule-Queen-5.jpg";
import Landside6 from "./images/room-types-showcase/Capsule-Suite-1.jpg";
import Landside7 from "./images/room-types-showcase/Capsule-Suite-2.jpg";
import Landside8 from "./images/room-types-showcase/Capsule-Suite-3.jpg";
import Landside9 from "./images/room-types-showcase/Capsule-Suite-4.jpg";
import Landside10 from "./images/room-types-showcase/Capsule-Suite-5.jpg";
import Landside11 from "./images/room-types-showcase/Capsule-Suite-6.jpg";
import Landside12 from "./images/room-types-showcase/Capsule-Suite-7.jpg";
import Landside13 from "./images/room-types-showcase/Capsule-Suite-8.jpg";
import Landside14 from "./images/room-types-showcase/Capsule-Suite-9.jpg";
import Landside15 from "./images/room-types-showcase/Female-Pod-1.jpg";
import Landside16 from "./images/room-types-showcase/Female-Pod-2.jpg";
import Landside17 from "./images/room-types-showcase/Frontage-1.jpg";
import Landside18 from "./images/room-types-showcase/Frontage-2.jpg";
import Landside19 from "./images/room-types-showcase/Frontage-3.jpg";
import Landside20 from "./images/room-types-showcase/Frontage-4.jpg";
import Landside21 from "./images/room-types-showcase/Frontage-5.jpg";
import Landside22 from "./images/room-types-showcase/Frontage-6.jpg";
import Landside23 from "./images/room-types-showcase/Frontage-7.jpg";
import Landside24 from "./images/room-types-showcase/Interior-1.jpg";
import Landside25 from "./images/room-types-showcase/Interior-2.jpg";
import Landside26 from "./images/room-types-showcase/Interior-3.jpg";
import Landside27 from "./images/room-types-showcase/Interior-4.jpg";
import Landside28 from "./images/room-types-showcase/Locker-1.jpg";
import Landside29 from "./images/room-types-showcase/Locker-2.jpg";
import Landside30 from "./images/room-types-showcase/Locker-3.jpg";
import Landside31 from "./images/room-types-showcase/Lounge-1.jpg";
import Landside32 from "./images/room-types-showcase/Lounge-2.jpg";
import Landside33 from "./images/room-types-showcase/Lounge-3.jpg";
import Landside34 from "./images/room-types-showcase/Lounge-4.jpg";
import Landside35 from "./images/room-types-showcase/Lounge-5.jpg";
import Landside36 from "./images/room-types-showcase/Lounge-6.jpg";
import Landside37 from "./images/room-types-showcase/Mixed-Pod-&-Female-Pod-1.jpg";
import Landside38 from "./images/room-types-showcase/Mixed-Pod-&-Female-Pod-2.jpg";
import Landside39 from "./images/room-types-showcase/Mixed-Pod-&-Female-Pod-3.jpg";
import Landside40 from "./images/room-types-showcase/Mixed-Pod-&-Female-Pod-4.jpg";
import Landside41 from "./images/room-types-showcase/Mixed-Pod-1.jpg";
import Landside42 from "./images/room-types-showcase/Mixed-Pod-2.jpg";
import Landside43 from "./images/room-types-showcase/Shared-Bathroom.jpg";
import Landside44 from "./images/room-types-showcase/Shower-1.jpg";
import Landside45 from "./images/room-types-showcase/Shower-2.jpg";
import Landside46 from "./images/room-types-showcase/Shower-3.jpg";
import Landside47 from "./images/room-types-showcase/Signage-1.jpg";
import Landside48 from "./images/room-types-showcase/Signage-2.jpg";
import Landside49 from "./images/room-types-showcase/Signage-3.jpg";
import Landside50 from "./images/room-types-showcase/Signage-4.jpg";
import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";
0;

const textContents = ["At a Glance", "Grid", "List"];

const LandsideImages: IHotelGalleryImages[] = [
  {
    image: Landside1,
    category: "Queen",
  },
  {
    image: Landside2,
    category: "Queen",
  },
  {
    image: Landside3,
    category: "Queen",
  },
  {
    image: Landside4,
    category: "Queen",
  },
  {
    image: Landside5,
    category: "Queen",
  },
  {
    image: Landside6,
    category: "Suite",
  },
  {
    image: Landside7,
    category: "Suite",
  },

  {
    image: Landside8,
    category: "Suite",
  },
  {
    image: Landside9,
    category: "Suite",
  },
  {
    image: Landside10,
    category: "Suite",
  },
  {
    image: Landside11,
    category: "Suite",
  },
  {
    image: Landside12,
    category: "Suite",
  },
  {
    image: Landside13,
    category: "Suite",
  },
  {
    image: Landside14,
    category: "Suite",
  },
  {
    image: Landside15,
    category: "Female Pod",
  },
  {
    image: Landside16,
    category: "Female Pod",
  },
  {
    image: Landside17,
    category: "Frontage",
  },

  {
    image: Landside18,
    category: "Frontage",
  },
  {
    image: Landside19,
    category: "Frontage",
  },
  {
    image: Landside20,
    category: "Frontage",
  },
  {
    image: Landside21,
    category: "Frontage",
  },

  {
    image: Landside22,
    category: "Frontage",
  },
  {
    image: Landside23,
    category: "Frontage",
  },
  {
    image: Landside24,
    category: "Interior",
  },
  {
    image: Landside25,
    category: "Interior",
  },
  {
    image: Landside26,
    category: "Interior",
  },
  {
    image: Landside27,
    category: "Interior",
  },
  {
    image: Landside28,
    category: "Locker",
  },
  {
    image: Landside29,
    category: "Locker",
  },
  {
    image: Landside30,
    category: "Locker",
  },
  {
    image: Landside31,
    category: "Lounge",
  },
  {
    image: Landside32,
    category: "Lounge",
  },
  {
    image: Landside33,
    category: "Lounge",
  },
  {
    image: Landside34,
    category: "Lounge",
  },
  {
    image: Landside35,
    category: "Lounge",
  },
  {
    image: Landside36,
    category: "Lounge",
  },
  {
    image: Landside37,
    category: "Mixed Zone",
  },
  {
    image: Landside38,
    category: "Mixed Zone",
  },
  {
    image: Landside39,
    category: "Mixed Zone",
  },
  {
    image: Landside40,
    category: "Mixed Zone",
  },
  {
    image: Landside41,
    category: "Mixed Pod",
  },
  {
    image: Landside42,
    category: "Mixed Pod",
  },
  {
    image: Landside43,
    category: "Bathroom",
  },
  {
    image: Landside44,
    category: "Shower",
  },
  {
    image: Landside45,
    category: "Shower",
  },
  {
    image: Landside46,
    category: "Shower",
  },
  {
    image: Landside47,
    category: "Signage",
  },
  {
    image: Landside48,
    category: "Signage",
  },
  {
    image: Landside49,
    category: "Signage",
  },
  {
    image: Landside50,
    category: "Signage",
  },
];

const LandsideRoomTypesShowcase = () => {
  return <HotelGallery images={LandsideImages} textContents={textContents} />;
};

export default LandsideRoomTypesShowcase;
