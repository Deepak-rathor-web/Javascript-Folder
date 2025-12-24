
let books = [
  { title: "JavaScript", author: "John", isbn: "101", price: 600 },
  { title: "HTML", author: "Mark", isbn: "102", price: 400 },
  { title: "CSS", author: "Mark", isbn: "103", price: 550 },
  { title: "Node", author: "Alex", isbn: "104", price: 800 },
  { title: "React", author: "John", isbn: "105", price: 300 }
];

for (let i = 0; i < books.length; i++) {
  if (books[i].price > 500) {
    books[i].price = books[i].price * 0.9;
  }
}

let choice;

do {
  choice = prompt(
    "1. View all books\n" +
    "2. Search book by title\n" +
    "3. Most expensive book\n" +
    "4. Books by author\n" +
    "5. Count books above price\n" +
    "6. Total inventory value\n" +
    "7. Exit"
  );

  switch (choice) {

    case "1":
      for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
      }
      break;

    case "2":
      let searchTitle = prompt("Enter book title");
      let found = false;

      for (let i = 0; i < books.length; i++) {
        if (books[i].title == searchTitle) {
          console.log(books[i]);
          found = true;
        }
      }

      if (!found) {
        console.log("Book not found");
      }
      break;

    case "3":
      let maxBook = books[0];

      for (let i = 1; i < books.length; i++) {
        if (books[i].price > maxBook.price) {
          maxBook = books[i];
        }
      }

      console.log(maxBook);
      break;

    case "4":
      let authorName = prompt("Enter author name");

      for (let i = 0; i < books.length; i++) {
        if (books[i].author == authorName) {
          console.log(books[i]);
        }
      }
      break;

    case "5":
      let givenPrice = Number(prompt("Enter price"));
      let count = 0;

      for (let i = 0; i < books.length; i++) {
        if (books[i].price > givenPrice) {
          count++;
        }
      }

      console.log("Number of books:", count);
      break;

    case "6":
      let total = 0;

      for (let i = 0; i < books.length; i++) {
        total = total + books[i].price;
      }

      console.log("Total inventory value:", total);
      break;

    case "7":
      console.log("Exit");
      break;

    default:
      console.log("Invalid choice");
  }

} while (choice != "7");
