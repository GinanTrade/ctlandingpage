import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderTop from "../HeaderTop";
import Image, { StaticImageData } from "next/image";
import ContentWrapper from "../ContentWrapper";

import EyeIcon from "@/assets/icons/general/icon-view-black.svg";

export interface IHotelGalleryImages {
  image: StaticImageData;
  category: string;
}

const HotelGallery = (props: {
  textContents: string[];
  images: IHotelGalleryImages[];
}) => {
  const theme = useTheme();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const [imageDisplay, setImageDisplay] = useState<string>(
    isHandheldDevice ? props.textContents[1] : props.textContents[2]
  );
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <ContentWrapper>
      <HeaderTop title={props.textContents[0]} marginBottom={3}>
        {!isHandheldDevice && (
          // <>
          //   <Button
          //     onClick={() => setImageDisplay(props.textContents[1])}
          //     sx={{
          //       color: imageDisplay === props.textContents[2] ? "black" : "",
          //     }}
          //   >
          //     {props.textContents[1]}
          //     {imageDisplay === props.textContents[2] && (
          //       <Image
          //         src={EyeIcon}
          //         alt={"eye-icon"}
          //         style={{ marginLeft: 5 }}
          //       />
          //     )}
          //   </Button>
          //   <Typography variant="h6" color={"grey"}>
          //     /
          //   </Typography>
          //   <Button
          //     onClick={() => setImageDisplay(props.textContents[2])}
          //     sx={{
          //       color: imageDisplay === props.textContents[1] ? "black" : "",
          //     }}
          //   >
          //     {props.textContents[2]}
          //     {imageDisplay === props.textContents[1] && (
          //       <Image
          //         src={EyeIcon}
          //         alt={"eye-icon"}
          //         style={{ marginLeft: 5 }}
          //       />
          //     )}
          //   </Button>
          // </>
          <Select
            size="small"
            value={imageDisplay}
            onChange={(event) => setImageDisplay(event.target.value)}
            startAdornment={
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginX={1}
              >
                <Image src={EyeIcon} alt="eye-icon" />
              </Box>
            }
            sx={{ borderRadius: 0 }}
          >
            <MenuItem value={props.textContents[1]}>
              {props.textContents[1]}
            </MenuItem>
            <MenuItem value={props.textContents[2]}>
              {props.textContents[2]}
            </MenuItem>
          </Select>
        )}
      </HeaderTop>
      <FormGroup row sx={{ marginBottom: 5 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.length === 0}
              onChange={() => setFilter([])}
              sx={{
                color: theme.palette.CtColorScheme.yellow500,
                "&.Mui-checked": {
                  color: theme.palette.CtColorScheme.yellow500,
                },
              }}
            />
          }
          label="All"
        />
        {Array.from(new Set(props.images.map((image) => image.category))).map(
          (category, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={filter.includes(category)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setFilter((prevValue) => [...prevValue, category]);
                    } else {
                      setFilter((prevValue) =>
                        prevValue.filter((filter) => filter !== category)
                      );
                    }
                  }}
                  sx={{
                    color: theme.palette.CtColorScheme.yellow500,
                    "&.Mui-checked": {
                      color: theme.palette.CtColorScheme.yellow500,
                    },
                  }}
                />
              }
              label={category}
            />
          )
        )}
      </FormGroup>
      {imageDisplay === props.textContents[1] && !isHandheldDevice ? (
        <Grid container spacing={4}>
          {props.images
            .filter((image) => {
              if (filter.length === 0) {
                return true;
              } else {
                return filter.includes(image.category);
              }
            })
            .map((image, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                height={isHandheldDevice ? "200px" : "400px"}
              >
                <Box
                  display={"flex"}
                  width={"100%"}
                  height={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  overflow={"hidden"}
                >
                  <Image
                    src={image.image}
                    alt={`airside-${index}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      ) : (
        <Stack
          direction={"row"}
          alignItems={"center"}
          maxWidth={"100%"}
          spacing={3}
          paddingBottom={1}
          sx={{ overflowX: "auto", overflowY: "hidden" }}
        >
          {props.images
            .filter((image) => {
              if (filter.length === 0) {
                return true;
              } else {
                return filter.includes(image.category);
              }
            })
            .map((image, index) => (
              <Box key={index} width={"100%"} height={"50vh"}>
                <Image
                  src={image.image}
                  alt={`airside-${index}`}
                  style={{
                    maxWidth: "600px",
                    width: "auto",
                    height: "100%",
                    // width: "30vw",
                    // height: "100%",
                  }}
                />
              </Box>
            ))}
        </Stack>
      )}
    </ContentWrapper>
  );
};

export default HotelGallery;
