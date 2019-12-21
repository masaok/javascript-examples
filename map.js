#!/usr/bin/env node

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays

const myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);
