import capitalize from "./capitalize";

test("hello world should become Hello world", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});


test("test should become Test", () => {
  expect(capitalize("test")).toBe("Test");
});

test("three sad tiger should become Three sad tiger", () => {
  expect(capitalize("three sad tiger")).toBe("Three sad tiger");
});