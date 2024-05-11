import AirsideImage from "./images/klia2-airside@2x.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import HotelOverview from "../global/hotel/HotelOverview";

const headerContent = ["01", "/03", "Restricted Area"];

const textContent = [
  "Airside",
  "Located in the boarding area, closest to the flights, CapsuleTransit Airside outlet offers single pod rooms available to book for a minimum of 1 hour. Each room includes public bathrooms and locker services",
  "/klia-2/airside",
];

const AirsideOverviewKLIA2 = () => {
  return (
    <HotelOverview
      header={headerContent}
      content={textContent}
      image={AirsideImage}
      isInRestricted={true}
    />
  );
};

export default AirsideOverviewKLIA2;
