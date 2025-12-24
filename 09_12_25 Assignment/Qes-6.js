//  6.Generate All Subarrays

var arr = [1, 2, 3,4,6,8,10];

for (var i = 0; i < arr.length; i++) {
  var sub = [];
  for (var j = i; j < arr.length; j++) {
    sub.push(arr[j]);
    console.log(sub);
  }
}
