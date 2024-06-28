import HeaderTop from "@/components/global/HeaderTop";
import { IArticle } from "@/models/Article";
import { handleConvertArticle } from "@/utils/functions";
import { ChevronRight, DateRange } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import Image from "next/image";
import { format } from "date-fns";
import { APIHeader } from "@/api/Header";

const DetailedNewsOthers = (props: { id: number }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const router = useRouter();
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/articles?populate=*`;

    // setIsLoadingImage(true);
    axios
      .get(apiUrl, APIHeader)
      .then((response) => {
        const data = response.data.data;

        const formattedArticle = data.map((data: any) =>
          handleConvertArticle(data, false)
        );

        setArticles(formattedArticle);
      })
      .catch((response) => console.log(response));
    // .finally(() => setIsLoadingImage(false));
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"} marginBottom={"120px"}>
      <HeaderTop title="Related Articles" paddingBottom={2}>
        <Box display={"flex"} width={isHandheldDevice ? "70px" : "100%"}>
          <Button onClick={() => router.push("/news")}>
            <Typography variant="h6" color={"primary"} fontWeight={600}>
              View All News
            </Typography>
            <ChevronRight />
          </Button>
        </Box>
      </HeaderTop>
      <Stack direction={"row"} width={"100%"} spacing={3}>
        {articles
          .filter((article) => article.id !== props.id)
          .slice(0, 3)
          .map((article, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              width={"33%"}
            >
              <img width={"100%"} height={"400px"} src={article.thumbnailUrl} />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"start"}
                width={"100%"}
                marginTop={1}
              >
                <Typography variant="h5" maxWidth={"460px"}>
                  {article.title}
                </Typography>
                <IconButton
                  onClick={() => router.push(`/news/${article.id}`)}
                  sx={{ transform: "scaleX(-1)" }}
                >
                  <Image
                    src={IconArrowLeft}
                    alt="arrow-left"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                marginTop={2}
                color={"grey"}
              >
                <DateRange />
                <Typography color={"grey"}>
                  {format(article.updatedAt, "dd MMM yyyy")}
                </Typography>
              </Stack>
            </Box>
          ))}
      </Stack>
    </Box>
  );
};
export default DetailedNewsOthers;
