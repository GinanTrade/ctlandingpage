import SleepLoungeDisplay1 from "./images/sleeplounge-display-1@2x.jpg";
import SleepLoungeDisplay2 from "./images/room-single-mixed@2x.jpg";
import SleepLoungeDisplay3 from "./images/sleeplounge-display-3@2x.jpg";
import HotelIntro from "../global/hotel/HotelIntro";

const breadCrumbsContent = [
  { name: "Home", url: "/" },
  { name: "Location / KLIA Terminal 1", url: "/klia-1" },
  { name: "Sleep Lounge", url: "" },
];

const title =
  "Sleep-only lounge in Terminal 1 for a quiet nap or quick recharge.";

const images = [SleepLoungeDisplay1, SleepLoungeDisplay2, SleepLoungeDisplay3];

const SleepLoungeIntro = () => {
  return (
    <HotelIntro
      breadCrumbsContent={breadCrumbsContent}
      images={images}
      textContent={title}
      buttonUrl={"/booking"}
    />
  );
};

export default SleepLoungeIntro;
