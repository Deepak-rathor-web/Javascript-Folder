// 3.Largest element

var arr = [20,30,43,87,9,3,6];

var largest = arr[0];
for (var x of arr) {
  if (x > largest) {
    largest = x;
  }
}
console.log(largest);