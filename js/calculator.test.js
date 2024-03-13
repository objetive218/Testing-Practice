import calculator from "./calculator";

test("3 + 5 is 8", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("8 - 5 is 3", () => {
  expect(calculator.subtract(8, 5)).toBe(3);
});

test("5 -5  is 0", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});
test("20 / 5 is 4", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("100 / 10 is 10", () => {
  expect(calculator.divide(100, 10)).toBe(10);
});

test("5 * 8 is 40", () => {
  expect(calculator.multiply(5, 8)).toBe(40);
});
