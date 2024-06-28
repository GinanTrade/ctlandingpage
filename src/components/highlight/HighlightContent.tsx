import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import HeaderBottom from "../global/HeaderBottom";
import Image from "next/image";
import theme from "@/assets/theme/theme";

import Highlight1 from "./images/highlight-1-best-locations.jpg";
import Highlight2 from "./images/highlight-2-flex-checkin.jpg";
import Highlight3 from "./images/highlight-3-book-hour.jpg";
import Highlight4 from "./images/highlight-4-luggage-lock.jpg";
import Highlight5 from "./images/highlight-5-shower.jpg";
import Highlight6 from "./images/highlight-6-female-zone.jpg";
import IllustrationStandaloneBook from "./images/icon-standalone-book.svg";
import Footer from "../global/Footer";

const recurringTexts = ["/06", "All CT Hotels"];

const HighlightContent = () => {
  return (
    <>
      <ContentWrapper noMarginTop>
        <BestLocationSection />
        <FlexibleCheckInSection />
        <BookByHoursSection />
        <LuggageLockerSection />
        <ShowerServiceSection />
        <GenderSpecificSection />
      </ContentWrapper>
      <Footer />
    </>
  );
};

const BestLocationSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight1} alt="best-location" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3">Best Locations</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100%" : "80%"}>
            <Typography>
              Conveniently located inside the airport, just a short walk from
              your departure gate and airport services.
            </Typography>
            <Typography>
              <b>KLIA Terminal 1:</b> Find us at the Departure Hall, Level 5
              (near the Domestic Departure Gate)
            </Typography>
            <Typography>
              In <b>KLIA Terminal 2,</b> we are located in 3 locations:
            </Typography>
            <ul style={{ marginTop: 0 }}>
              <li>
                Airside at Satellite Building, International Departure Hall,
                Level 2 (towards Gate Q).
              </li>
              <li>Landside at gatewat@klia2, Level 1.</li>
              <li>MAX at lorem ipsum.</li>
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const FlexibleCheckInSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight2} alt="best-location" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3">Flexible Check-in Time</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100%" : "80%"}>
            <Typography>
              Travel schedules can be unpredictable. That&apos;s why we offer a
              flexible check-in time to accomodate your needs.
            </Typography>
            <Typography>
              Our hotel is open <b>24 hours a day, 7 days a week</b>. Whether
              you&apos;re arriving late at night or in the early hours of the
              morning, our flexible check-in policy ensures that you can rest
              and recharge whenever you need to.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const BookByHoursSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight3} alt="book-by-hours" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3">Book by the Hours</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100%" : "80%"}>
            <Typography>
              Our flexible booking system means you only pay for the hours you
              stay.
            </Typography>
            <Typography>
              You can either book <b>1, 3, 6, or 12 hours*</b> at our hotels.
              And no worries, you can always top up hours if you want to. The
              hours start upon check-in, ensuring that you get the most value
              out of your stay.
            </Typography>
            <Typography color={theme.palette.CtColorScheme.grey400}>
              *Hours options may vary depending on location.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const LuggageLockerSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight4} alt="best-location" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box position={"relative"}>
            <Typography variant="h3">Luggage Storage Locker</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100%" : "80%"}>
            <Typography>
              Each of our <b>hotel guests</b> enjoys a complimentary storage
              locker in their capsule, freeing up space in their capsule for a
              more comfortable stay.
            </Typography>
            <Typography>
              For <b>external visitors,</b> we provide a standalone luggage
              storage service too! Rent a locker from as low as RM30 and explore
              the airport unencumbered, knowing your luggage is safe with us.
            </Typography>
            <Stack marginBottom={isHandheldDevice ? 0 : 2}>
              <Divider
                sx={{
                  bgcolor: theme.palette.primary.main,
                  height: "5px",
                  marginBottom: 1,
                  border: 0,
                }}
              />
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: theme.palette.primary.main }}
              >
                Available for Standalone Booking!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const ShowerServiceSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight5} alt="best-location" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box position={"relative"}>
            <Typography variant="h3">Refreshing Shower Service</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100%" : "80%"}>
            <Typography>
              We provide <b>restrooms with rain showers</b> for our guests,
              along with necessities like a shower towel and a dental kit.
            </Typography>
            <Typography>
              We also offer shower-only services for <b>non-guests,</b> starting
              at just RM50 per use that comes with a temporary locker to store
              your luggage.
            </Typography>
            <Stack marginBottom={isHandheldDevice ? 0 : 2}>
              <Divider
                sx={{
                  bgcolor: theme.palette.primary.main,
                  height: "5px",
                  marginBottom: 1,
                  border: 0,
                }}
              />
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: theme.palette.primary.main }}
              >
                Available for Standalone Booking!
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const GenderSpecificSection = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid
        container
        marginY={8}
        justifyContent={"center"}
        alignItems={"center"}
        rowSpacing={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image src={Highlight6} alt="book-by-hours" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3">Gender- Specific Zones</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} width={isHandheldDevice ? "100% " : "80%"}>
            <Typography>
              While we have mixed zones for our guests to socialise and make
              friends, we also provide{" "}
              <b>dedicated zones (such as female-only zone)</b> to ensure
              maximum comfort and privacy for you.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default HighlightContent;
