import SleepLounge1 from "./images/room-types-showcase/Amenities-1.jpg";
import SleepLounge2 from "./images/room-types-showcase/Amenities-2.jpg";
import SleepLounge3 from "./images/room-types-showcase/Amenities-3.jpg";
import SleepLounge4 from "./images/room-types-showcase/Amenities-4.jpg";
import SleepLounge5 from "./images/room-types-showcase/Amenities-5.jpg";
import SleepLounge6 from "./images/room-types-showcase/Amenities-6.jpg";
import SleepLounge7 from "./images/room-types-showcase/Amenities-7.jpg";
import SleepLounge8 from "./images/room-types-showcase/Coffee-station.jpg";
import SleepLounge9 from "./images/room-types-showcase/Exterior-1.jpg";
import SleepLounge10 from "./images/room-types-showcase/Exterior-2.jpg";
import SleepLounge11 from "./images/room-types-showcase/Exterior-3.jpg";
import SleepLounge12 from "./images/room-types-showcase/Exterior-4.jpg";
import SleepLounge13 from "./images/room-types-showcase/Hallway-1.jpg";
import SleepLounge14 from "./images/room-types-showcase/Hallway-2.jpg";
import SleepLounge15 from "./images/room-types-showcase/Hallway-3.jpg";
import SleepLounge16 from "./images/room-types-showcase/Hallway-4.jpg";
import SleepLounge17 from "./images/room-types-showcase/Interior-1.jpg";
import SleepLounge18 from "./images/room-types-showcase/Interior-2.jpg";
import SleepLounge19 from "./images/room-types-showcase/Locker-1.jpg";
import SleepLounge20 from "./images/room-types-showcase/Locker-2.jpg";
import SleepLounge21 from "./images/room-types-showcase/Locker-3.jpg";
import SleepLounge22 from "./images/room-types-showcase/Locker-4.jpg";
import SleepLounge23 from "./images/room-types-showcase/Locker-5.jpg";
import SleepLounge24 from "./images/room-types-showcase/Merchandise.jpg";
import SleepLounge25 from "./images/room-types-showcase/Pod-1.jpg";
import SleepLounge26 from "./images/room-types-showcase/Pod-2.jpg";
import SleepLounge27 from "./images/room-types-showcase/Pod-3.jpg";
import SleepLounge28 from "./images/room-types-showcase/Pod-4.jpg";
import SleepLounge29 from "./images/room-types-showcase/Pod-5.jpg";
import SleepLounge30 from "./images/room-types-showcase/Pod-6.jpg";
import SleepLounge31 from "./images/room-types-showcase/Pod-7.jpg";
import SleepLounge32 from "./images/room-types-showcase/Reception-1.jpg";
import SleepLounge33 from "./images/room-types-showcase/Reception-2.jpg";
import SleepLounge34 from "./images/room-types-showcase/Shoes-Locker.jpg";
import SleepLounge35 from "./images/room-types-showcase/Signage-1.jpg";
import SleepLounge36 from "./images/room-types-showcase/Vanity-Room-1.jpg";

import HotelGallery, {
  IHotelGalleryImages,
} from "../global/hotel/HotelGallery";

const textContents = ["At a Glance", "Grid", "List"];

const AirsideImages: IHotelGalleryImages[] = [
  { image: SleepLounge1, category: "Amenities" },
  { image: SleepLounge2, category: "Amenities" },
  { image: SleepLounge3, category: "Amenities" },
  { image: SleepLounge4, category: "Amenities" },
  { image: SleepLounge5, category: "Amenities" },
  { image: SleepLounge6, category: "Amenities" },
  { image: SleepLounge7, category: "Amenities" },
  { image: SleepLounge8, category: "Coffee Station" },
  { image: SleepLounge9, category: "Exterior" },
  { image: SleepLounge10, category: "Exterior" },
  { image: SleepLounge11, category: "Exterior" },
  { image: SleepLounge12, category: "Exterior" },
  { image: SleepLounge13, category: "Hallway" },
  { image: SleepLounge14, category: "Hallway" },
  { image: SleepLounge15, category: "Hallway" },
  { image: SleepLounge16, category: "Hallway" },
  { image: SleepLounge17, category: "Interior" },
  { image: SleepLounge18, category: "Interior" },
  { image: SleepLounge19, category: "Locker" },
  { image: SleepLounge20, category: "Locker" },
  { image: SleepLounge21, category: "Locker" },
  { image: SleepLounge22, category: "Locker" },
  { image: SleepLounge23, category: "Locker" },
  { image: SleepLounge24, category: "Merchandise" },
  { image: SleepLounge25, category: "Pod" },
  { image: SleepLounge26, category: "Pod" },
  { image: SleepLounge27, category: "Pod" },
  { image: SleepLounge28, category: "Pod" },
  { image: SleepLounge29, category: "Pod" },
  { image: SleepLounge30, category: "Pod" },
  { image: SleepLounge31, category: "Pod" },
  { image: SleepLounge32, category: "Reception" },
  { image: SleepLounge33, category: "Reception" },
  { image: SleepLounge34, category: "Shoes Locker" },
  { image: SleepLounge35, category: "Signage" },
  { image: SleepLounge36, category: "VanityRoom" },
];

const SleepLoungeRoomTypesShowcase = () => {
  return <HotelGallery images={AirsideImages} textContents={textContents} />;
};

export default SleepLoungeRoomTypesShowcase;
