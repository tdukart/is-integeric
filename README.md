# is-integeric
![npm](https://img.shields.io/npm/v/is-integeric.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/is-integeric.svg)
![CircleCI](https://img.shields.io/circleci/build/github/tdukart/is-integeric.svg)
![NPM](https://img.shields.io/npm/l/is-integeric.svg)
![Badges](https://img.shields.io/badge/badges-5-informational.svg)

Lightweight, simple test to see if an input is an integer or can be converted to one.

```js
import isIntegeric from 'is-integeric';

console.log(isIntegeric(5));      // true
console.log(isIntegeric('5'));    // true
console.log(isIntegeric('5.5'));  // true, because it can be floored
console.log(isIntegeric('five')); // false
```
