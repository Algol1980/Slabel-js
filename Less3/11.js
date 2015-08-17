// // var one = function first() {
// //     var x = 1;
// //     return x;
// // }
// // var two = function second() {
// //     var x = "second";
// //     return x;
// // }
// // var three = function third() {
// //     var x = [1, 2, 4, 6, 8, 8];
// //     return x;
// // }
// // var four = function fourth() {
// //     var x = true;
// //     return x;
// // }
// // var five = function fifth() {
// //     var x = {
// //         a: 1,
// //         b: "two"
// //     };
// //     return x;
// // }
// // console.log(one());
// // console.log(two());
// // console.log(three());
// // console.log(four());
// // console.log(five());


// // var animal = {
// //     username: "cat",
// //     tagline: "gjklsg",
// //     noises: ["sd", "sdadsad", "saasfasf", "dfsdfds"],
// //     foods: ["apple", "fish", "milk"],

// // };
// // var zoo = {
// //     birds: 3,
// //     bears: 5,
// //     cats: 12,
// // }

// // for (var key in zoo) {
// //     console.log(zoo[key] + ' ' + key);
// // }

// // // объявление
// // function Chicken(name) {
// //     this.gender = 'chicken';
// //     this.name = name;
// // }
// // // вызов
// // var joe = new Chicken('Joe');
// // console.log(joe.constructor);

// // var myNumber = new Number(23);
// // var myString = new String('male');
// // var myBoolean = new Boolean(false);
// // var myObject = new Object();
// // var myArray = new Array('foo', 'bar');
// // var myFunction = new Function("x", "y", "return x*y");
// // var myDate = new Date();
// // var myRegExp = new RegExp('\bt[a-z]+\b');
// // var myError = new Error('Darn!');
// // console.log(typeof(myNumber));
// // console.log(typeof(myString));
// // console.log(typeof(myBoolean));
// // console.log(typeof(myObject));
// // console.log(typeof(myArray));
// // console.log(typeof(myFunction));
// // console.log(typeof(myDate));
// // console.log(typeof(myRegExp));
// // console.log(typeof(myError));

// function Human(firstname, lastname, age, gender, profession, workingPlace, hobbies, bootersEated, booksTaken) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.gender = gender;
//     this.proffesion = profession || "Неизвестно";
//     this.workingPlace = workingPlace || "Неизвестно";
//     this.hobbies = hobbies || ["путешествия", "чтение", "семья", "получать новые знания"];
//     this.bootersEated = bootersEated || 0;
//     this.booksTaken = booksTaken || 0;
//     this.isHungry = Math.random() >= 0.5;
//     this.isTired = Math.random() >= 0.5;
//     this.isBusy = Math.random() >= 0.5;

// }
// var library = {
//     booksTotal: 550,
//     booksGived: 0,
//     readers: {}
// }

// var gamburgers = {
//     quantity: 2

// }


// Human.prototype.algolInfo = function() {
//     return "Имя: " + this.firstname + "\n" + "Фамилия: " + this.lastname + "\n" +
//         "Возраст: " + this.age + "\n" + "Пол: " + this.gender + "\n" +
//         "Профессия: " + this.proffesion + "\n" + "Место работы: " + this.workingPlace + "\n" +
//         "Хобби: " + this.hobbies.join(", ") + "\n";
// };
// Human.prototype.takeBookToRead = function() {
//     this.booksTaken += 1;
//     library.booksGived += 1;
//     library.readers[this.lastname] = this.booksTaken;
// };
// Human.prototype.sendBookTolibrary = function() {
//     this.booksTaken -= 1;
//     library.booksGived -= 1;
//     library.readers[this.lastname] = this.booksTaken;
// };

// Human.prototype.wantToEat = function() {
//     if (this.isHungry === true) {
//         if (gamburgers.quantity > 0) {
//             nextHuman.bootersEated += 1;
//             gamburgers.quantity -= 1;
//         } else {
//             console.log("Надо купить пожрать!");
//         }
//     } else {
//         console.log("Я не голоден!");
//     }
// };
// Human.prototype.booksInfo = function() {
//     return "Книг взято из библиотеки: " + this.booksTaken + "\n" +
//         "Книг отдано читателям: " + library.booksGived + "\n" +
//         "Книг отдано читателю " + this.lastname + ": " + library.readers[this.lastname];
// };
// Human.prototype.eatInfo = function() {
//     return "Бургеров съедено: " + this.bootersEated + "\n" +
//         "Бургеров осталось: " + gamburgers.quantity;
// };

// var nextHuman = new Human("Равшан", "Джамшутов", 45, "Мужской");
// // console.log(nextHuman);
// // console.log(typeof(nextHuman));
// // console.log(nextHuman.constructor);
// // console.log(nextHuman.__proto__.__proto__);
// nextHuman.takeBookToRead();
// nextHuman.takeBookToRead();
// nextHuman.takeBookToRead();
// nextHuman.wantToEat();
// console.log(nextHuman.eatInfo());
// console.log(nextHuman.bootersEated, gamburgers.quantity);
// nextHuman.wantToEat();
// console.log(nextHuman.eatInfo());
// console.log(nextHuman.bootersEated, gamburgers.quantity);
// nextHuman.wantToEat();
// console.log(nextHuman.eatInfo());
// console.log(nextHuman.bootersEated, gamburgers.quantity);
// console.log(nextHuman.algolInfo());
// console.log(nextHuman.booksInfo());
// nextHuman.sendBookTolibrary();
// console.log(nextHuman.booksTaken, library.booksGived, library.readers);

// var createdObj1 = Object.create(null); 
// var createdObj2 = Object.create({}); 
// console.log(createdObj1.__proto__);
// console.log(createdObj1.constructor);
// console.log(createdObj2.__proto__);
// console.log(createdObj2.constructor);

// function Item(str, name, lastname) {
// 	this.str = str || "wooden";
// 	this.obj = {
// 		name : name || "goodwin"

// 	};
// 	this.getStr = function () {
// 		return this.stick;
// 	}
//  	this.getName = function () {
// 		return this.obj.name;
// 	}
 
// }
// // Item.prototype.getname = function () {

// // }

// var hren = new Item();
// var hrenPolzucjiy = new Item("First String", "Doodle");
// console.log(hren.getName());
// console.log(hrenPolzucjiy.getName());

var parent = {
	stick : "wood";
	person : 
	{
		name : "Potter";
	}

	isBusy : true;
	isSleep : true;


}