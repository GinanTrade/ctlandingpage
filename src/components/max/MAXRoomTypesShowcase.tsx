import MAX1 from "./images/room-types-showcase/facade.jpg";
import MAX2 from "./images/room-types-showcase/standard-room.jpg";
import MAX3 from "./images/room-types-showcase/deluxe-room.jpg";
import MAX4 from "./images/room-types-showcase/shower-1.jpg";
import MAX5 from "./images/room-types-showcase/shower-2.jpg";
import MAX6 from "./images/room-types-showcase/suite-room.jpg";
import MAX7 from "./images/room-types-showcase/suite-bathroom.jpg";
import MAX8 from "./images/room-types-showcase/lounge-1.jpg";
import MAX9 from "./images/room-types-showcase/lounge-2.jpg";
import MAX10 from "./images/room-types-showcase/gym.jpg";
import MAX11 from "./images/room-types-showcase/event-space-1.jpg";
import MAX12 from "./images/room-types-showcase/event-space-2.jpg";
import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";
0;

const textContents = ["At a Glance", "Grid", "List"];

const MAXImages: IHotelGalleryImages[] = [
  {
    image: MAX1,
    category: "Queen",
  },
  {
    image: MAX2,
    category: "Queen",
  },
  {
    image: MAX3,
    category: "Queen",
  },
  {
    image: MAX4,
    category: "Queen",
  },
  {
    image: MAX5,
    category: "Queen",
  },
  {
    image: MAX6,
    category: "Suite",
  },
  {
    image: MAX7,
    category: "Suite",
  },

  {
    image: MAX8,
    category: "Suite",
  },
  {
    image: MAX9,
    category: "Suite",
  },
  {
    image: MAX10,
    category: "Suite",
  },
  {
    image: MAX11,
    category: "Suite",
  },
  {
    image: MAX12,
    category: "Suite",
  },
];

const MAXRoomTypesShowcase = () => {
  return <HotelGallery images={MAXImages} textContents={textContents} />;
};

export default MAXRoomTypesShowcase;
