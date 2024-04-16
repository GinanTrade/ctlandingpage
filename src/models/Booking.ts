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
