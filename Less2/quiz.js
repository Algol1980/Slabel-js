var quizWordArr = ["К", "О", "П", "И", "Л", "К", "А"];
var currentWordArr = ["_", "_", "_", "_", "_", "_", "_"];
var ltrCount = currentWordArr.length;
var rewardQuantity = 0;
var dblGuess = 0;
var usedWords = [];
var torturer = 0;

function guessLetter(ltr) {
  if (torturer === 6) {
    rewardQuantity = 0;
    dblGuess = 0;
    usedWords = [];
    torturer = 0;
    quizWordArr = ["Д", "У", "Д", "Е", "Л", "К", "А"];
    currentWordArr = ["_", "_", "_", "_", "_", "_", "_"];
  }

  for (var i = 0; i < usedWords.length; i++) {
    if (usedWords[i] === ltr.toUpperCase()) {
      console.log("Вы уже искали такую букву!");
      break;
    }
  };
  usedWords.push(ltr.toUpperCase());

  var ltrIsTrue = false;
  for (var i = 0; i < quizWordArr.length; i++) {
    if (quizWordArr[i] === ltr.toUpperCase()) {
      currentWordArr[i] = quizWordArr[i];
      ltrIsTrue = true;
      ltrCount = currentWordArr.join("").split("_").length - 1;
      var minReward = 10;
      var maxReward = 50;
      var rndReward = Math.floor(Math.random() * (maxReward - minReward + 1)) + minReward;
    }
  };
  console.log(currentWordArr.join(""));
  console.log(ltrCount);
  if (ltrIsTrue) {
    rewardQuantity += rndReward * dblGuess;
    dblGuess = 2;
    console.log("Поздравляем данная буква есть в данном слове, текущее вознаграждение составляет: " + rewardQuantity);
    torturer--;
  } else {
    dblGuess = 1;
    console.log("Такой буквы нет!");
    torturer++;
    if (torturer >= 6) {
      console.log("Палач уже здесь! Ты Продул! " + torturer);
    } else {
      console.log("Палач все ближе! " + torturer);
    }
  }
  if (ltrCount == 0) {
    console.log("Поздравляем! Вы отгадали слово! Это слово " + currentWordArr.join("") + " Вознаграждение: " + rewardQuantity);
  } else {
    console.log("Осталось отгадать " + ltrCount + " букв");
  }
}

guessLetter("м");
guessLetter("т");
guessLetter("ь");
guessLetter("ю");
guessLetter("р");
guessLetter("я");
guessLetter("ф");
guessLetter("ц");
guessLetter("с");
guessLetter("а");
guessLetter("о");
guessLetter("п");
guessLetter("и");
guessLetter("л");
guessLetter("к");
