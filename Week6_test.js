var expect = chai.expect

describe("My Functions", function () {
  describe("Add", function () {
    it("should add two numbers", function () {
      var x = add(3, 5);
      expect(x).to.equal(8);
    });
  });
 
});




describe("My Functions", function () {
  describe("Make a Deck", function () {
    it("Should make a new Deck", function () {
      var y = new Card
      var z = Card.makeADeck();
      expect(z).to.be.an('array');
    });
  });
});