import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderTop from "../global/HeaderTop";
import { useRef, useState } from "react";
import Image from "next/image";
import ContentWrapper from "../global/ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";
import Airside1 from "./images/room-types-showcase/Female-Only-Zone.jpg";
import Airside2 from "./images/room-types-showcase/Female-Single-Pod.jpg";
import Airside3 from "./images/room-types-showcase/Interior-1.jpg";
import Airside4 from "./images/room-types-showcase/Interior-2.jpg";
import Airside5 from "./images/room-types-showcase/Interior-3.jpg";
import Airside14 from "./images/room-types-showcase/Mixed-Zone.jpg";
import Airside6 from "./images/room-types-showcase/Mixed-Pod-1.jpg";
import Airside7 from "./images/room-types-showcase/Mixed-Pod-2.jpg";
import Airside8 from "./images/room-types-showcase/Mixed-Pod-3.jpg";
import Airside9 from "./images/room-types-showcase/Mixed-Pod-4.jpg";
import Airside10 from "./images/room-types-showcase/Mixed-Zone-Interior-1.jpg";
import Airside11 from "./images/room-types-showcase/Mixed-Zone-Interior-2.jpg";
import Airside12 from "./images/room-types-showcase/Mixed-Zone-Interior-3.jpg";
import Airside13 from "./images/room-types-showcase/Mixed-Zone-Interior-4.jpg";
import Airside15 from "./images/room-types-showcase/Shower-1.jpg";
import Airside16 from "./images/room-types-showcase/Shower-2.jpg";
import Airside17 from "./images/room-types-showcase/Amenities.jpg";
import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";
0;

const textContents = ["At a Glance", "Grid", "List"];

const AirsideImages: IHotelGalleryImages[] = [
  { image: Airside1, category: "Female Only Zone" },
  { image: Airside2, category: "Female Single Pod" },
  { image: Airside3, category: "Interior" },
  { image: Airside4, category: "Interior" },
  { image: Airside5, category: "Interior" },
  { image: Airside6, category: "Mixed Zone" },
  { image: Airside7, category: "Mixed Pod" },
  { image: Airside8, category: "Mixed Pod" },
  { image: Airside9, category: "Mixed Pod" },
  { image: Airside10, category: "Mixed Pod" },
  { image: Airside11, category: "Mixed Zone Interior" },
  { image: Airside12, category: "Mixed Zone Interior" },
  { image: Airside13, category: "Mixed Zone Interior" },
  { image: Airside14, category: "Mixed Zone Interior" },
  { image: Airside15, category: "Shower" },
  { image: Airside16, category: "Shower" },
  { image: Airside17, category: "Amenities" },
];

const AirsideRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default AirsideRoomTypesShowcase;
