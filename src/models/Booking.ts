import { StaticImageData } from "next/image";

export interface IBookingLocation {
  hotelName: string;
  hotelLocation: string;
  hotelDetailedLocation: string;

  hotelPhoneNumber?: string;
}

export const BookingLocationInitial: IBookingLocation = {
  hotelLocation: "",
  hotelName: "",
  hotelDetailedLocation: "",
};

export interface IBookingSchedule {
  date?: Date;
  duration?: number;
  promotion: string;
}

export const BookingScheduleInitial: IBookingSchedule = {
  promotion: "",
};

export interface IRoomBooking {
  roomTypeId: string;
  roomType: string;
  duration: number;
  price: number;
  quantity: number;

  bedType: string;
  zone?: string;
  capacity: string;
}

export interface IHotelRooms {
  image: StaticImageData;
  name: string;
  zone: string;
  bedType: string;
  capacity: string;
  price: number;
  availableCount: number;
}

export interface IPaymentInfo {
  sum: number;
  taxAmount: number;
  debitAmount: number;
}

export const PaymentInfoInitial: IPaymentInfo = {
  debitAmount: 0,
  sum: 0,
  taxAmount: 0,
};

export interface IGuestDetail {
  firstName: string;
  lastName: string;
  gender: string;
  nationality: string;
  identification: string;
  idNumber: string;
  email: string;
  phone: string;
}

export const GuestDetailInitial: IGuestDetail = {
  email: "",
  firstName: "",
  gender: "",
  identification: "MyKad",
  idNumber: "",
  lastName: "",
  nationality: "",
  phone: "",
};