function FizzBuzz() {

}

FizzBuzz.prototype.fizzy = function() {
  return 1;

};

FizzBuzz.prototype.printAll = function() {
  var i = 1;
  while (i <= 99) {
    i += 1;
    console.log(i);
  };

};
