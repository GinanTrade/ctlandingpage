import {
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FAQs } from "./faqData";
import { useEffect, useState } from "react";

export interface IFAQ {
  title: string;
  description: string;
  icon?: any;
  qna: {
    question: string;
    answer: (string | string[])[];
  }[];
}

export const initialFAQ: IFAQ = {
  description: "",
  qna: [],
  title: "",
};

const FAQDetailedContent = (props: { faqTitle: string }) => {
  const router = useRouter();
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");

  const [selectedFAQTitle, setSelectedFAQTitle] = useState<string>(
    props.faqTitle
  );
  const selectedFAQ = FAQs.filter((faq) => faq.title === selectedFAQTitle)[0];
  // const [selectedFAQ, setSelectedFAQ] = useState<IFAQ>(initialFAQ);

  // useEffect(() => {
  //   setSelectedFAQ(FAQs.filter((faq) => faq.title === props.faqTitle)[0]);
  // }, [selectedFAQTitle, props.faqTitle]);

  return (
    <Stack width={"100%"}>
      <Box width={"100%"} paddingY={"100px"}>
        <Button
          onClick={() => router.back()}
          sx={{ padding: 0, marginBottom: 3 }}
        >
          <ChevronLeft />
          <Typography variant="h6" color={"primary"} fontWeight={600}>
            Back
          </Typography>
        </Button>
        <Typography variant="h3">{selectedFAQTitle}</Typography>
        <Typography marginTop={4}>{selectedFAQ.description}</Typography>
      </Box>
      <Grid container paddingY={2} paddingBottom={"150px"} borderBottom={1}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack width={"80%"} borderTop={1}>
            {FAQs.map((faq, index) => (
              <Button
                key={index}
                onClick={() => setSelectedFAQTitle(faq.title)}
                sx={{
                  justifyContent: "start",
                  color: selectedFAQTitle === faq.title ? "primary" : "black",
                }}
              >
                {faq.title}
                {selectedFAQTitle === faq.title && <ChevronRight />}
              </Button>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} borderBottom={1}>
          {selectedFAQ.qna.map((qna, index) => (
            <Accordion key={index} elevation={0}>
              <AccordionSummary
                expandIcon={<KeyboardArrowDown />}
                sx={{ borderTop: 1, paddingY: 1 }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {qna.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{qna.answer}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};
export default FAQDetailedContent;
