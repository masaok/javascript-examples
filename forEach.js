#!/usr/bin/env node

// https://www.w3schools.com/jsref/jsref_foreach.asp

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ": " + item)
}

// https://gomakethings.com/the-es6-way-to-loop-through-objects-with-vanilla-javascript/

var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

console.log(typeof lunch)

lunch.forEach(function (item, key) {
	console.log(key);
	console.log(item);
});

// returns "sandwich", "ham", "snack", "chips", "drink", "soda", "desert", "cookie", "guests", 3, "alcohol", false
