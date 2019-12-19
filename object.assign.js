#!/usr/bin/env node

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source2 = { d: 4, e: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const target2 = Object.assign(target, source, source2);
console.log(target2);
