import { APIHeader } from "@/api/Header";
import { displayThousands } from "@/utils/functions";
import { Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const CSRData = () => {
  const [csrData, setCSRData] = useState({
    donationAmount: 0,
    peopleInNeed: 0,
    peopleHelped: 0,
  });

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/csr-number`;

    axios
      .get(apiUrl, APIHeader)
      .then((response) => {
        const data = response.data.data.attributes;
        const convertedData = {
          donationAmount: data.donationAmount,
          peopleHelped: data.peopleHelped,
          peopleInNeed: data.peopleInNeed,
        };
        setCSRData(convertedData);
      })
      .catch(() => {});
  }, []);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      rowSpacing={4}
      paddingY={4}
      borderBottom={1}
    >
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="h3">
            RM <CountUp end={csrData.donationAmount} duration={2} />
          </Typography>
          <Typography>Donation Made as of April 2024</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="h3">
            <CountUp end={csrData.peopleHelped} duration={2} />
          </Typography>
          <Typography>Total of Donation Made</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="h3">
            <CountUp end={csrData.peopleInNeed} duration={2} />
          </Typography>
          <Typography>people in need</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CSRData;
