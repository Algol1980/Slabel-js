// Katastrophe

function strongEnough(earthquake, age) {
  var len = earthquake.length;
  var sumAr = 0;
  var total = 1;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < earthquake[i].length; j++) {
      sumAr += earthquake[i][j]
    }
    total *= sumAr;
    sumAr = 0;
}
for (var i = 1; i <= age; i++) {
	total *= 1.01;
}
return (total < 1000) ? "Safe!" : "Needs Reinforcement!";
};
console.log()
console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2));
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2));
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3));