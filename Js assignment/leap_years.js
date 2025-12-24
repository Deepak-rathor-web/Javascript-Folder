// Leap years between two years
let start = parseInt(prompt("Start year:"));
let end = parseInt(prompt("End year:"));
for (let y = start; y <= end; y++) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) console.log(y);
}
