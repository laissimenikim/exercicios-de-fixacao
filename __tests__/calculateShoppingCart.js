const { calculateShoppingCart } = require("../index");

const cart = {
  shipping: 10.89,
  products: [
    { products: "PS5", price: 5000, quantity: 1 },
    { products: "Coconut Milk", price: 3.1, quantity: 4 },
    { products: "Cool T-Shirt", price: 30.99, quantity: 2 },
    { products: "Sexy Lingerie", price: 80.99, quantity: 1 },
    { products: "Toothpaste", price: 5.43, quantity: 3 },
  ],
};

describe("calculateShoppingCart", () => {
  it("returns total amount of the shopping cart", () => {
    expect(calculateShoppingCart(cart)).toBe(5182.55);
  });
});
