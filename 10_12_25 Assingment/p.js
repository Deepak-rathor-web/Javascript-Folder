


// var a = Number(prompt("Enter first value "));
// var b = Number(prompt("Enter second value "));

// function add(j,k){
//       var c = j+k;
//      return c;
// }
//  var e = add(a,b);
// console.log(e);

//~~~~~~~~~~ sum of perfect Number 


var arr = [6,28,30,49];

var sum = (a)=>{

    for(var i=0;i<a.length; i++){
         var total = 0;
         for( var j=1;j<a[i]/2;j++){
             var sum = 0;
             if(a[i]%j == 0){
                sum += j;
             }
         }

         if(sum == a[i]){
            total += a[i];
         }
    }


}
var x = sum(arr);
console.log("Sum of perfect Num..  is "+x);