import {
  Box,
  Grid,
  Stack,
  Typography,
  duration,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { featuresEnum } from "@/constant/Enums";
import { DurationIcons } from "@/constant/Icons";
import Image, { StaticImageData } from "next/image";
import ContentWrapper from "../ContentWrapper";
import HeaderBottom from "../HeaderBottom";

export interface IRoomTypes {
  image: StaticImageData;
  category: string;
  zone?: string;
  bedType: string;
  capacity: string;
}

const HotelRoomType = (props: {
  header: string[];
  timeIcons: featuresEnum[];
  title: string;
  roomTypes: IRoomTypes[];
}) => {
  const theme = useTheme();
  return (
    <ContentWrapper>
      <HeaderBottom
        leftComponent={<Typography>{props.header[0]}</Typography>}
        middleComponent={
          <Typography>
            {props.header[1]} <b>{props.roomTypes.length}</b>
          </Typography>
        }
        rightComponent={
          <Stack direction={"row"} justifyContent={"flex-end"} marginBottom={1}>
            {props.timeIcons.map((duration, index) => {
              return (
                DurationIcons.duration(duration) !== "" && (
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography marginRight={"3px"}>{duration}</Typography>
                    <Image
                      src={DurationIcons.duration(duration)}
                      alt="feature"
                      width={20}
                      height={20}
                    />
                    {index !== props.timeIcons.length - 1 && (
                      <Typography marginX={1}>/</Typography>
                    )}
                  </Stack>
                )
              );
            })}
          </Stack>
        }
      />
      <Grid container direction={"row"} marginTop={8} rowGap={5}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Typography variant="h3" width={"70%"}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={{ xs: 8, sm: 8, md: 5, lg: 5, xl: 5 }}
          >
            {props.roomTypes.map((roomType, index) => (
              <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Image
                    src={roomType.image}
                    alt={roomType.category}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Typography variant="h5" marginTop={3}>
                    {roomType.category}
                  </Typography>
                  {roomType.zone && (
                    <Typography variant="h5">{roomType.zone}</Typography>
                  )}

                  <Stack direction={"row"} spacing={1} marginTop={1}>
                    <Typography color={theme.palette.CtColorScheme.grey400}>
                      {roomType.bedType}
                    </Typography>
                    <Typography color={"primary"}>/</Typography>
                    <Typography color={theme.palette.CtColorScheme.grey400}>
                      {roomType.capacity}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default HotelRoomType;
