// 6. Restaurant Menu
// Scenario: A restaurant manages its menu items using an array.
// Assignment:
// Menu: ['Burger', 'Pizza', 'Fries', 'Pasta', 'Salad']
// Add a new item 'Soda' to the end.
// Remove 'Fries' from the menu.
// Sort and display the updated menu.

var menu = ['Burger', 'Pizza', 'Fries', 'Pasta', 'Salad'];

// Add Soda
menu.push('Soda');
console.log(menu);

// Remove Fries
menu = menu.filter(item => item !== 'Fries');
console.log(menu);

// Sort menu
menu.sort();

console.log("Updated Menu:", menu);
