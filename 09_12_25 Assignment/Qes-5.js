// 5.Remove Duplicate from Sorted

var arr = [1, 1, 2, 2, 3, 3, 4];

var result = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    result.push(arr[i]);
  }
}

console.log(result);
