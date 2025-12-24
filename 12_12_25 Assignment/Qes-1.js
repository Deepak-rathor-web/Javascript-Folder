
var cart = [];

function addToCart(cart, itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    return cart;
}


function removeFromCart(cart,itemName){
    return cart.filter(item => item.name !== itemName);

}

var healtyItem = ["Apple", "milk","Oats","GreenVeg","banana"];

var  isHealty = (itemName) => {
    var f = healtyItem.includes(itemName);
    return f;
};

function calculateTotal(cart,taxRate =0.05){

    var sum = 0;
    for(let item of cart){
        sum += item.price;
    }

    sum = sum + ( sum * taxRate);
    return sum;
}

function applyDiscount(total ,discount = 0.1){
    return total - (total * discount);
}

function addMultipleItem(cart,...items){
    for(let item of items){
        cart.push(item);
    }
    return cart;
}

addToCart(cart,"milk",40);
addToCart(cart,"sugar",50);
addToCart(cart,"nirma",30);
addToCart(cart,"loki",20);

console.log(" Products In the Cart ");
console.log(cart);

var a = removeFromCart(cart,"loki");
console.log(a);

var x = isHealty("cake");
console.log(x);

var total = calculateTotal(cart,0.50);
console.log(total);

var v = applyDiscount(210,0.1);
console.log(v);

var items1 = [
    { name: "egg", price: 100 },
    { name: "choti gold", price: 29 },
    { name: "mint", price: 69 },
    { name: "coolberg", price: 99 }
];
cart = addMultipleItem(cart,...items1);
console.log(cart);