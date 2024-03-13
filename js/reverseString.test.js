import reverseString from "./reverseString";

test("hello world should become dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
test("test should become tset", () => {
  expect(reverseString("test")).toBe("tset");
});

test("three sad tiger should become regit das eerht", () => {
  expect(reverseString("three sad tiger")).toBe("regit das eerht");
});
test("function to reverseString should become gnirtSesrever ot noitcnuf", () => {
  expect(reverseString("function to reverseString")).toBe(
    "gnirtSesrever ot noitcnuf"
  );
});

test("firefighter should become rethgiferif", () => {
  expect(reverseString("firefighter")).toBe("rethgiferif");
});
