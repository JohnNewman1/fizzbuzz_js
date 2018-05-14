describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    iFizz = new FizzBuzz();
  });

it("Should print 1 to screen", function() {
console.log(iFizz.fizzy);
expect(iFizz.fizzy()).toEqual(1);

});

it("Should print 1-100 to screen", function() {
  expect(iFizz.printAll()).toThrow(98);
});



});
