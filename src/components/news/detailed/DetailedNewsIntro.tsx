import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IBreadCrumbs } from "@/components/global/hotel/HotelIntro";
import { ChevronLeft, DateRange } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const DetailedNewsIntro = (props: {
  breadCrumbsContent: IBreadCrumbs[];
  title: string;
  updatedDate: Date;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingY={3}
      position={"relative"}
    >
      <Breadcrumbs separator={<KeyboardArrowRightIcon fontSize="small" />}>
        {props.breadCrumbsContent.map((content, index) => {
          return index !== props.breadCrumbsContent.length - 1 ? (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={content.url}
            >
              {content.name}
            </Link>
          ) : (
            <Typography key={index}>{content.name}</Typography>
          );
        })}
      </Breadcrumbs>

      <Box width={"100%"} paddingY={10}>
        <Box display={"flex"} width={isHandheldDevice ? "70px" : "33%"}>
          <Button onClick={() => router.back()}>
            <ChevronLeft />
            <Typography variant="h6" color={"primary"} fontWeight={600}>
              Back
            </Typography>
          </Button>
        </Box>
        <Typography variant="h3" maxWidth={"930px"}>
          {props.title}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          marginTop={2}
        >
          <DateRange />
          <Typography> {format(props.updatedDate, "dd MMM yyyy")}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailedNewsIntro;
