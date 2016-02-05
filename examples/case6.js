function Human(name) {
  this.name = name;
}

Human.prototype.speak = function(str) {
  console.log(this.name + ' says: ' + str);    // Human
};

function Politician(name) {
  Human.call(this, name);
}

Politician.prototype = Object.create(Human.prototype);

var ma9 = new Politician('ma9');

ma9.speak('It\'s time to go running.');
