import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
import { DateRange } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import NewsImage1 from "./images/news-1.jpg";
import NewsImage2 from "./images/news-2.jpg";
import NewsImage3 from "./images/news-3.jpg";
import NewsImage4 from "./images/news-4.jpg";
import NewsImage5 from "./images/news-5.jpg";
import NewsImage6 from "./images/news-6.jpg";
import IconArrowLeft from "@/assets/icons/general/btn-icon-arrow-left.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleConvertArticle } from "@/utils/functions";
import { IArticle } from "@/models/Article";
import { format } from "date-fns";
import Link from "next/link";

const contents = [
  {
    title: "Penginapan Transit Kapsul di KLIA",
    url: "/",
    date: "26 Jun 2023",
    image: NewsImage6,
  },
  {
    title: "Capsule hotels in Malaysia",
    url: "/",
    date: "4 Mar 2020",
    image: NewsImage5,
  },
  {
    title:
      "CapsuleTransit unveils new 70-pod airside hotel at Kuala Lumpur International",
    url: "/",
    date: "10 Feb 2020",
    image: NewsImage4,
  },
  {
    title: "Could Capsule Hotels In Airports Reinvent Long Layovers?",
    url: "/",
    date: "5 Nov 2019",
    image: NewsImage3,
  },
  {
    title: "More choices to take a nap at klia2",
    url: "/",
    date: "12 Oct 2019",
    image: NewsImage2,
  },
  {
    title:
      "'Pod-hotel' group CHG unveils modular room design for airport travellers",
    url: "/",
    date: "10 Jan 2019",
    image: NewsImage1,
  },
];

const NewsRoomContent = () => {
  const theme = useTheme();
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/articles?populate=*`;

    // setIsLoadingImage(true);
    axios
      .get(apiUrl)
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
    <Box
      display={"flex"}
      flexDirection={"column"}
      marginTop={10}
      marginBottom={6}
    >
      {articles.map((article, index) => (
        <ContentWrapper key={index} noMarginTop>
          <Grid
            container
            borderTop={1}
            paddingTop={3}
            paddingBottom={10}
            // columnSpacing={8}
            rowSpacing={2}
          >
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <img src={article.thumbnailUrl} alt={article.title} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <Stack
                justifyContent={"space-between"}
                height={"100%"}
                spacing={1}
              >
                <Typography variant="h4" maxWidth={"660px"}>
                  {article.title}
                </Typography>
                <Stack
                  direction={"row"}
                  spacing={1}
                  color={theme.palette.CtColorScheme.grey400}
                >
                  <DateRange />
                  <Typography color={theme.palette.CtColorScheme.grey400}>
                    {format(article.updatedAt, "dd MMM yyyy")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
              <Box display={"flex"} justifyContent={"end"}>
                <Link
                  href={{
                    pathname: `/news/${article.id}`,
                  }}
                >
                  <Image src={IconArrowLeft} alt="arrow-left" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </ContentWrapper>
      ))}
    </Box>
  );
};

export default NewsRoomContent;
