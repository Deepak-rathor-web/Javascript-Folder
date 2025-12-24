// Square, cube, square root from 1 to N
let n = parseInt(prompt("Enter N:"));
for (let i = 1; i <= n; i++) {
    console.log(i, "Square =", i*i, "Cube =", i*i*i, "Sqrt =", Math.sqrt(i).toFixed(2));
}
