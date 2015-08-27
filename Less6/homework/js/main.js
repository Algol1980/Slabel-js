Shape = function() {
  this.width = "50px";
  this.height = "50px";
  this.color = "#5a8bb4";
  this.position = "absolute";
  this.positionLeft = "200px";
  this.positionTop = "200px";
  this.transition = "all 3s ease";
  this.border = "3px solid #cc6699";
  this.el = document.createElement('div');
}
Shape.prototype.render = function() {
  this.el.style.height = this.width;
  this.el.style.width = this.height;
  this.el.style.background = this.color;
  this.el.style.position = this.position;
  this.el.style.left = this.positionLeft;
  this.el.style.top = this.positionTop;
  this.el.style.transition = this.transition;
  this.el.style.border = this.border;
  document.body.appendChild(this.el);
}

Shape.prototype.move = function(where) {
  var tempSize = 0;
  switch (where) {
    case 'down':
      tempSize = parseInt(this.el.style.top, 10);
      tempSize = tempSize + 30;
      this.el.style.top = tempSize + 'px';
      console.log("Двигаем объект на 30 пикселов вниз");
      break;
    case 'up':
      tempSize = parseInt(this.el.style.top, 10);
      tempSize = tempSize - 30;
      this.el.style.top = tempSize + 'px';
      console.log("Двигаем объект на 30 пикселов вверх");
      break;
    case 'left':
      tempSize = parseInt(this.el.style.left, 10);
      tempSize = tempSize - 30;
      this.el.style.left = tempSize + 'px';
      console.log("Двигаем объект на 30 пикселов влево");
      break;
    case 'right':
    default:
      tempSize = parseInt(this.el.style.left, 10);
      tempSize = tempSize + 30;
      this.el.style.left = tempSize + 'px';
      console.log("Двигаем объект на 30 пикселов вправо");
  }
}

Shape.prototype.changeColor = function() {
  var selectDiv = document.querySelectorAll('div');
  var randomColor = 0;

  function get_random_color() {
    randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return randomColor;
  }

  get_random_color();

  for (var i = 0; i < selectDiv.length; i++) {
    selectDiv[i].style.background = get_random_color();;
    console.log("Меняем цвет объектов на" + get_random_color());
  }
}

var run = function() {
  var moveDirections = ["up", "down", "left", "right"];
  var running = setInterval(function() {
    rect01.move(moveDirections[Math.floor(Math.random() * moveDirections.length)]);
    rect01.changeColor();
    rnd01.move(moveDirections[Math.floor(Math.random() * moveDirections.length)]);
    rnd01.changeColor();
  }, 1000);

  setTimeout(function() {
    clearInterval(running);
    console.table([rnd01, rect01]);

  }, 15000);
};

Round = function() {

  Shape.apply(this, arguments);
  this.borderRadius = "50%";
  this.positionLeft = "300px";
  this.positionTop = "200px";
  this.el = document.createElement('div');

  Round.prototype.render = function() {

    Shape.prototype.render.apply(this);
    this.el.style.borderRadius = this.borderRadius;
    console.log('Выводим круг на страницу');
  }


}

Round.prototype = Object.create(Shape.prototype);
Round.prototype.constructor = Round;


Rectangle = function() {
  Shape.apply(this, arguments);
  console.log('Выводим прмоугольник на страницу');

}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect01 = new Rectangle();
rect01.render();
var rnd01 = new Round();
rnd01.render();
run();
