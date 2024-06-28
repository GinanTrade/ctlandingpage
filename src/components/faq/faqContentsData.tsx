import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const General1 = {
  question: "What is the difference between Landside and Airside ?",
  answer: (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6">
          <u>Landside</u>
        </Typography>
        <Typography>
          Landside refers to the area of the airport terminal that the general
          public can access without any restrictions.
        </Typography>
        <Typography>
          If you are <b>flying from</b> KLIA Terminal 2, it refers to the public
          area before you check-in, or before Immigration Control.
        </Typography>
        <Typography>
          If you are <b>landing</b> in KLIA Terminal 2, it refers to the area
          after you exit Immigration Clearance, so please ensure you have a
          valid visa to enter the country.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          <u>Airside</u>
        </Typography>
        <Typography>
          Airside is the restricted area of the airport terminal that you can
          access only after clearing Immigration Control.
        </Typography>
        <Typography>
          If you are <b>flying from</b> KLIA Terminal 2, it refers to the area
          after you check-in, or after Immigration Control. Please note that you
          need a boarding pass to enter Airside, and there are specific time
          limits for entering the departure hall before your flight.
        </Typography>
        <Typography>
          If you are <b>landing</b> in KLIA Terminal 2, our hotel is located in
          the International Transit Hall, so you do not need to exit Immigration
          Clearance, and do not need a visa to enter the country.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const General2 = {
  question: "What is the difference between Terminal 1 and Terminal 2 ?",
  answer: (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6">
          <u>Terminal 1</u>
        </Typography>
        <Typography>
          Terminal 1 is Kuala Lumpur’s main airport, serving a variety of
          international airlines, such as Emirates, Qatar Airways, Singapore
          Airlines, etc.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          <u>Terminal 2</u>
        </Typography>
        <Typography>
          Terminal 2 caters primarily to low-cost carriers, such as AirAsia.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          <u>Accessibility</u>
        </Typography>
        <Typography>
          Terminals 1 and 2 are not within walking distance of each other but
          are accessible via car, train, or bus.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          <u>Transit Restrictions:</u>
        </Typography>
        <Typography>
          If you are transiting and not exiting through Immigration Clearance,
          you will not be able to access the other terminal.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const General3 = {
  question: "Are the rooms non-smoking ?",
  answer: (
    <Typography>
      Yes, all our rooms are non-smoking to ensure a clean and healthy
      environment for all guests.
    </Typography>
  ),
};

export const Landside1 = {
  question: "Where is Landside located ?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        We are located on Level 1 Transportation Hub (CP1) of Gateway@klia2
        mall, KLIA Terminal 2.
      </Typography>
      <Box>
        <Typography>Address:</Typography>
        <Typography>
          Lot L1-1,2,3,4, Level 1 Transportation Hub, Gateway@klia2, Kuala
          Lumpur International Airport (KLIA) Terminal 2. Jalan KLIA 2/1
          LandSide, 64000 Sepang, Selangor, Malaysia.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const Landside2 = {
  question:
    "How do I get to Landside if I arrive by flight to KLIA Terminal 2 ?",
  answer: (
    <Typography>
      You need to exit Malaysia’s Custom and Immigration checkpoint. From
      Arrival Hall, proceed to the mall lift and go down to (CP1) Level 1
      Transportation Hub. We are just next to the transportation hubs’ ticketing
      counter.
    </Typography>
  ),
};

export const Landside3 = {
  question:
    "How do I get to Landside if I arrive by flight to KLIA Terminal 1?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        You need to exit Malaysia’s Custom and Immigration checkpoint at Kuala
        Lumpur International Airport Terminal 1. You may use the train (ERL or
        KLIA Express) or the free shuttle bus provided by the airport to
        Terminal 2.
      </Typography>
      <Typography>
        The train service operates daily from 5:00 am to 12:00 am, with trains
        running every 20-30 minutes. The travel time is approximately 3 minutes.
        For the latest schedule, please check here:{" "}
        <Link href="https://www.kliaekspres.com/schedule/">
          https://www.kliaekspres.com/schedule/
        </Link>
      </Typography>
      <Typography>
        The free 24/7 shuttle buses run every 10 minutes’ interval from all
        stops. The travel time is approximately 30 minutes. The bus waiting area
        in KLIA Terminal 1 is located at Door 4, Level 1 of the Main Terminal
        Building.
      </Typography>
    </Stack>
  ),
};

export const Landside4 = {
  question:
    "How do I get to Landside if I arrive by car / taxi to KLIA Terminal 2 ?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Drop off at Arrival Hall at Level 2, proceed to the nearest lift and go
        down to Level 1. We are just next to the transportation hubs’ ticketing
        counter.
      </Typography>
      <Typography>
        Drop off at Arrival Hall at Level 2, proceed to the nearest lift{" "}
        <Typography component="span" style={{ color: "blue" }}>
          near Gate 1
        </Typography>{" "}
        and go down to Level 1. We are just next to the transportation hubs’
        ticketing counter.
      </Typography>
    </Stack>
  ),
};

export const Landside5 = {
  question:
    "How do I get to Landside if I arrive by flight to KLIA Terminal 2 ?",
  answer: (
    <Typography>
      All buses will disembark at the bus terminal at Level 1. We are just next
      to the transportation hubs’ ticketing counter.
    </Typography>
  ),
};

export const Landside6 = {
  question:
    "Do I need to clear Malaysia’s Custom and Immigration checkpoint to get to Landside as I have a transit flight?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Yes, you need to clear the custom and immigration checkpoint and exit to
        the Arrival Hall as we are located at the Landside.
      </Typography>
      <Typography>
        Please log on to{" "}
        <Link href="https://www.imi.gov.my/index.php/en/main-services/visa/">
          https://www.imi.gov.my/index.php/en/main-services/visa/
        </Link>{" "}
        should you require VISA to enter Malaysia.
      </Typography>
      <Typography>
        Otherwise we will recommend staying in{" "}
        <Link href="/klia-2/airside">Capsule Transit Airside</Link>
      </Typography>
    </Stack>
  ),
};

export const Landside7 = {
  question: "What are the facilities available in Landside?",
  answer: (
    <Typography>
      We have single pods, queen pods, suite rooms. Common shower facilities.
      Mini lounge/library with coffee/tea station. Locker storage.
    </Typography>
  ),
};

export const Landside8 = {
  question: "What are the facilities inside the capsule pods?",
  answer: (
    <Typography>
      All our pods are fitted with comfy beds, fluffy pillows and duvet. A
      towel, complimentary dental kit, ear plugs, mineral water and sleeping eye
      masks will be provided upon check-in.
    </Typography>
  ),
};

export const Landside9 = {
  question: "Is there a shower room inside the capsule pods?",
  answer: (
    <Typography>
      No, all the shower facilities are common sharing but are separated by
      gender.
    </Typography>
  ),
};

export const Landside10 = {
  question: "Are storage lockers and showers included in the room rate?",
  answer: (
    <Typography>
      Yes they are inclusive of your room rate. 1 external locker will be
      provided to store your luggage and you will have access to shower
      facilities.
    </Typography>
  ),
};

export const Landside11 = {
  question: "Can I upgrade/downgrade my pod when I check in?",
  answer: (
    <Typography>
      Yes, upgrades are possible, subject to availability and additional
      charges. Downgrades are not allowed once the booking is confirmed.
    </Typography>
  ),
};

export const Landside12 = {
  question: "How many person(s) are allowed in the pods?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        You will be charged for any additional hours beyond your booked stay.
        The rates depend on the pod type:
      </Typography>
      <Box>
        <Typography>Single Pods - RM 10.00 / Hour</Typography>
        <Typography>Queen Pods - RM 20.00 / Hour</Typography>
        <Typography>Suite Room - RM 20.00 / Hour</Typography>
      </Box>
      <Typography>
        These rates apply for a maximum of 2 extra hours. Beyond the 2nd hour,
        the full rate will be charged.
      </Typography>
    </Stack>
  ),
};

export const Landside13 = {
  question: "Is a deposit required?",
  answer: (
    <Typography>
      No deposit is required. Full payment is made at the time of booking
    </Typography>
  ),
};

export const Landside14 = {
  question: "Is free wifi provided in the hotel?",
  answer: (
    <Typography>
      Yes, the hotel provides complimentary wifi access to all registered
      guests.
    </Typography>
  ),
};

export const Landside15 = {
  question: "Is meal(s) included in the room package?",
  answer: (
    <Typography>
      No meal will be included for the room package. There are eateries in the
      vicinity that are available. Complimentary coffee/tea is provided in our
      lounge.
    </Typography>
  ),
};

export const Landside16 = {
  question: "Can I buy food from outside and eat in the hotel?",
  answer: (
    <Typography>
      No, you are not allowed to bring food and eat inside the hotel room.
    </Typography>
  ),
};

export const Landside17 = {
  question: "Do you sell shower only service to the guest?",
  answer: (
    <Typography>
      Yes we do. You may proceed to our counter to request for shower service.
      Towel, dental kit and temporary locker will be provided as well. Not
      available for advance booking.
    </Typography>
  ),
};

export const Landside18 = {
  question: "Do you provide locker storage service only?",
  answer: (
    <Typography>
      Yes we do. You may choose between 3, 6, 12 and 24 hour storage periods.
      Kindly proceed to our counter for our latest rates. Not available for
      advance booking.
    </Typography>
  ),
};

export const Landside19 = {
  question: "Is there any smoking area in your hotel?",
  answer: (
    <Typography>
      Due to health and safety standards, smoking is not allowed in our
      premises. A RM500 fine will be imposed on offenders who flout the
      no-smoking rule at our premises. However, our front desk officer will
      direct you to the nearest smoking area.
    </Typography>
  ),
};

export const Airside1 = {
  question: "Where is Airside located ?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        We are located near Gate Q, of International Transit Hall, Kuala Lumpur
        International Airport (KLIA) Terminal 2.
      </Typography>
      <Box>
        <Typography>Address:</Typography>
        <Typography>
          Lot S6-2-A32 & S6-2-A33, Level 2, Satellite Building International
          Departure, Kuala Lumpur International Airport (KLIA) Terminal 2. 64000
          Sepang, Selangor, Malaysia.
        </Typography>
      </Box>
      <Typography fontWeight={700}>
        You need an international boarding pass to access this area.
      </Typography>
    </Stack>
  ),
};

export const Airside2 = {
  question: "How do I get to Airside after I land in KLIA Terminal 2?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Just proceed to the Transit Hall, and head to Gate Q. We are located
        just before Gate Q.
      </Typography>
      <Typography fontWeight={700}>
        Please note that this is only applicable for international transit
        flights.
      </Typography>
    </Stack>
  ),
};

export const Airside3 = {
  question: "How do I get to Airside after I land in KLIA Terminal 1?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        If you are only transiting in KLIA Terminal 1, you will not be able to
        access this hotel.
      </Typography>
      <Typography>Terminal 1 and Terminal 2 are not linked.</Typography>
    </Stack>
  ),
};

export const Airside4 = {
  question:
    "Do I need to clear Malaysia’s Custom and Immigration checkpoint to get to Airside as I have a transit flight?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        No, you do not need to clear the Custom and Immigration checkpoint to
        reach us. Just proceed to the Transit Hall, and head to Gate Q. We are
        located just before Gate Q.
      </Typography>
      <Typography fontWeight={700}>
        Please note that this is not applicable for Domestic flights.
      </Typography>
    </Stack>
  ),
};

export const Airside5 = {
  question: "What are the facilities inside the pod?",
  answer: (
    <Typography>
      All our pods are fitted with comfy beds, fluffy pillows, duvet and a small
      safe. A towel, complimentary dental kit, ear plugs, mineral water and
      sleeping eye masks will be provided upon check-in.
    </Typography>
  ),
};

export const Airside6 = {
  question: "Is there a shower room inside the capsule pods?",
  answer: (
    <Typography>No, all the shower facilities are common sharing.</Typography>
  ),
};

export const Airside7 = {
  question: "Are showers included in the room rate?",
  answer: <Typography>Yes, they are inclusive of your room rate. </Typography>,
};

export const Airside8 = {
  question: "Can I upgrade/downgrade my pod when I check in?",
  answer: (
    <Typography>
      We offer a single room type only, which is the single pod. Upgrades or
      downgrades to different room types are not available.
    </Typography>
  ),
};

export const Airside9 = {
  question: "Is more than 1 person allowed in a single pod?",
  answer: (
    <Typography>
      The hotel adheres very strictly to the safety regulations whereby only one
      person is allowed per single pod and we reserve the right to evict
      additional or unregistered guests.
    </Typography>
  ),
};

export const Airside10 = {
  question: "Is a deposit required?",
  answer: (
    <Typography>
      No deposit is required. Full payment is made at the time of booking.
    </Typography>
  ),
};

export const Airside11 = {
  question: "Is free wifi provided in the hotel?",
  answer: (
    <Typography>
      Yes, the hotel provides complimentary wifi access to all registered
      guests.
    </Typography>
  ),
};

export const Airside12 = {
  question: "Is meal(s) included in the room package?",
  answer: (
    <Typography>
      No meal will be included for the room package. There are eateries in the
      vicinity that are available.
    </Typography>
  ),
};

export const Airside13 = {
  question: "Can I buy food from outside and eat in the hotel?",
  answer: (
    <Typography>
      No, you are not allowed to bring food and eat inside the hotel room.
    </Typography>
  ),
};

export const Airside14 = {
  question: "Do you sell shower only service to the guest?",
  answer: (
    <Typography>
      Yes we do. You may proceed to our counter to request for shower service.
      Towel, dental kit and temporary baggage storage will be provided as well.
      Not available for advance booking.
    </Typography>
  ),
};

export const Airside15 = {
  question: "Do you provide baggage storage service only?",
  answer: (
    <Typography>
      Yes we do. Kindly proceed to our counter for our latest rates. Not
      available for advance booking.
    </Typography>
  ),
};

export const Airside16 = {
  question: "Is there any smoking area in your hotel?",
  answer: (
    <Typography>
      Due to health and safety standards, smoking is not allowed in our
      premises. A RM500 fine will be imposed on offenders who flout the
      no-smoking rule at our premises, and reported to the airport authorities.
      However, our front desk officer will direct you to the nearest smoking
      area.
    </Typography>
  ),
};

export const SleepLounge1 = {
  question: "Where is Sleep Lounge located?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        We are located on Level 5, Departure Hall, KLIA Terminal 1, along Costa
        Coffee.
      </Typography>
      <Box>
        <Typography>Address:</Typography>
        <Typography>
          Lot MTB-5-L23, Level 5 Departure Hall, Main Terminal Building, Kuala
          Lumpur International Airport (KLIA) Terminal 1. 64000 Sepang,
          Selangor, Malaysia.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const SleepLounge2 = {
  question:
    "How do I get to Sleep Lounge if I arrive by flight to KLIA Terminal 1?",
  answer: (
    <Typography>
      You need to exit Malaysia’s Custom and Immigration checkpoint. Once you
      enter the Arrival Hall (which is located on Level 3), find the nearest
      lift and head up to Departure Hall (Level 5).
    </Typography>
  ),
};

export const SleepLounge3 = {
  question:
    "Do I need to clear Malaysia’s Custom and Immigration checkpoint to get to Sleep Lounge as I have a transit flight?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Yes, you need to clear the custom and immigration checkpoint and exit to
        the Arrival Hall as we are located at the Landside.
      </Typography>
      <Typography>
        Please log on to{" "}
        <Link href={"https://www.imi.gov.my/index.php/en/main-services/visa/"}>
          https://www.imi.gov.my/index.php/en/main-services/visa/
        </Link>
        should you require VISA to enter Malaysia.
      </Typography>
    </Stack>
  ),
};

export const SleepLounge4 = {
  question: "What are the facilities inside the pod?",
  answer: (
    <Typography>
      All our pods are fitted with comfy beds, fluffy pillows, duvet and a small
      safe. A towel, complimentary dental kit, ear plugs, mineral water and
      sleeping eye masks will be provided upon check-in.
    </Typography>
  ),
};

export const SleepLounge5 = {
  question: "Is there a shower room inside the capsule pods?",
  answer: (
    <Typography>
      No, we do not have any shower and WC facilities in this hotel.
    </Typography>
  ),
};

export const SleepLounge6 = {
  question: "Where can I find shower and WC facilities?",
  answer: (
    <Typography>
      For showers, complimentary showers are available on Level 4, one floor
      below our hotel. For WC facilities, there is a common area toilet a few
      doors down from our hotel.
    </Typography>
  ),
};

export const SleepLounge7 = {
  question: "Can I upgrade/downgrade my pod when I check in?",
  answer: (
    <Typography>
      We offer a single room type only, which is the single pod. Upgrades or
      downgrades to different room types are not available.
    </Typography>
  ),
};

export const SleepLounge8 = {
  question: "Is more than 1 person allowed in a single pod?",
  answer: (
    <Typography>
      The hotel adheres very strictly to the safety regulations whereby only one
      person is allowed per single pod and we reserve the right to charge
      additional guests.
    </Typography>
  ),
};

export const SleepLounge9 = {
  question: "Is a deposit required?",
  answer: (
    <Typography>
      No deposit is required. Full payment is made at the time of booking.
    </Typography>
  ),
};

export const SleepLounge10 = {
  question: "Is free wifi provided in the hotel?",
  answer: (
    <Typography>
      Yes, the hotel provides complimentary wifi access to all registered
      guests.
    </Typography>
  ),
};

export const SleepLounge11 = {
  question: "Is meal(s) included in the room package?",
  answer: (
    <Typography>
      No meal will be included for the room package. There are eateries in the
      vicinity that are available. Complimentary coffee/tea is provided.
    </Typography>
  ),
};

export const SleepLounge12 = {
  question: "Can I buy food from outside and eat in the hotel?",
  answer: (
    <Typography>
      No, you are not allowed to bring food and eat inside the hotel room.
    </Typography>
  ),
};

export const SleepLounge13 = {
  question: "Do you provide baggage storage service only?",
  answer: (
    <Typography>
      Yes we do. Kindly proceed to our counter for our latest rates. Not
      available for advance booking.
    </Typography>
  ),
};

export const SleepLounge14 = {
  question: "Is there any smoking area in your hotel?",
  answer: (
    <Typography>
      Due to health and safety standards, smoking is not allowed in our
      premises. A RM500 fine will be imposed on offenders who flout the
      no-smoking rule at our premises, and reported to the airport authorities.
      However, our front desk officer will direct you to the nearest smoking
      area.
    </Typography>
  ),
};

export const MAX1 = {
  question: "Where is MAX located ?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        We are located on Level 2M of Gateway@klia2 mall, KLIA Terminal 2.
      </Typography>
      <Box>
        <Typography>Address:</Typography>
        <Typography>
          Lot L2M-6,7,8, Level 2M, Gateway@klia2, Kuala Lumpur International
          Airport (KLIA) Terminal 2. Jalan KLIA 2/1 LandSide, 64000 Sepang,
          Selangor, Malaysia.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const MAX2 = {
  question: "How do I get to MAX?",
  answer: (
    <Stack spacing={2}>
      <Box>
        <Typography>
          <u>By Flight (arrival at KLIA Terminal 2):</u>
        </Typography>
        <Typography>
          You need to exit Malaysia’s Custom and Immigration checkpoint. From
          Arrival Hall, proceed to the nearest escalator and head up to Level
          2M.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const MAX3 = {
  question:
    "Do I need to clear Malaysia’s Custom and Immigration checkpoint to get to MAX as I have a transit flight?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Yes, you need to clear the custom and immigration checkpoint and exit to
        the Arrival Hall as we are located at the Landside.
      </Typography>
      <Typography>
        Please log on to{" "}
        <Link href={"https://www.imi.gov.my/index.php/en/main-services/visa/"}>
          https://www.imi.gov.my/index.php/en/main-services/visa/
        </Link>
        should you require VISA to enter Malaysia.
      </Typography>
    </Stack>
  ),
};

export const MAX4 = {
  question: "What are the facilities inside the pod?",
  answer: (
    <Typography>
      We have rooms with en-suite bathrooms. A plant-based lounge/restobar. Gym
      and steambath facilities. Conference room / media room.
    </Typography>
  ),
};

export const MAX5 = {
  question: "Can I upgrade/downgrade my room when I check in?",
  answer: (
    <Typography>
      Yes, upgrades are possible, subject to availability and additional
      charges. Downgrades are not allowed once the booking is confirmed.
    </Typography>
  ),
};

export const MAX6 = {
  question: "How many person(s) are allowed in the room?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        For safety reasons, our hotel strictly adheres to occupancy regulations:
      </Typography>
      <Box>
        <Typography>
          Deluxe and Executive Rooms can accommodate a maximum of 2 persons.
        </Typography>
        <Typography>
          Family Room can accommodate a maximum of 3 persons.
        </Typography>
        <Typography>
          Runway Suite can accommodate a maximum of 4 persons.
        </Typography>
      </Box>
      <Typography>
        We reserve the right to charge additional or unregistered guests beyond
        these limits.
      </Typography>
    </Stack>
  ),
};

export const MAX7 = {
  question:
    "Can I purchase additional hours to extend my stay if I want to stay longer?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Yes, you can purchase additional hours for your stay, up to maximum 2
        hours only. The additional rates will depend on the room type you have
        booked.
      </Typography>
      <Typography>The rates are as follows:</Typography>
      <Box>
        <Typography>Deluxe and Executive Rooms - RM 100 / hour</Typography>
        <Typography>Family Room - RM 150 / hour</Typography>
        <Typography>Runway Suite - RM 300 / hour</Typography>
      </Box>
    </Stack>
  ),
};

export const MAX8 = {
  question: "Is a deposit required?",
  answer: (
    <Typography>
      Full payment is made at the time of booking. A security deposit of RM 500
      will be collected during check-in.
    </Typography>
  ),
};

export const MAX9 = {
  question: "Is free wifi provided in the hotel?",
  answer: (
    <Typography>
      Yes, the hotel provides complimentary wifi access to all registered
      guests.
    </Typography>
  ),
};

export const MAX10 = {
  question: "Is meal(s) included in the room package?",
  answer: (
    <Typography>
      No meals will be included for the room package. However, it is available
      for add-on service. Please check with our front desk officers during your
      check-in.
    </Typography>
  ),
};

export const MAX11 = {
  question: "Do you have lounge-only access?",
  answer: (
    <Stack spacing={2}>
      <Typography>
        Yes, we do. Our lounge is open daily from 8 am to 10 pm. Walk-ins are
        welcome, and no advance booking is required.
      </Typography>
      <Box>
        <Typography>Lounge-only access includes:</Typography>
        <Typography>3 hours lounge access</Typography>
        <Typography>1 hot meal (plant based)</Typography>
        <Typography>
          Free flow buffet nibbles and non-alcoholic beverages
        </Typography>
        <Typography>1 choice of cocktail or craft beer</Typography>
        <Typography>Gym and steambath facilities access</Typography>
      </Box>
      <Typography>
        Please check with our front desk officers for the latest rates.
      </Typography>
    </Stack>
  ),
};

export const MAX12 = {
  question: "Can I buy food from outside and eat in the hotel?",
  answer: (
    <Typography>
      No, you are not allowed to bring food and eat inside the hotel room.
    </Typography>
  ),
};

export const MAX13 = {
  question: "Do you sell shower only service to the guest?",
  answer: (
    <Typography>
      Yes we do. You may proceed to our counter to request for shower service.
      Towel, dental kit and temporary locker will be provided as well. Not
      available for advance booking.
    </Typography>
  ),
};

export const MAX14 = {
  question: "Do you provide locker storage service only?",
  answer: (
    <Typography>
      Yes we do. Kindly proceed to our counter for our latest rates. Not
      available for advance booking.
    </Typography>
  ),
};

export const MAX15 = {
  question: "Is there any smoking area in your hotel?",
  answer: (
    <Typography>
      Due to health and safety standards, smoking is not allowed in our
      premises. A RM500 fine will be imposed on offenders who flout the
      no-smoking rule at our premises. However, our front desk officer will
      direct you to the nearest smoking area.
    </Typography>
  ),
};

export const MAX16 = {
  question: "How do I book the Conference Room / Meeting Room?",
  answer: (
    <Typography>
      Please email us at{" "}
      <Link href={"mailto:wilh@chgworld.com"}>wilh@chgworld.com</Link>.
    </Typography>
  ),
};

export const Booking1 = {
  question: "Where do I get the cheapest rates?",
  answer: (
    <Typography>
      Book directly with us to enjoy the best room rate. We offer a Best Rate
      Guarantee, ensuring you get the lowest price available. If you find a
      lower rate elsewhere, we&apos;ll match it.
    </Typography>
  ),
};

export const Booking2 = {
  question: "Can I book a room for someone else?",
  answer: (
    <Typography>
      Yes, you can book a room for someone else. Please ensure you provide the
      correct guest details during the booking process.
    </Typography>
  ),
};

export const Booking3 = {
  question: "Do I need to complete the payment to secure my booking?",
  answer: (
    <Typography>
      Yes, you are required to settle the payment in full to confirm your
      booking. A confirmation email will be sent to you after your reservation
      has been confirmed.
    </Typography>
  ),
};

export const Booking4 = {
  question: "Can I request an early check-in or late check-out?",
  answer: (
    <Typography>
      Early check-in and late check-out are subject to availability and may
      incur additional charges. Your stay hours will start once you check-in,
      and should you extend your hours beyond what you booked, additional
      charges will apply.
    </Typography>
  ),
};

export const Booking5 = {
  question: "Can I modify my bookings after they are confirmed?",
  answer: (
    <Typography>
      Yes, you are allowed to modify your bookings up to 24 hours before the
      check-in date, and subject to availability. Amendment requests, such as
      changing room types, or hotels may be subject to additional charges. You
      may send your amendment requests by email to the respective outlets{" "}
      <Link href={"/contact-us"}>here</Link>. <b>Or</b> You can modify your
      reservation through our website by logging into your account and accessing
      your reservation details.
    </Typography>
  ),
};

export const Booking6 = {
  question: "Can I change the check-in date or time after booking?",
  answer: (
    <Typography>
      Yes, you can change the check-in date or time subject to room
      availability. Please make the changes through our website or contact the
      respective outlets <Link href={"/contact-us"}>here</Link>.
    </Typography>
  ),
};

export const Booking7 = {
  question: "What is your cancellation policy?",
  answer: (
    <Typography>
      Cancellations can be made up to 24 hours before the scheduled check-in
      time for a full refund. Cancellations made within 24 hours of check-in
      will incur a full charge equal to your stay.
    </Typography>
  ),
};

export const Booking8 = {
  question: "How do I cancel my reservation?",
  answer: (
    <Typography>
      You can cancel your reservation through our website by logging into your
      account and accessing your reservation details. Alternatively, you can
      contact our reservation team for assistance{" "}
      <Link href={"/contact-us"}>here</Link>.
    </Typography>
  ),
};

export const Booking9 = {
  question:
    "Can I modify or cancel my booking if I booked through a third-party website?",
  answer: (
    <Typography>
      If you booked through a third-party website, you must modify or cancel
      your booking through that website. Please refer to their specific terms
      and conditions.
    </Typography>
  ),
};

export const Billing1 = {
  question: "What payment methods are accepted?",
  answer: (
    <Typography>
      We accept all major credit cards, debit cards, and online payment methods.
      Payment is required at the time of booking.
    </Typography>
  ),
};

export const Billing2 = {
  question: "Do you accept cash payment in foreign currencies?",
  answer: (
    <Typography>
      Cash payments must be made in the local currency (MYR). We accept all
      major credit cards.
    </Typography>
  ),
};

export const Billing3 = {
  question: "Is a deposit required?",
  answer: (
    <Stack spacing={2}>
      <Box>
        <Typography>
          <u>Landside, Airside, and Sleep Lounge</u>
        </Typography>
        <Typography>
          No deposit is required. Full payment is made at the time of booking.
        </Typography>
      </Box>
      <Box>
        <Typography>
          <u>MAX</u>
        </Typography>
        <Typography>
          Full payment is made at the time of booking. A deposit of RM 500 will
          be collected during check-in.
        </Typography>
      </Box>
    </Stack>
  ),
};

export const Billing4 = {
  question: "Are there any additional fees I should be aware of?",
  answer: (
    <Typography>
      No. All charges are already included in the booking. However, additional
      services such as extended locker rental or stay will incur extra charges.
    </Typography>
  ),
};

export const Billing5 = {
  question: "Can I pay for my reservation upon arrival?",
  answer: (
    <Typography>
      No, full payment is required at the time of booking to secure your
      reservation.
    </Typography>
  ),
};

export const Billing6 = {
  question: "Will I receive a receipt for my payment?",
  answer: (
    <Typography>
      Yes, a receipt will be sent to the email address provided during the
      booking process.
    </Typography>
  ),
};
