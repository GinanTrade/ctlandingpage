import CTIconBlack from "@/assets/icons/general/icon-logo-ct-black.svg";
import ContentWrapper from "../global/ContentWrapper";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import HeaderBottom from "../global/HeaderBottom";

const OTADivider = () => {
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Image src={CTIconBlack} alt="ct-icon-black" />}
        middleComponent={
          <></>
          // <Typography>
          //   Starting from <b>RM95</b>
          // </Typography>
        }
        rightComponent={
          <></>
          // <Typography textAlign={"right"}>
          //   Overall ratings <b>7.8/10</b> on OTAs
          // </Typography>
        }
      />
    </ContentWrapper>
  );
};

export default OTADivider;
