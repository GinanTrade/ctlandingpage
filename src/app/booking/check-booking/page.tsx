"use client";

import { useBookingData } from "@/context/BookingContext";
import axios, { AxiosInstance, CancelToken, CancelTokenSource } from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CheckBooking = () => {
  const { bookingData } = useBookingData();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(
    null
  );

  async function axiosPolling<T>(
    axiosInstance: AxiosInstance,
    url: string,
    retries: number,
    timeoutBetweenRetries: number,
    cancelToken: CancelToken
  ): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(url, {
        cancelToken,
      });
      if (response.status === 204) {
        throw new Error("On Process");
      }
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        setIsLoading(false);
        throw new Error("Request cancelled by user");
      }
      if (retries > 0) {
        await new Promise((resolve) =>
          setTimeout(resolve, timeoutBetweenRetries)
        );
        console.log(`Retrying... ${retries} retries left`);
        return axiosPolling<T>(
          axiosInstance,
          url,
          retries - 1,
          timeoutBetweenRetries,
          cancelToken
        );
      } else {
        throw new Error("Max retries exceeded");
      }
    }
  }

  async function checkTransaction() {
    try {
      setIsLoading(true);

      const source = axios.CancelToken.source();
      setCancelToken(source);

      const data = await axiosPolling<{
        status: string;
        message: string;
        data: {
          status: string;
        };
      }>(
        axios,
        `${process.env.NEXT_PUBLIC_BASE_API}/landing-page/check-booking-status?bookingId=${bookingData?.bookingNo}`,
        // `${process.env.NEXT_PUBLIC_BASE_API}/landing-page/lot-info/1`,
        150, // Number of retries
        2000, // Timeout between retries in milliseconds
        source.token
      );

      setIsLoading(false);
      if (data.data.status === "Failed") {
        //   Notification.failed("payment failed");
        return;
      }

      if (data.data.status === "Success") {
        //   navigate("/pos");
        //   Notification.success("payment success");
        return;
      }
    } catch (error: any) {
      // Notification.failed(error.message);
    }
  }

  useEffect(() => {
    if (bookingData) {
      checkTransaction();
    }
  }, [bookingData]);

  if (bookingData) {
    return (
      <>
        <div>Test</div>
      </>
    );
  } else {
    return <div>Failed</div>;
  }

  return <></>;
};

export default CheckBooking;
