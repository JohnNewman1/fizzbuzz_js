function FizzBuzz() {

}

FizzBuzz.prototype.fizzy = function() {
  return 1;

};

FizzBuzz.prototype.play = function(number) {
  if (number % 15 == 0) {
    return 'fizzbuzz'
  } else if (number % 3 == 0) {
    return 'fizz'
  } else if (number % 5 == 0) {
    return 'buzz'
  } else {
    return number
  }
};

FizzBuzz.prototype.printAll = function() {
  var i = 0;
  while (i <= 99) {
    i += 1;
    console.log(this.play(i));
  };

};
