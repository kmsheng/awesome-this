function Human() {}

Human.prototype.speak = function() {
  console.log(this);    // Human
};

var human = new Human();

human.speak();
