import MaxImage from "./images/klia2-MAX@2x.jpg";
import IllusSVG from "./images/icon-standalone-book.svg";
import HotelOverview from "../global/hotel/HotelOverview";

const headerContent = ["02", "/03", "Public Area"];

const textContent = [
  "MAX",
  "Experience a premium stay at the airport with CapsuleTransit MAX. Available for a minimum of 6 hours for a complete stay or 3 hours for a short hangout at the lounge.",
  "/klia-2/max",
];

const MaxOverviewKLIA2 = () => {
  return (
    <HotelOverview
      header={headerContent}
      content={textContent}
      image={MaxImage}
    />
  );
};

export default MaxOverviewKLIA2;
