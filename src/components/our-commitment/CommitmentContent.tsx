import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Footer from "../global/Footer";
import HeaderBottom from "../global/HeaderBottom";
import { KeyboardArrowDown } from "@mui/icons-material";

const recurringTexts = ["/04", "Our Commitment"];

const CommitmentContent = () => {
  return (
    <>
      <ContentWrapper noMarginTop>
        <BestRateSection />
        <ContactlessServiceSection />
        {/* <FlexibleCancellationSection /> */}
        <CommitedCleanSection />
      </ContentWrapper>
      <Footer />
    </>
  );
};

const BestRateSection = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid container marginY={isHandheldDevice ? "100px" : 8}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3" maxWidth={"300px"} marginBottom={3}>
            Best Rate Guarantee
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} maxWidth={"1000px"}>
            <Typography>
              Book directly through our official website and be assured that you
              will receive the best rate! <b>No Hidden Fees</b> - What you see
              is what you pay. No additional hidden fees and service charge.
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              How are we assured?
            </Typography>
            <Typography>
              If you find a lower available rate on other websites, we will
              match their price. Simply submit an email to us and our team will
              match the price after we complete the verification.
            </Typography>
            <Accordion elevation={0}>
              <AccordionSummary sx={{ padding: 0 }}>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography fontSize={"15px"} color={"primary"}>
                    Terms and Conditions
                  </Typography>
                  <KeyboardArrowDown color="primary" />
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ border: 2, padding: 0 }}>
                <Box
                  display="flex"
                  alignItems={"center"}
                  bgcolor={theme.palette.CtColorScheme.yellow500}
                  paddingX={3}
                  paddingY={3}
                  borderBottom={2}
                >
                  <Typography fontSize={"20px"} fontWeight={600}>
                    Terms & Conditions: Price Matching
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems={"center"}
                  bgcolor={theme.palette.CtColorScheme.neon200}
                  paddingX={3}
                  paddingY={3}
                >
                  <Typography
                    fontSize={"16px"}
                    sx={{
                      "& ol": { paddingLeft: "20px" },
                      "& li": { marginBottom: "10px" },
                    }}
                  >
                    <ol>
                      <li>
                        The initial reservation must be made on our partenered
                        online travel site (Agoda.com, Booking.com, Expedia.com,
                        Traveloka.com, Tiket.com, and Trip.com), and excluding
                        travel agents.
                      </li>
                      <li>
                        Competing rate strictly refers to rates booked on any of
                        the aforementioned sites. it must be for thhe same
                        hotel, room type, number of guests, dates length of stay
                        and rate rules.
                      </li>
                    </ol>
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

const ContactlessServiceSection = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid container marginY={isHandheldDevice ? "100px" : 8}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3" maxWidth={"300px"} marginBottom={3}>
            Contactless Services
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} maxWidth={"1000px"}>
            <Typography variant="h6" fontWeight={600}>
              No queues. Minimal contact and risks.
            </Typography>
            <Typography>
              We provide self-collection and contactless check-in for all
              guests. Kindly email us 1 day prior to your arrival for
              contactless check-in and self-collection arrangements.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

// const FlexibleCancellationSection = () => {
//   const theme = useTheme();
//   const isHandheldDevice = useMediaQuery("(max-width:1050px)");
//   return (
//     <>
//       <HeaderBottom
//         leftComponent={<></>}
//         middleComponent={<></>}
//         rightComponent={<></>}
//       />
//       <Grid container marginY={isHandheldDevice ? "100px" : 8}>
//         <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
//           <Typography variant="h3" maxWidth={"300px"} marginBottom={3}>
//             Flexible Cancellation
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
//           <Stack spacing={3} maxWidth={"1000px"}>
//             <Typography>
//               When you book directly through our website, you get to enjoy
//               flexible cancellation privileges, which allow you to cancel your
//               booking up to 1 day before your arrival.{" "}
//               <b>No cancellation fees</b>.
//             </Typography>
//             <Typography variant="h6" fontWeight={600}>
//               Flight Cancellation
//             </Typography>
//             <Typography>
//               If your flight has been cancelled by the airline, you can email
//               and submit to us the supporting document to be entitled for the
//               free cancellation.
//             </Typography>
//             <Stack>
//               <Typography>Alternatively, you may choose to:</Typography>
//               <Typography>
//                 <b>Option 1:</b> Convert your stay to CapsuleCredits
//               </Typography>
//               <Typography>
//                 <b>Option 2:</b> Keep your booking(s) up to a 12-month period.
//               </Typography>
//             </Stack>
//             <Typography>
//               For more cancellation related queries, kindly visit our FAR -
//               Cancellation.
//             </Typography>
//           </Stack>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

const CommitedCleanSection = () => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <HeaderBottom
        leftComponent={<></>}
        middleComponent={<></>}
        rightComponent={<></>}
      />
      <Grid container marginY={isHandheldDevice ? "100px" : 8}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h3" maxWidth={"300px"} marginBottom={3}>
            Commited to Clean
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack spacing={3} maxWidth={"1000px"}>
            <Typography>
              CapsuleTransit is committed to ensuring that our guests&apos;
              health and safety remain a priority, especially during this time.
              That is why we have implemented these procedures as preventive and
              protective measures.
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Health & Safety Protocols
            </Typography>
            <Typography
              fontSize={"16px"}
              sx={{
                "& ol": { paddingLeft: "20px", marginTop: 0 },
                "& li": { marginBottom: "10px" },
              }}
            >
              <ol>
                <li>
                  We record all of our crew&apos;s health conditions and
                  temperature daily.
                </li>
                <li>
                  All staff will undergo a temperature check before the start of
                  each shift. Any staff with a temperature of 37.5°C and above
                  will not be permitted into the hotel and will be advised to
                  self-quarantine and visit the hospital for a checkup.
                </li>
                <li>
                  All guests must have their temperature scanned at the
                  reception before entering the premise. Any guest with a
                  temperature of 37.5°C and above will not be permitted into the
                  hotel.
                </li>
              </ol>
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Sanitising & Cleaning Protocols
            </Typography>
            <Typography
              fontSize={"16px"}
              sx={{
                "& ol": { paddingLeft: "20px", marginTop: 0 },
                "& li": { marginBottom: "10px" },
              }}
            >
              <ol>
                <li>
                  We sanities and disinfect each Capsule room upon every
                  check-out.
                </li>
                <li>
                  Our hotel property, common areas and facilities are sanitised
                  every 2 hours.
                </li>
                <li>
                  Hand sanitisers are strategically placed all over the hotel.
                </li>
              </ol>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CommitmentContent;
