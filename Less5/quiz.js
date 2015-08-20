var quizWordArr = ["К", "О", "П", "И", "Л", "К", "А"];
var currentWordArr = ["_", "_", "_", "_", "_", "_", "_"];

function Game() {
  this.quizWordArr = quizWordArr;
  this.currentWordArr = currentWordArr;
  this.ltrCount = currentWordArr.length;
  this.rewardQuantity = 0;
  this.usedWords = [];
  this.torturer = 0;
  this.minReward = 10;
  this.maxReward = 50;
  this.dblGuess = 1;
  this.ltrIsTrue = false;
};
Game.prototype.reset = function() {
  this.quizWordArr = quizWordArr;
  this.currentWordArr = currentWordArr;
  this.ltrCount = currentWordArr.length;
  this.rewardQuantity = 0;
  this.usedWords = [];
  this.torturer = 0;
  this.minReward = 10;
  this.maxReward = 50;
  this.dblGuess = 1;
  this.ltrIsTrue = false;
};
Game.prototype.initialize = function() {

  while (true) {
    if (this.torturer >= 6) {
      console.log("Палач уже здесь! Ты Продул! " + this.torturer);
      break;
    }
    this.ltrCount = this.currentWordArr.join("").split("_").length - 1;
    if (this.ltrCount === 0) {
      console.log("Поздравляем! Вы отгадали слово! Это слово " + this.currentWordArr.join("") + " Вознаграждение: " + this.rewardQuantity);
      break;
    } else {
      console.log("Осталось отгадать " + this.ltrCount + " букв");
    }

    var ltr = prompt("Введите букву", "");
    this.usedWords.forEach(function(item, i, arr) {
      if (item === ltr.toUpperCase()) {
        console.log("Вы уже искали такую букву!");
        this.ltrIsTrue = false;

        return ltr = prompt("Введите букву", "");
      }
    });
    console.log(this.ltrIsTrue);
    this.usedWords.push(ltr.toUpperCase());
    this.ltrIsTrue = false;
    this.guessLetter(ltr);
  }

};
Game.prototype.guessLetter = function(ltr) {
  this.quizWordArr.forEach(function(item, i, arr) {
    if (item === ltr.toUpperCase()) {
      this.currentWordArr[i] = item;
      game.ltrIsTrue = true;
      game.rndReward = Math.floor(Math.random() * (game.maxReward - game.minReward + 1)) + game.minReward;
    }
  });
  console.log(this.ltrIsTrue);
  console.log(currentWordArr.join(""));
  if (this.ltrIsTrue) {
    game.rewardQuantity += game.rndReward * game.dblGuess;
    this.dblGuess = 2;
    console.log("Поздравляем данная буква есть в данном слове, текущее вознаграждение составляет: " + this.rewardQuantity);
    this.torturer--;
  } else {
    this.dblGuess = 1;
    console.log("Такой буквы нет! Палач все ближе: " + this.torturer);
    this.torturer++;
  };

}

game = new Game();
game.initialize();
