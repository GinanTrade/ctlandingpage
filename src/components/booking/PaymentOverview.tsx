import { IPaymentInfo, IRoomBooking } from "@/models/Booking";
import { displayThousands } from "@/utils/functions";
import {
  Add,
  ArrowRight,
  Check,
  KeyboardArrowRight,
  Remove,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const contentWidth = "900px";
const mobileWidth = "100%";

const PaymentOverview = (props: {
  roomBookings: IRoomBooking[];
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
  serviceChargePercentage: string;
  handleAddPromotion: (promotionName: string, promotionAmount: string) => void;
}) => {
  return (
    <>
      <RoomPricingSection {...props} />
      <PromotionSection {...props} />
      <TotalBillSection {...props} />
    </>
  );
};

const RoomPricingSection = (props: { roomBookings: IRoomBooking[] }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      paddingY={3}
    >
      {props.roomBookings.map((roomBooking, index) => (
        <Stack
          key={index}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={isHandheldDevice ? "end" : "start"}
          width={"100%"}
        >
          <Stack>
            <Typography variant="h6" fontWeight={700}>
              {roomBooking.roomType}{" "}
              {roomBooking.zone ? `(${roomBooking.zone})` : ""} for{" "}
              {roomBooking.duration} hours
            </Typography>
            <Typography>
              {roomBooking.quantity} X RM{roomBooking.price}
            </Typography>
          </Stack>
          <Typography variant="h6" fontWeight={700}>
            RM
            {displayThousands(roomBooking.sum)}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const PromotionSection = (props: {
  paymentInfo: IPaymentInfo;
  handleAddPromotion: (promotionName: string, promotionAmount: string) => void;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  const theme = useTheme();
  const [isAddPromoPressed, setIsAddPromoPressed] = useState<boolean>(false);
  const [promotionValue, setPromotionValue] = useState<string>("");
  const [promotionDetected, setPromotionDetected] = useState<
    boolean | undefined
  >();

  const handleGetPromotion = () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API}/landing-page/promotions/?promoCode=${promotionValue}`;
    axios
      .get(apiUrl)
      .then((result) => {
        const data = result.data.data;
        if (result.status === 204) {
          setPromotionDetected(false);
        } else {
          setPromotionDetected(true);
          props.handleAddPromotion(promotionValue, data.promoValue);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      paddingY={3}
      alignItems={"start"}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography>Exclude Tax</Typography>
        <Typography>
          RM{displayThousands(props.paymentInfo.sumBeforeDiscount)}
        </Typography>
      </Stack>
      <Button
        onClick={() => setIsAddPromoPressed((value) => !value)}
        sx={{ color: "black", paddingX: 0 }}
      >
        Add Promo Code {isAddPromoPressed ? <Remove /> : <Add />}
      </Button>
      {isAddPromoPressed && (
        <Box display="flex">
          <TextField
            size="small"
            value={promotionValue}
            onChange={(event) => setPromotionValue(event.target.value)}
          />
          <Button
            onClick={handleGetPromotion}
            sx={{ bgcolor: theme.palette.primary.main, color: "black" }}
          >
            <KeyboardArrowRight />
          </Button>

          {promotionDetected === true ? (
            <Box
              display="flex"
              bgcolor={theme.palette.primary.main}
              color={theme.palette.CtColorScheme.blue800}
              alignSelf={"flex-end"}
              marginLeft={1}
            >
              (<Check />) Code Applied!
            </Box>
          ) : (
            promotionDetected === false && (
              <Box
                display="flex"
                color={theme.palette.CtColorScheme.pink300}
                alignItems={"flex-end"}
                marginLeft={1}
              >
                (X) The code is not applicable.
              </Box>
            )
          )}
        </Box>
      )}
      {props.paymentInfo.promotion &&
        props.paymentInfo.promotionDeduct &&
        props.paymentInfo.promotionAmount && (
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography variant="h6" fontWeight={700}>
              Promotion: {props.paymentInfo.promotion}{" "}
              {props.paymentInfo.promotionDeduct}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              - RM{displayThousands(props.paymentInfo.promotionAmount)}
            </Typography>
          </Stack>
        )}
    </Stack>
  );
};

const TotalBillSection = (props: {
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
  serviceChargePercentage: string;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      borderBottom={1}
      paddingY={3}
      alignItems={"start"}
    >
      {props.paymentInfo.sum !== props.paymentInfo.sumBeforeDiscount && (
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography>After Discount</Typography>
          <Typography>RM{displayThousands(props.paymentInfo.sum)}</Typography>
        </Stack>
      )}
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography>Service Tax {props.serviceChargePercentage}</Typography>
        <Typography>
          RM{displayThousands(props.paymentInfo.serviceChargeAmount)}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography>Tax {props.taxPercentage}</Typography>
        <Typography>
          RM{displayThousands(props.paymentInfo.taxAmount)}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography variant="h6" fontWeight={700}>
          Total Payable Price
        </Typography>
        <Typography variant="h5">
          RM{displayThousands(props.paymentInfo.debitAmount)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PaymentOverview;
