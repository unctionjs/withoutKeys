import withoutKeys from "./index.ts";

test("object", () => {
  expect(withoutKeys(["a", "b", "c"])({b: 2, d: 3})).toEqual({d: 3});
});

test("map", () => {
  expect(withoutKeys(["a", "b", "c"])(new Map([["b", 2], ["d", 3]]))).toEqual(new Map([["d", 3]]));
});
