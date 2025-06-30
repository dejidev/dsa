console.log("Welcome to my library");


class Book {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean = true;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}



class Member {
    id: number;
    name: string;
    borrowedBooks: Book[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    borrowBook(book: Book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log(`${this.name} borrowed "${book.title}"`);
        } else {
            console.log(`${book.title} is not available.`);
        }
    }

    returnBook(book: Book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
        book.isAvailable = true;
        console.log(`${this.name} returned "${book.title}"`);
    }
}



class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    addMember(member: Member) {
        this.members.push(member);
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    findMemberByName(name: string): Member | undefined {
        return this.members.find(member => member.name === name);
    }
}



const library = new Library();

const book1 = new Book(1, "1984", "George Orwell");
const book2 = new Book(2, "The Hobbit", "J.R.R. Tolkien");

library.addBook(book1);
library.addBook(book2);

const member1 = new Member(1, "Alice");
library.addMember(member1);

member1.borrowBook(book1);
member1.borrowBook(book2); 

member1.returnBook(book1); 