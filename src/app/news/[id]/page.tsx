"use client";

import ContentWrapper from "@/components/global/ContentWrapper";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/NavBar";
import { IBreadCrumbs } from "@/components/global/hotel/HotelIntro";
import DetailedNewsContent from "@/components/news/detailed/DetailedNewsContent";
import DetailedNewsHero from "@/components/news/detailed/DetailedNewsHero";
import DetailedNewsIntro from "@/components/news/detailed/DetailedNewsIntro";
import DetailedNewsOthers from "@/components/news/detailed/DetailedNewsOthers";
import { IArticle } from "@/models/Article";
import { DynamicParams } from "@/models/NextJSDynamicParams";
import { handleConvertArticle } from "@/utils/functions";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailedArticlePage = ({ params: { id } }: DynamicParams) => {
  const [article, setArticle] = useState<IArticle>();
  const [scrollPosition, setScrollPosition] = useState(0);

  const breadCrumbsContent: IBreadCrumbs[] = [
    { name: "Home", url: "/" },
    { name: "Newsroom", url: "/news" },
    { name: id.toString(), url: "" },
  ];

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/articles/${id}?populate=*`;

    // setIsLoadingImage(true);
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data;

        const formattedArticle = handleConvertArticle(data, true);

        setArticle(formattedArticle);
      })
      .catch((response) => console.log(response));
    // .finally(() => setIsLoadingImage(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar defaultBlack />
      {article && (
        <>
          <DetailedNewsHero
            image={article.thumbnailUrl}
            scrollPosition={scrollPosition}
          />
          <ContentWrapper noMarginTop>
            <DetailedNewsIntro
              breadCrumbsContent={breadCrumbsContent}
              title={article.title}
              updatedDate={article.updatedAt}
            />
            <DetailedNewsContent content={article.content} />
            <DetailedNewsOthers id={id} />
          </ContentWrapper>
        </>
      )}
      <Footer />
    </>
  );
};

export default DetailedArticlePage;
