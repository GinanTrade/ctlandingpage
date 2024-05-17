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
  imageUrl?: string;

  bedType: string;
  zone?: string;
  capacity: string;
  sum: number;
}

export interface IHotelRooms {
  // image: StaticImageData;
  name: string;
  zone: string;
  bedType: string;
  capacity: string;
  price: number;
  availableCount: number;

  imageUrl?: string;
}

export interface IPaymentInfo {
  sum: number;
  taxAmount: number;
  serviceChargeAmount: number;
  debitAmount: number;

  sumBeforeDiscount: number;

  promotion?: string;
  promotionAmount?: number;
  promotionDeduct?: string;
}

export const PaymentInfoInitial: IPaymentInfo = {
  debitAmount: 0,
  sum: 0,
  taxAmount: 0,
  serviceChargeAmount: 0,
  sumBeforeDiscount: 0,
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

export interface ICountry {
  countryId: string;
  countryName: string;
  favorite: boolean;
  countryCode: string;
  prefix: string;
}

export interface IRoomImages {
  name: string;
  url: string;
}

export interface IPaymentTerminal {
  refNo: string;
  bookingNo: string;
  amount: number;
  userName: string;
  userContact: string;
  userEmail: string;
  lot: string;
}

export interface IBookingInformation {
  payment: IPaymentInfo;
  roomBookings: IRoomBooking[];
  guestDetail: IGuestDetail;
  selectedHotel: IBookingLocation;
  bookingSchedule: IBookingSchedule;
  bookingNo: string;
  bookingId: string;
}
