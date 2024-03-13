import caesarCipher from "./caesarCipher";

test("hello world should become byffi qilfx", () => {
  expect(caesarCipher(20, "hello world")).toBe("byffi qilfx");
});

test("this is a test should become drsc sc k docd", () => {
  expect(caesarCipher(10, "this is a test")).toBe("drsc sc k docd");
});

test("secret message should become htrgti bthhpvt", () => {
  expect(caesarCipher(15, "secret message")).toBe("htrgti bthhpvt");
});
test("nothing to say should become stymnsl yt xfd", () => {
  expect(caesarCipher(5, "nothing to say")).toBe("stymnsl yt xfd");
});
