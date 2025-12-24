// 2. Shopping Cart System
// Scenario: A shopping website stores item prices in an array.
// Assignment: Given an array like [299, 499, 150, 250, 100]
// Calculate: Total bill
// Total after applying a 10% discount List of items costing more than ₹200


var price =  [299, 499, 150, 250, 100];

var total = 0;

for( var i=0; i<price.length ;i++){

  if(price[i] <= 200){
    total += price[i];
  }else {
     var temp = price[i]*0.10;
     
     total += price[i] - temp; 
    }
}

console.log("Total bill after discount "+total);