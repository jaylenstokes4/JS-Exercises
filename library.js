let librarySystem = []

function addBook(title, author) {
    let book = {
        title: title,
        author: author,
        isAvailable: true,
        borrower: undefined,
    };
    librarySystem.push(book);
}

addBook("Drizzt, Book 1", "RA Salvatore")
addBook("Drizzt, Book 2", "RA Salvatore")
addBook("Drizzt, Book 3", "RA Salvatore")
addBook("Drizzt, Book 4", "RA Salvatore")
addBook("Drizzt, Book 5", "RA Salvatore")
addBook("Drizzt, Book 6", "RA Salvatore")
console.log(librarySystem)

function checkOutBook(title, newBorrower) {
    for (i = 0; i < librarySystem.length; i++) {
        if (librarySystem[i].title === title) {
            librarySystem[i].isAvailable = false;
            librarySystem[i].borrower = newBorrower;
        }
    }
    //needs to update isAvailable of the given title
    //needs to update borrower of the given title
}
checkOutBook("Drizzt, Book 1", "Jaylen")
checkOutBook("Drizzt, Book 2", "Jaylen")
console.log(librarySystem)