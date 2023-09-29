let parent = document.getElementById("bookparent")
class Book {
    
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
        this.div = parent.cloneNode(true);
        this.div.id = "";
        this.div.style.display = "initial";
        this.data = this.div.children;
        console.log(this.data);
        this.data[0].textContent = "Title: " + this.title;
        this.data[1].textContent = "Authors: " + this.authors
        this.data[2].textContent = "Number of pages:" + this.numberOfPages
        this.data[3].textContent = "Is read: " + this.isRead
        this.data[4].textContent = "Is favorite: " + this.isFavorite;
        document.getElementById("shelf").appendChild(this.div);
    }

    markAsRead() {
        this.isRead = true;
    }
    toggleFavorite(isFavorite) {
        this.isFavorite = isFavorite;
    }
    refreshDiv() {
        this.data[0].textContent = "Title: " + this.title;
        this.data[1].textContent = "Authors: " + this.authors
        this.data[2].textContent = "Number of pages:" + this.numberOfPages
        this.data[3].textContent = "Is read: " + this.isRead
        this.data[4].textContent = "Is favorite: " + this.isFavorite;
    }
}


class Bookshelf {
    books = [];
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
        console.log(book);
    }
    removeBook(book) {
        this.books.splice(this.books.indexOf(book), 1);
    }
    getUnreadBooks() {
        return this.books.filter((x) => x.isRead == false);
    }
    getFavBooks() {
        return this.books.filter((x) => x.isFavorite == true);
    }
}

let shelf = new Bookshelf([]);
let book1 = new Book("Harry Potter", "J. K. Rowling", 222, true, true);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 333, false, false);
let book3 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 444, true, false);
shelf.addBook(book1);
shelf.addBook(book2);
shelf.addBook(book3);
