// Sum of numbers between 100 and 200 divisible by 9
let sum = 0;
for (let i = 100; i <= 200; i++) {
    if (i % 9 === 0) sum += i;
}
console.log("Sum =", sum);
