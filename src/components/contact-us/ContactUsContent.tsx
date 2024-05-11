import { IContactUs } from "@/models/Contact";
import { handleConvertContactUs } from "@/utils/functions";
import { Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ContentWrapper from "../global/ContentWrapper";
import {
  Call,
  CallOutlined,
  EmailOutlined,
  MapOutlined,
} from "@mui/icons-material";

const ContactUsContent = () => {
  const [hotelContact, setHotelContact] = useState<IContactUs[]>([]);
  const [otherContact, setOtherContact] = useState<IContactUs[]>([]);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE}/api/contacts?populate=*`;

    // setIsLoadingImage(true);
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.data;

        const formattedContact: IContactUs[] = data.map((data: any) =>
          handleConvertContactUs(data)
        );

        setHotelContact(formattedContact.filter((contact) => contact.terminal));

        setOtherContact(
          formattedContact.filter((contact) => !contact.terminal)
        );
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <ContentWrapper noMarginTop>
      <ContactUsComponent
        title={"For Booking Enquiries and Reservation-related Matters"}
        contacts={hotelContact}
      />
      <ContactUsComponent title={"Other Enquiries"} contacts={otherContact} />
    </ContentWrapper>
  );
};

const ContactUsComponent = (props: {
  title: string;
  contacts: IContactUs[];
}) => {
  return (
    <Grid container borderTop={1} paddingY={8} columnSpacing={2} rowSpacing={4}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Typography variant="h3" maxWidth={"530px"}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid
          container
          columnSpacing={3}
          rowSpacing={{ xs: 8, sm: 8, md: 5, lg: 5, xl: 5 }}
        >
          {props.contacts.map((contact, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={contact.icon} />
              <Typography variant="h6" fontWeight={700} marginY={2}>
                {contact.name} {contact.terminal ? `@ ${contact.terminal}` : ""}
              </Typography>
              <Stack spacing={1} marginY={2}>
                {contact.phone && (
                  <Stack direction={"row"} spacing={1}>
                    <CallOutlined /> <Typography>{contact.phone}</Typography>
                  </Stack>
                )}
                <Stack direction={"row"} spacing={1}>
                  <EmailOutlined /> <Typography>{contact.email}</Typography>
                </Stack>
                {contact.address && (
                  <Stack direction={"row"} spacing={1}>
                    <MapOutlined />{" "}
                    <Typography maxWidth={"300px"}>
                      {contact.address}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUsContent;
