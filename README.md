# @unction/withoutKeys

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> => RecordType<A, B> => RecordType<A, B>

Takes a enumerable that has keys and returns the same type where all the given keys don't exist.

``` javascript
withoutKeys(["a", "b", "c"])({b: 2, d: 3}) // {d: 3}
withoutKeys(["a", "b", "c"])(new Map([["b", 2], ["d", 3]])) // Map([["d", 3]]))
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/withoutKeys.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/withoutKeys.svg?maxAge=2592000&style=flat-square
