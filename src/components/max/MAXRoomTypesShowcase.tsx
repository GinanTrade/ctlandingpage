import MAX1 from "./images/room-types-showcase/Buffet-01.jpg";
import MAX2 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-1.jpg";
import MAX3 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-2.jpg";
import MAX4 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-3.jpg";
import MAX5 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-4.jpg";
import MAX6 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-5.jpg";
import MAX7 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-6.jpg";
import MAX8 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-7.jpg";
import MAX9 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-8.jpg";
import MAX10 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-9.jpg";
import MAX11 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-10.jpg";
import MAX12 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-14.jpg";
import MAX13 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-15.jpg";
import MAX14 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-16.jpg";
import MAX15 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-17.jpg";
import MAX16 from "./images/room-types-showcase/BW_CapsuleTransit_MAX_KLIA2_lowres-18.jpg";
import MAX17 from "./images/room-types-showcase/CT_MAX-ENTRANCE-01.jpg";
import MAX18 from "./images/room-types-showcase/Glass_Meeting_Room-01.jpg";
import MAX19 from "./images/room-types-showcase/Gym-01.jpg";
import MAX20 from "./images/room-types-showcase/Media-01.jpg";
import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";
0;

const textContents = ["At a Glance", "Grid", "List"];

const MAXImages: IHotelGalleryImages[] = [
  {
    image: MAX1,
    category: "Restaurant",
  },
  {
    image: MAX2,
    category: "Entrance",
  },
  {
    image: MAX3,
    category: "Bar",
  },
  {
    image: MAX4,
    category: "Bar",
  },
  {
    image: MAX5,
    category: "Bar",
  },
  {
    image: MAX6,
    category: "Bar",
  },
  {
    image: MAX7,
    category: "Bar",
  },

  {
    image: MAX8,
    category: "Bar",
  },
  {
    image: MAX9,
    category: "Bar",
  },
  {
    image: MAX10,
    category: "Bar",
  },
  {
    image: MAX11,
    category: "Meeting Room",
  },
  {
    image: MAX12,
    category: "Bathroom",
  },
  {
    image: MAX13,
    category: "Room",
  },
  {
    image: MAX14,
    category: "Room",
  },
  {
    image: MAX15,
    category: "Bathroom",
  },
  {
    image: MAX16,
    category: "Hallway",
  },
  {
    image: MAX17,
    category: "Entrance",
  },
  {
    image: MAX18,
    category: "Meeting Room",
  },
  {
    image: MAX19,
    category: "Gym",
  },
  {
    image: MAX20,
    category: "Meeting Room",
  },
];

const MAXRoomTypesShowcase = () => {
  return <HotelGallery images={MAXImages} textContents={textContents} />;
};

export default MAXRoomTypesShowcase;
