#!/home/houxianxu/.nvm/v0.10.12/bin/node

/*practice for fuction programming in node.js*/
/*rewrite code from startup class lecture 10 for practicing javascript programming*/
// http://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

/*A common paradigm in functional programming is to start with a very general function, and
then set several of the input arguments to default values to simplify it for first-time users or
common situations.
*/


/* No.1 
use functional programming and underscore.js to rewrite prjectEuler1 problem
		http://underscorejs.org/*/


var uu = require('underscore');

var anydivide = function (as, b) {
	var divfn = function (a) {
		return b % a === 0;
	};
	return uu.any(uu.map(as, divfn));
};

var sum = function (arr) {
	return uu.reduce(arr, function (a, b) {
		return a + b;
	})
};

var fizzbuzz = function (factors, max) {
	var divfn = function (nn) {
		return anydivide(factors, nn)
	};
	var divisible = uu.filter(uu.range(1, max), divfn);
	return sum(divisible);
};

console.log(fizzbuzz([3, 5], 1000));

/*No.2*/

var sq = function (x) {
	return x * x;
};

var loop = function (n, fn) {
	var out = [];
	for (var i = 0; i < n; i++) {
		out.push(fn(i));
	}
	return out;
};

loop(10, sq); // [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
// We can use the ’bind’ method on Functions to do partial evaluation
// of functions, as shown.

var loopN = loop.bind(null, 10);
console.log(loopN(sq));

/*or we can write this way*/
var loopN1 = function (n) {
	var loop = function (n, fn) {
	var out = [];
	for (var i = 0; i < n; i++) {
		out.push(fn(i));
	}
	return out;
};
	return loop(n, sq);
}
console.log(loopN1(10));
/*or we can write this way*/


/*No.3*/
// dynamically defined functions

var compose = function (f, g) {
	var h = function (x) {
		return f(g(x));
	};
	return h;
};

var jsdata = '[ {"asdf":9, "bar":10}, 18, "baz"]';
var f1 = function (data) {
	return data[0].bar + 11;
};
var f2 = JSON.parse;
f1(f2(jsdata)); // 10 + 11 === 21
var f1f2 = compose(f1, f2);

/*No.4*/
// Dynamically defined scope in functions (this)

var bb = 10;
var static_closure = function (aa) {
	return aa + bb;
};
static_closure(3); // 13

var dynamic_closure = function (aa) {
	return aa + this.bb;
};
dynamic_closure(3); // 13

var context1 = {
	'fn': dynamic_closure,
	'bb': 10
};
context1.fn(3); // 13

var context2 = {
	'fn': dynamic_closure,
	'bb': Math.random()
};
context2.fn(3); // 3.***********
/*NOTE: the 'this' variable points to a single object or else is undefine. we 
  can use it to leave the enclosing scope for a closure unspecified until 
  the last moment when it is executed.*/

// if we want ot simply pass in the object itself as an explicit variable, code like below.
// Otherwise we can use 'this'
var simpler_than_dynamic_closure = function(aa, obj) {
	return aa + obj.bb;
};

/*No.4*/
// Encapsulation: the self-executing function trick
/* A very common idiom you will see in JS code is the self-executing function trick. We define a
function and then immediately execute it, returning a single object that contains the results
of that function
*/
var foo = "outer";
(function () {
	var foo = "inner";
	console.log(foo);
})();
console.log(foo); 
// print
/*inner
outer*/

// more complex
var bar = "allowed";
var result = (function (aa) {
	var foo = "inner";
	var out = foo + " " + aa;
	console.log(out);
	return {"val": out};
});
console.log(result);




