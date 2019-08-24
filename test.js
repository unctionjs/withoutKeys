import {test} from "tap";
import withoutKeys from "./index";

test("object", ({same, end}) => {
  same(
    withoutKeys(["a", "b", "c"])({b: 2, d: 3}),
    {d: 3}
  );

  end();
});

test("map", ({same, end}) => {
  same(
    withoutKeys(["a", "b", "c"])(new Map([["b", 2], ["d", 3]])),
    new Map([["d", 3]])
  );

  end();
});
