const { average } = require("../index");

describe("average", () => {
  it("returns the average value of an array of numbers", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([9, 8, 7, 4, 5, 15])).toBe(8);
  });
});
