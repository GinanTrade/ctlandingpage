import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HeaderBottom from "../global/HeaderBottom";
import Image from "next/image";

import CapsuleTransitLogo from "./images/logo-display-capsuletransit@2x.png";
import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useRouter } from "next/navigation";

const jobPositions = [
  "Hotel Manager",
  "Front Office",
  "Commis",
  "Lounge Host",
  "Steward Crew",
  "Housekeeping Attendant",
];

const CareerContent = () => {
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box display={"flex"} flexDirection={"column"} marginBottom={6}>
      <HeaderBottom
        leftComponent={<Typography>Job Opening</Typography>}
        middleComponent={<Typography>CapsuleTransit</Typography>}
        rightComponent={
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Typography>{jobPositions.length} Positions</Typography>
          </Box>
        }
      />
      <Grid container marginY={4}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Image
            src={CapsuleTransitLogo}
            alt="CapsuleTransit"
            style={{ width: "300px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Stack width={"100%"} alignItems={"flex-end"}>
            {jobPositions.map((job, index) => (
              <Stack
                key={index}
                direction={"row"}
                justifyContent={"space-between"}
                width={isHandheldDevice ? "100%" : "700px"}
              >
                <Typography variant="h5">{job}</Typography>
                <Button onClick={() => router.push(`/career/${job}`)}>
                  <Image src={IconArrowRight} alt="CT-Right-Up" />
                </Button>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerContent;
