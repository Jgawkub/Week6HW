var expect = chai.expect

describe("My Functions", function () {
  describe("Add", function () {
    it("Should add two numbers", function () {
      var x = add(3, 5);
      expect(x).to.equal(8);
    });
  });
 
});




describe("My Functions", function () {
  describe("Make a Deck", function () {
    it("Should say that a new deck is an array", function () {
      var z = new Deck;
      expect(z.cards).to.be.an('array');
    });
  });
});