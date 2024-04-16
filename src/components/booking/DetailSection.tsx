import {
  GuestDetailInitial,
  IGuestDetail,
  IPaymentInfo,
  IRoomBooking,
} from "@/models/Booking";
import {
  Autocomplete,
  Box,
  Button,
  ButtonBase,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormikProps, useFormik } from "formik";
import countries from "./CountryList";
import MuiPhoneNumber from "material-ui-phone-number";
import PaymentOverview from "./PaymentOverview";
import Image from "next/image";

import IPay88Image from "./images/ipay88.png";
import CTRight from "@/assets/icons/general/btn-icon-arrow-left.svg";

const contentWidth = "900px";

const textFieldProps = {
  ".MuiInputBase-input": {
    paddingY: "10px",
  },
};

const genders = ["Male", "Female", "Others"];
const identifications = ["MyKad", "Passport"];

const DetailSection = (props: {
  roomBookings: IRoomBooking[];
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
  formik: FormikProps<IGuestDetail>;
  consentSigned: boolean;
  handleConsentSignChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={contentWidth}
        paddingY={10}
        borderBottom={1}
      >
        <Typography variant="h4">Guest Information</Typography>
      </Box>
      <GuestDetailForm formik={props.formik} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={contentWidth}
        paddingY={10}
        borderBottom={1}
      >
        <Typography variant="h4">Payment</Typography>
      </Box>
      <PaymentOverview {...props} />
      <DetailPageFooter
        consentSigned={props.consentSigned}
        handleConsentSignChange={props.handleConsentSignChange}
      />
      <ProceedPaymentSection consentSigned={props.consentSigned} />
    </Box>
  );
};

const GuestDetailForm = (props: { formik: FormikProps<IGuestDetail> }) => {
  return (
    <form onSubmit={props.formik.handleSubmit}>
      <Grid
        container
        width={contentWidth}
        paddingY={5}
        columnSpacing={3}
        rowGap={2}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              First Name (as per IC/Passport)
            </Typography>
            <TextField
              variant="outlined"
              name="firstName"
              value={props.formik.values.firstName}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            />
            {props.formik.errors.firstName &&
              props.formik.touched.firstName && (
                <FormHelperText error id="standard-weight-helper-text-name">
                  {props.formik.errors.firstName}
                </FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Last Name (as per IC/Passport)
            </Typography>
            <TextField
              name="lastName"
              value={props.formik.values.lastName}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            />
            {props.formik.errors.lastName && props.formik.touched.lastName && (
              <FormHelperText error id="standard-weight-helper-text-name">
                {props.formik.errors.lastName}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Gender
            </Typography>
            <Select
              name="gender"
              value={props.formik.values.gender}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            >
              {genders.map((gender, index) => (
                <MenuItem key={index} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
            {props.formik.errors.gender && props.formik.touched.gender && (
              <FormHelperText error id="standard-weight-helper-text-name">
                {props.formik.errors.gender}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Nationality
            </Typography>
            <Autocomplete
              options={countries}
              value={props.formik.values.nationality}
              onChange={(event: any, newValue: string | null) => {
                props.formik.setFieldValue("nationality", newValue || "");
              }}
              ListboxProps={{ style: { maxHeight: "200px" } }}
              sx={{
                ".MuiInputBase-root": {
                  paddingY: "2px",
                },
                input: {
                  paddingY: 0,
                },
              }}
              renderInput={(params) => (
                <TextField variant="outlined" {...params} />
              )}
            />
            {props.formik.errors.nationality &&
              props.formik.touched.nationality && (
                <FormHelperText error id="standard-weight-helper-text-name">
                  {props.formik.errors.nationality}
                </FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Identification
            </Typography>
            <Select
              name="identification"
              value={props.formik.values.identification}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            >
              {identifications.map((identification, index) => (
                <MenuItem key={index} value={identification}>
                  {identification}
                </MenuItem>
              ))}
            </Select>
            {props.formik.errors.identification &&
              props.formik.touched.identification && (
                <FormHelperText error id="standard-weight-helper-text-name">
                  {props.formik.errors.identification}
                </FormHelperText>
              )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Your{" "}
              {props.formik.values.identification === "MyKad"
                ? "MyKad"
                : "Passport"}{" "}
              Number
            </Typography>
            <TextField
              name="idNumber"
              value={props.formik.values.idNumber}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            />
            {props.formik.errors.idNumber && props.formik.touched.idNumber && (
              <FormHelperText error id="standard-weight-helper-text-name">
                {props.formik.errors.idNumber}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Email
            </Typography>
            <TextField
              name="email"
              value={props.formik.values.email}
              onChange={props.formik.handleChange}
              sx={textFieldProps}
            />
            <Typography>
              We&apos;ll send a confirmation email to this address.
            </Typography>
            {props.formik.errors.email && props.formik.touched.email && (
              <FormHelperText error id="standard-weight-helper-text-name">
                {props.formik.errors.email}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <FormControl fullWidth variant="outlined">
            <Typography fontWeight={700} marginBottom={1}>
              Phone Number
            </Typography>
            <MuiPhoneNumber
              defaultCountry="my"
              variant="outlined"
              onChange={props.formik.handleChange}
              value={props.formik.values.phone}
              name="phone"
              sx={textFieldProps}
            />
            {props.formik.errors.phone && props.formik.touched.phone && (
              <FormHelperText error id="standard-weight-helper-text-name">
                {props.formik.errors.phone}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

const footerTitle = "Important Information about Your Booking";
const footerDetail =
  "This special discounted rate is non-refundable. If you choose to change or cancel this booking, you will not be refunded any of the payment.";
const footerSelectLabel =
  "By checking this box, I acknowledge that I have read and accept the Rules & Restrictions, Terms of Use, Privacy Policy.";

const iPay88Title = "Secure Payment with ipay88";

const DetailPageFooter = (props: {
  consentSigned: boolean;
  handleConsentSignChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const theme = useTheme();
  return (
    <Grid container width={contentWidth} marginTop={8}>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        <Typography fontWeight={700}>{footerTitle}</Typography>
        <Typography width={"500px"} marginTop={1}>
          {footerDetail}
        </Typography>
        <Stack direction="row" alignItems={"start"} marginTop={3} spacing={1}>
          <Checkbox
            value={props.consentSigned}
            onChange={props.handleConsentSignChange}
            sx={{
              color: theme.palette.CtColorScheme.yellow500,
              "&.Mui-checked": {
                color: theme.palette.CtColorScheme.yellow500,
              },
              "&.MuiCheckbox-root": {
                padding: 0,
              },
            }}
          />
          <Typography>{footerSelectLabel}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
        <Box display={"flex"} justifyContent={"center"} height={"100%"}>
          <Divider orientation="vertical" sx={{ width: "1px" }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Typography fontWeight={700}>{iPay88Title}</Typography>
        <Image src={IPay88Image} alt="ipay88" style={{ marginTop: "20px" }} />
      </Grid>
    </Grid>
  );
};

const ProceedPaymentSection = (props: { consentSigned: boolean }) => {
  const theme = useTheme();
  return (
    <ButtonBase
      disabled={!props.consentSigned}
      sx={{ width: "100%", marginTop: 10 }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderTop={1}
        width={"100%"}
        height={"80px"}
        zIndex={10}
        bottom={0}
        bgcolor={
          props.consentSigned
            ? theme.palette.primary.main
            : theme.palette.CtColorScheme.grey100
        }
      >
        <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
          <Typography variant="h4">All Good, Continue</Typography>
          <Image
            src={CTRight}
            alt="CT-Right-Up"
            style={{
              color: "white",
              width: "60px",
            }}
          />
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default DetailSection;