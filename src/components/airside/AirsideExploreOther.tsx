import LandSideImage from "@/assets/images/list-klia2-landside@2x.jpg";
import MaxImage from "@/assets/images/list-klia2-max@2x.jpg";
import SleepLoungeImage from "@/assets/images/list-klia1-landside@2x.jpg";
import HotelExploreOther, {
  IOtherHotels,
} from "../global/hotel/HotelExploreOther";

const title = "Explore other stays";

const otherHotels: IOtherHotels[] = [
  {
    title: "Capsule Transit Landside",
    location: "KLIA Terminal 2, Public Area",
    backgroundUrl: LandSideImage,
    url: "/klia-2/landside",
  },
  {
    title: "Capsule Transit MAX",
    location: "KLIA Terminal 2, Public Area",
    backgroundUrl: MaxImage,
    url: "/klia-2/max",
  },
  {
    title: "Capsule Transit Sleep Lounge",
    location: "KLIA Terminal 1, Public Area",
    backgroundUrl: SleepLoungeImage,
    url: "/klia-1/sleep-lounge",
  },
];

const AirsideExploreOther = () => {
  return <HotelExploreOther otherHotels={otherHotels} />;
};

export default AirsideExploreOther;
