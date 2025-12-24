let trips = [
  { destination: "Goa", isBooked: true, isInternational: false },
  { destination: "Paris", isBooked: false, isInternational: true }
];

for (let i = 0; i < trips.length; i++) {
  let bookedStatus;
  let tripType;

  if (trips[i].isBooked) {
    bookedStatus = "booked";
  } else {
    bookedStatus = "not booked";
  }

  if (trips[i].isInternational) {
    tripType = "international";
  } else {
    tripType = "domestic";
  }

  console.log(
    "Trip to " + trips[i].destination +
    " is " + bookedStatus +
    " and it's a " + tripType + " trip."
  );
}
