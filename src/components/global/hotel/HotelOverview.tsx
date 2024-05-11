import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../ContentWrapper";
import HeaderBottom from "../HeaderBottom";
import Image from "next/image";

import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useRouter } from "next/navigation";

const HotelOverview = (props: {
  header: string[];
  content: string[];
  image: any;
  illus?: any;
  isInRestricted?: boolean;
}) => {
  const router = useRouter();
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <ContentWrapper noMarginTop>
      <HeaderBottom
        leftComponent={<Typography>{props.header[0]}</Typography>}
        middleComponent={<Typography>{props.header[1]}</Typography>}
        rightComponent={<Typography>{props.header[2]}</Typography>}
      />
      <Grid
        container
        direction={"row-reverse"}
        alignItems={"center"}
        marginTop={8}
        marginBottom={5}
      >
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Image
            src={props.image}
            alt={"landside  -image"}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            width={"100%"}
            paddingRight={5}
          >
            {props.isInRestricted && (
              <Stack marginBottom={isHandheldDevice ? 0 : 2}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: theme.palette.CtColorScheme.pink300 }}
                >
                  Located at Restricted Area
                </Typography>
                <Divider
                  sx={{
                    bgcolor: theme.palette.CtColorScheme.pink300,
                    height: "5px",
                  }}
                />
              </Stack>
            )}
            <Typography variant="body2" marginTop={2}>
              {props.content[0]}
            </Typography>
            <Typography
              marginTop={isHandheldDevice ? 1 : 3}
              width={isHandheldDevice ? "100%" : "90%"}
            >
              {props.content[1]}
            </Typography>
            <Box
              display={"flex"}
              width={"100%"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"start"}
              marginTop={4}
            >
              <IconButton
                onClick={() => router.push(props.content[2])}
                sx={{ transform: "scaleX(-1)" }}
              >
                <Image
                  src={IconArrowLeft}
                  alt="arrow-left"
                  style={{ transform: "scaleX(-1)" }}
                />
              </IconButton>
              {props.illus && (
                <Image src={props.illus} alt="capsult-transit-newly-launched" />
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default HotelOverview;
