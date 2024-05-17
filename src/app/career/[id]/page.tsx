"use client";

import ContentWrapper from "@/components/global/ContentWrapper";
import { IBreadCrumbs } from "@/components/global/hotel/HotelIntro";
import { DynamicParams } from "@/models/NextJSDynamicParams";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavBar from "@/components/global/NavBar";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "@mui/icons-material";
import Footer from "@/components/global/Footer";

const jobDesc = {
  haveTo: [
    "Be a caring friendly host to all who walk through our doors",
    "Keep clean and be a task-ninja, it's non-negotiable",
    "Take the pressure so you can turn into a diamond and be cool as cucumber during challenging situations",
  ],
  howTo: [
    "Reporting to the Hotel Supervisor directly and indirectly to the Operations Manager",
    "Being assigned to the Front Desk but will occasionally to be rotated cross-departments to 'say hi' to office colleagues and learn to do what they do ",
  ],
  personality: [
    "Think your persona mantra is the same as the requirements above and love hands-on-work",
    "Are a Malaysian citizen above 18 years-old",
  ],
  benefits: [
    "Above all else, a career for a lifetime",
    "Internal and External training up to your skills and knowledge",
  ],
};

const CareerDetailed = ({ params: { id } }: DynamicParams) => {
  const router = useRouter();
  const jobTitle = id.toString().split("%20").join(" ");
  const breadCrumbsContent: IBreadCrumbs[] = [
    { name: "Home", url: "/" },
    { name: "Career", url: "/career" },
    { name: jobTitle, url: "" },
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
        <Box width={"100%"} paddingY={"100px"} borderBottom={1}>
          <Button
            onClick={() => router.back()}
            sx={{ padding: 0, marginBottom: 3 }}
          >
            <ChevronLeft />
            <Typography variant="h6" color={"primary"} fontWeight={600}>
              Back
            </Typography>
          </Button>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Typography variant="h3">{jobTitle}</Typography>
              <Typography variant="h6" fontWeight={700}>
                at CapsuleTransit
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Stack spacing={"50px"}>
                <DescriptionComponent
                  title={"You'll have to..."}
                  desc={jobDesc.haveTo}
                />
                <DescriptionComponent
                  title={"How you'll do the above by..."}
                  desc={jobDesc.howTo}
                />
                <DescriptionComponent
                  title={"We want to meet you if you..."}
                  desc={jobDesc.personality}
                />
                <DescriptionComponent
                  title={"Benefits"}
                  desc={jobDesc.benefits}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={"100px"}
        >
          <Typography variant="h3" marginBottom={8}>
            Apply Now!
          </Typography>
          <Typography fontWeight={600}>
            Send your CV to our email:{" "}
            <a
              href="mailto:career@capsuletransit.com"
              style={{ paddingTop: 4, paddingBottom: 4 }}
            >
              career@capsuletransit.com
            </a>
          </Typography>

          <Typography variant="h6" fontWeight={600} marginTop={"40px"}>
            We look forward to working with you!
          </Typography>
        </Box>
      </ContentWrapper>
      <Footer />
    </>
  );
};

const DescriptionComponent = (props: { title: string; desc: string[] }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={700}>
        {props.title}
      </Typography>
      <ul>
        {props.desc.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default CareerDetailed;
