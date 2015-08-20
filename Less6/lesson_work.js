// function copy(o) {
//   var copy = Object.create(Object.getPrototypeOf(o));
//   var propNames = Object.getOwnPropertyNames(o);

//   propNames.forEach(function(name) {
//     var desc = Object.getOwnPropertyDescriptor(o, name);
//     Object.defineProperty(copy, name, desc);
//   });

//   return copy;
// }

// var o1 = { a: 1, b: 2 };
// var o2 = { a: 43634, b: 436345 }; // теперь o2 выглядит также, как и o1
// var o3 = copy(o1);
// var o4 = o2;
// o4["a"] = 4543;
// o3["a"] = "sdnasl";

// var dog = {
// 	name: "Sobak"
// },
// cat = {
// 	name: "Koshk"
// };

// var newCat = dog, newDog = copy(cat);
// newCat.name2 = newDog["name4"] = "var";


// console.log(o1);
// console.log(o2);
// console.log(o3);
// console.log(o4);
// console.log(dog);
// console.log(dog);
// console.log(newDog);
// console.log(newCat);

// var namespace = {

// }

// namespace

