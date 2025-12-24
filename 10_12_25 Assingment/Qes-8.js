// 8. Bill Splitter for a Group
// Scenario: A group of friends splits the cost of items.
// let amounts = [120, 340, 150, 90, 200];
// Tasks: Find total amount spent.
// Split the bill equally and print each person's share.
// Find who paid the highest and who paid the least.\

let amounts = [120, 340, 150, 90, 200];

// Total
let total = amounts.reduce((a, b) => a + b, 0);
console.log("Total Spent:", total);

// Equal split
let share = total / amounts.length;
console.log("Each person's share:", share);

// Highest and least
let highest = Math.max(...amounts);
let lowest = Math.min(...amounts);

console.log("Highest paid:", highest);
console.log("Lowest paid:", lowest);
