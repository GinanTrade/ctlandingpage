import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

import ImageFoot from "./images/img-footer-home@2x.jpg";

const ImageFooter = () => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Box display={"flex"} marginTop={"170px"}>
      <Image
        src={ImageFoot}
        alt="image-footer"
        style={{
          maxHeight: "600px",
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
export default ImageFooter;
