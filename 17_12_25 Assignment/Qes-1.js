let orders = [
  { dishName: "Paneer", isDelivered: true, isVegetarian: true },
  { dishName: "Biryani", isDelivered: false, isVegetarian: false }
];

for (let i = 0; i < orders.length; i++) {
  if (orders[i].isVegetarian && orders[i].isDelivered) {
    console.log("Your vegetarian dish " + orders[i].dishName + " has been delivered.");
  } else {
    console.log("Your " + orders[i].dishName + " is still being prepared.");
  }
}
