// 5. Movie Ratings Manager
// Scenario: A movie app stores ratings given by users.
// Assignment:
// Input: [4.5, 3.8, 5.0, 4.2, 3.0, 4.9]
// Find:
// Average rating
// Count how many rated above 4
// Return sorted list of ratings (descending)


var ratings = [4.5, 3.8, 5.0, 4.2, 3.0, 4.9];

// Average
var avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
console.log("Average Rating:", avg);

// Count above 4
var above4 = ratings.filter(r => r > 4).length;
console.log("Ratings above 4:", above4);

// Sort descending
var sorted = [...ratings].sort((a, b) => b - a);
console.log("Sorted Ratings (desc):", sorted);
