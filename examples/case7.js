function Human(name) {
  this.name = name;
}

Human.prototype.speak = function(str) {
  console.log(this.name + ' says: ' + str);    // Human
};

function Politician(name) {

  if (! (this instanceof Politician)) {    // this is how to avoid new keyword outside the function
    return new Politician(name);
  }

  Human.call(this, name);
}

Politician.prototype = Object.create(Human.prototype);

var ma9 = Politician('ma9');    // there's no new keyword here

ma9.speak('It\'s time to go running.');
