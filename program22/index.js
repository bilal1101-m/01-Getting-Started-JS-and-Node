//Object of Book
let book = {
    "name":"Harry Potter and the Half-Blood Prince",
    "author": {
        "name":"Joanne Rowling",
        "pen_name":"J. K. Rowling",
        "period":"1997–present",
        "occupation":["Author","philanthropist","film producer"]
    },
    "pages":607,
    "language":"english",
    "publication_date":"2005-07-16"
};
try {
    console.log(book.author[0].pen_name);
} catch(e) {
    console.log(e.message);
    console.log(book.author.pen_name);
}
