# Librarian
Use this book list to complete the tasks:

```javascript
library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" }
];
```

### Task 1
Create a function named **getBookTitle( index )** that will return the book title at the given index.

### Task 2
Modify the **library** to add a new book of your choice to the defined library array.

### Task 3
Create a function named **addBook( book )** that will add a new book to the library and return the updated library.

### Task 4
Create a function named **bookByAuthor()** that will sort the book list by author in alphabetic order and return the sorted library.

### Task 5
Create a function named **findByTitle( title )** that will return an array of matching books for the searched title. A partial text search is applicable, for example - findByTitle(“man”) should return:
```javascript
[ { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },   { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" } ]
```
