// 3. Travel Destination Picker
// Scenario: A travel agency wants to filter popular destinations.
// Assignment: Given: ['Paris', 'London', 'Delhi', 'New York', 'Tokyo', 'Delhi']
// Remove duplicates.
// Sort destinations alphabetically.
// Check if a given destination is available in the list.

var x = ['Paris', 'London', 'Delhi', 'New York', 'Tokyo', 'Delhi'];

var temp = [];

for ( var i=0;i<x.length;i++){

    for( var j =i+1;j<x.length;j++){
       if(x[i] == x[j]){
        break;
       }else{
        temp [i] = x[i]; 
       }
    }
}

console.log("After remove Duplicates: ");
for(i of temp){
console.log(i);
}

var y = x.sort();
console.log("After Arranging Alphabetically: "+y);

var f = x.includes('Delhi');
console.log("Contains City : "+f);
