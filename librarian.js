
var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" }

];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(2));

//* Task 3 *//
function addBook( book ){
  library.push(book);
  return library;
}

var newBook = {title: "title ", year: "year", author: "author ", publisher: "publisher"};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  var newLibrary=library;
  newLibrary.sort(function (a,b){
  return a.author.localeCompare(b.author);
  });
  return newLibrary;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var value;
  var n;
  var found=[];

  for (var i= 0; i<library.length; i++){
    value = library[i].title;
    n = value.toLowerCase().includes(title);
    if (n) found.push(library[i]);
  }
  return found;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
