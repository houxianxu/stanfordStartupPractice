#!/home/houxianxu/.nvm/v0.10.12/bin/node
// http://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
// rewrite code from startup class lecture 10 for practicing javascript programming


var divides = function(a, b) {
	return b % a === 0;
};

var anydivide = function(as, b) {
	for (var ii in as) {
		if(divides(as[ii], b)) { /*this is different from python code which should be (for ii in b)*/
			return true;
		}
	}

	return false;
};

var sum = function(arr) {
	var cc = 0;
	
	for (var ii in arr) {
		cc += arr[ii];
	}
	return cc
};

var fizzbuzz = function (factors, max) {
	var out = [];
	for (var nn = 1; nn < max; nn++) {
		if (anydivide(factors, nn)) {
			out.push(nn)
		}
	}
	return sum(out)
};

console.log(fizzbuzz([3, 5], 1000))

