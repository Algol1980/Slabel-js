var arr3 = ["Джаз", "Блюз"];
console.log(arr3);
arr3.push("Рок-н-ролл");
console.log(arr3);
arr3[arr3.length - 2] = "Классика";
console.log(arr3.shift());
arr3.unshift("Рэп", "Рэгги");
console.log(arr3);

var arr4 = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var arr4Rand = Math.floor(Math.random() * arr4.length);
console.log(arr4[arr4Rand]);

var arr = ["test", 2, 1.5, false];

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};


console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1
