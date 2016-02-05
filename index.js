var Human = require('./src/human');

var david = new Human('david');

david.greet();

var Politician = require('./src/politician');

var ma9 = new Politician('ma9');

ma9.greet();
ma9.showPartyCard();

function speak(words) {
  console.log(this.name + ':' + words);
}

speak('Hi! How are you?');

speak.call(david, 'Hi! How are you?');
speak.apply(ma9, ['Hi! How are you?']);

david.speak('Its a nice wether today!')
  .speak('hmmm')
  .speak('good');

function add(a, b) {
  return a + b;
}

var addTwo = add.bind(null, 2);

console.log(addTwo(1));

function anotherAddTwo(num) {
  return add(2, num);
}

console.log(anotherAddTwo(2));

var options = {name: '', sex: 'M'};

console.log(Object.assign(options, {name: 'david'}));
