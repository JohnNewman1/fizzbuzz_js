describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    iFizz = new FizzBuzz();
  });



it("Should return fizzbuzz if 15 or 30", function() {
  expect(iFizz.play(15)).toEqual('fizzbuzz');
  expect(iFizz.play(30)).toEqual('fizzbuzz');
});

it("Should return fizz if multiple of 3", function() {
  expect(iFizz.play(3)).toEqual('fizz');
  expect(iFizz.play(99)).toEqual('fizz');
});

it("Should return buzz if multiple of 5", function() {
  expect(iFizz.play(5)).toEqual('buzz');
  expect(iFizz.play(95)).toEqual('buzz');
});

it("Should return the number if not a multiple of 3 or 5", function() {
  expect(iFizz.play(8)).toEqual(8);
  expect(iFizz.play(88)).toEqual(88);
});



});
