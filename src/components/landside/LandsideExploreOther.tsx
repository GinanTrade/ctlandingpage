import AirSideImage from "@/assets/images/list-klia2-airside.jpg";
import MaxImage from "@/assets/images/list-klia2-max@2x.jpg";
import SleepLoungeImage from "@/assets/images/list-klia1-landside@2x.jpg";
import HotelExploreOther, {
  IOtherHotels,
} from "../global/hotel/HotelExploreOther";

const title = "Explore other stays";

const otherHotels: IOtherHotels[] = [
  {
    title: "Capsule Transit Airside",
    location: "KLIA Terminal 2, Restricted Area",
    backgroundUrl: AirSideImage,
    url: "/klia-2/airside",
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

const LandsideExploreOther = () => {
  return <HotelExploreOther otherHotels={otherHotels} />;
};

export default LandsideExploreOther;
