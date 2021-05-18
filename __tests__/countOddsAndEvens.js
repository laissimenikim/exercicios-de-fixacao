const { countOddsAndEvens } = require("../index");

describe("countOddsAndEvens", () => {
  it("returns an object with the count of odd and even numbers", () => {
    expect(countOddsAndEvens([1, 2, 3, 4, 5])).toEqual({ even: 2, odd: 3 });

    expect(countOddsAndEvens([9, 8, 7, 4, 5, 15])).toEqual({ even: 2, odd: 4 });
  });
});
