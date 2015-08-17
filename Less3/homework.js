function Human(firstname, lastname, age, gender, profession, workingPlace, hobbies, bootersEated, booksTaken) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.proffesion = proffesion;
    this.workingPlace = workingPlace;
    this.hobbies = hobbies
    this.bootersEated = bootersEated || 0;

}
var nextHuman = new Human("Viktor")
algol.firstname = "Алексей";
algol.lastname = "Голота";
algol.age = 35;
algol.gender = "Мужской";
algol.proffesion = "издатель";
algol.workingPlace = "Книжный магазин Vam-book";
algol.hobbies = ["путешествия", "чтение", "семья", "получать новые знания"]
algol.bootersEated = 0;
algol.booksTaken = 0;
algol.isHungry = Math.random() >= 0.5;
algol.isTired = Math.random() >= 0.5;
algol.isBusy = Math.random() >= 0.5;


var algol = {

    algolInfo: function() {
        return "Имя: " + this.firstname + "\n" + "Фамилия: " + this.lastname + "\n" +
            "Возраст: " + this.age + "\n" + "Пол: " + this.gender + "\n" +
            "Профессия: " + this.proffesion + "\n" + "Место работы: " + this.workingPlace + "\n" +
            "Хобби: " + this.hobbies.join(", ") + "\n";
    },
    takeBookToRead: function() {
        this.booksTaken += 1;
        library.booksGived += 1;
        library.readers[this.lastname] = this.booksTaken;
    },
    sendBookTolibrary: function() {
        this.booksTaken -= 1;
        library.booksGived -= 1;
        library.readers[this.lastname] = this.booksTaken;
    },
    wantToEat: function() {
        if (this.isHungry === true) {
            if (gamburgers.quantity > 0) {
                algol.bootersEated += 1;
                gamburgers.quantity -= 1;
            } else {
                console.log("Надо купить пожрать!");
            }
        } else {
            console.log("Я не голоден!");
        }
    },
    booksInfo: function() {
        return "Книг взято из библиотеки: " + this.booksTaken + "\n" +
            "Книг отдано читателям: " + library.booksGived + "\n" +
            "Книг отдано читателю " + this.lastname + ": " + library.readers[this.lastname];
    },
    eatInfo: function() {
        return "Бургеров съедено: " + this.bootersEated + "\n" +
            "Бургеров осталось: " + gamburgers.quantity;
    }

};
algol.firstname = "Алексей";
algol.lastname = "Голота";
algol.age = 35;
algol.gender = "Мужской";
algol.proffesion = "издатель";
algol.workingPlace = "Книжный магазин Vam-book";
algol.hobbies = ["путешествия", "чтение", "семья", "получать новые знания"]
algol.bootersEated = 0;
algol.booksTaken = 0;
algol.isHungry = Math.random() >= 0.5;
algol.isTired = Math.random() >= 0.5;
algol.isBusy = Math.random() >= 0.5;

var library = {
    booksTotal: 550,
    booksGived: 0,
    readers: {}
}

var gamburgers = {
    quantity: 2

}

algol.takeBookToRead();
algol.takeBookToRead();
algol.takeBookToRead();
algol.wantToEat();
console.log(algol.eatInfo());
console.log(algol.bootersEated, gamburgers.quantity);
algol.wantToEat();
console.log(algol.eatInfo());
console.log(algol.bootersEated, gamburgers.quantity);
algol.wantToEat();
console.log(algol.eatInfo());
console.log(algol.bootersEated, gamburgers.quantity);
console.log(algol.algolInfo());
console.log(algol.booksInfo());
algol.sendBookTolibrary();
console.log(algol.booksTaken, library.booksGived, library.readers);
