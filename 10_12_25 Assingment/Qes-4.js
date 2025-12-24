// 4.  Contact List Filter
// Scenario: You’re creating a contact filtering system for a phone.
// Assignment: Given an array of contact names: ['Ravi', 'Anjali', 'Raj', 'Ramesh', 'Ankita']
// Create a function to return contacts starting with a specific letter.
// Return the number of contacts starting with the letter 'R'.

var contacts = ['Ravi', 'Anjali', 'Raj', 'Ramesh', 'Ankita'];

function filterByLetter(list, letter) {
    return list.filter(name => name.startsWith(letter));
}

var result = filterByLetter(contacts, 'R');
console.log("Contacts starting with R:", result);

console.log("Count:", result.length);
