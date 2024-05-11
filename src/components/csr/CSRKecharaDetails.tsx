import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import CTButton from "../global/CTButton";
import { useRouter } from "next/navigation";

import CSR1 from "./image/img-CSR-01.jpg";
import CSR2 from "./image/img-CSR-02.jpg";
import CSR3 from "./image/img-CSR-03.jpg";
import CSR4 from "./image/img-CSR-04.jpg";
import Image from "next/image";

const CSRImages = [CSR1, CSR2, CSR3, CSR4];

const CSRKecharaDetails = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box borderBottom={1}>
      <Typography variant="h4" marginTop={"60px"}>
        Our idea is simple:
      </Typography>
      <Box display={"flex"} maxWidth={"680px"} marginBottom={"60px"}>
        <Typography variant="h4">
          <b style={{ color: theme.palette.primary.main }}>1RM</b> is donated to
          Kechara Soup Kitchen to feed the homeless from each check-in at
          CapsuleTransit.
        </Typography>
      </Box>
      <CTButton
        onClick={() => router.push("https://kecharasoupkitchen.com/")}
        text="FIND OUT MORE"
        variant="secondary"
      />
      <Stack
        direction={"row"}
        alignItems={"center"}
        maxWidth={"100%"}
        spacing={3}
        marginTop="80px"
        marginBottom="60px"
        sx={{ overflowX: "auto", overflowY: "hidden" }}
      >
        {CSRImages.map((image, index) => (
          <Box key={index} width={"100%"}>
            <Image src={image} alt={"csr-capsule-transit"} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CSRKecharaDetails;
