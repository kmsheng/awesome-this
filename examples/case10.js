function Human(name) {
  this.name = name;
}

Human.prototype.speak = function(str) {
  console.log(this.name + ' says: ' + str);    // Human
  return this;    // magic of function chaining
};

var david = new Human('david');

david.speak('Hi! there!')
  .speak('How\'s going on ?');
