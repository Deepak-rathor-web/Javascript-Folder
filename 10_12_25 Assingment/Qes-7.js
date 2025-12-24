// 7.
// Scenario: A company wants to clean its employee name list.
// Data:
// let employees = ['Raj', '', 'Anu', null, ' ', 'Ravi', undefined];
// Tasks:
// Remove all falsy or empty-looking values ('', null, undefined, ' ').
// Return a cleaned list.

let employees = ['Raj', '', 'Anu', null, ' ', 'Ravi', undefined];

// Cleaned list
let cleaned = employees.filter(e => e && e.trim());

// Count valid entries originally
let validCount = employees.filter(e => e && e.trim()).length;

console.log("Cleaned List:", cleaned);
console.log("Valid entries:", validCount);
