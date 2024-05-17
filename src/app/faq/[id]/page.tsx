"use client";

import { IBreadCrumbs } from "@/components/global/hotel/HotelIntro";
import { DynamicParams } from "@/models/NextJSDynamicParams";
import { useRouter } from "next/navigation";
import ContentWrapper from "@/components/global/ContentWrapper";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavBar from "@/components/global/NavBar";
import { ChevronLeft } from "@mui/icons-material";
import Footer from "@/components/global/Footer";
import FAQDetailedContent from "@/components/faq/FAQDetailedContent";
import CTButton from "@/components/global/CTButton";

const FAQDetailed = ({ params: { id } }: DynamicParams) => {
  const router = useRouter();
  const faqTitle = id ? id.toString().split("%20").join(" ") : "";
  const breadCrumbsContent: IBreadCrumbs[] = [
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
    { name: faqTitle, url: "" },
  ];

  return (
    <>
      <NavBar defaultBlack />
      <ContentWrapper noMarginTop>
        <Breadcrumbs
          separator={<KeyboardArrowRightIcon fontSize="small" />}
          sx={{ paddingTop: "100px" }}
        >
          {breadCrumbsContent.map((content, index) => {
            return index !== breadCrumbsContent.length - 1 ? (
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
        <FAQDetailedContent faqTitle={faqTitle} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={"200px"}
        >
          <Typography variant="h3" marginBottom={8}>
            Can&apos;t find what you want?
          </Typography>

          <CTButton
            onClick={() => router.push("/contact-us")}
            text="Contact Us"
            variant="secondary"
          />
        </Box>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default FAQDetailed;
