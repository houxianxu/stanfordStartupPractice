#!/home/houxianxu/.nvm/v0.10.12/bin/node

/*practice for fuction programming in node.js*/
/*rewrite code from startup class lecture 10 for practicing javascript programming*/
// asynchronous programming with the async flow control library

var async = require('async');
var uu = require('undersore');
var sleep = require('sleep');

// create a new Timer instances to track time
var Timer = function (name) {
	return {
		name: name,
		tstart: null,
		tend: null,
		dt: null,
		start: function () {
			this.tstart = new Date();
			console.log("%s start at %s", this.name, this.tstart);
		},
		end: function () {
			this.tend = new Date();
			console.log("%s end at %s", this.name, this.tend);
		},
		elapsed: function () {
			this.end();
			this.dt = this.tend.valueOf() - this.tstart.valueOf();
			console.log("%s elapsed time: %s ms", this.name, this.dt);
		}
	};
};

var build_insts = function (nn) {
	var bingit = function (xx) { return 'http://www.bing.com/search?q=' + xx; };
	var urls = uu.map(uu.range(nn), bingit);
	var delays_ms = uu.map(uu.range(nn), function () {
		return Math.random() * 1000;
	});
	var to_inst = function (url_delay_pair) {
		return uu.object(uu.zip(['url', 'delays_ms'], url_delay_pair));
	};
	return uu.map(uu.zip(urls, delays_ms), to_inst);
};

var summarize = function (results) {
	var add = function (aa, bb) {
		return aa + bb;
	};
	var sum = function (arr) {
		return uu.reduce(arr, add);
	};
	console.log("Sum of times: %s ms", sum(results));
	console.log("Max of times: %s ms", uu.max(results));
};


/*A straightforward synchronous function that imitates (mocks) the
functionality of downloading a URL.
*/
// an inst is like this -> { url: ’http://www.bing.com/search?q=1’, delay_ms: 91.59809700213373 } 
var synchronous_mock_download = function (inst) {
	var tm = new Timer('  ' + inst.url)
	tm.start();
	var delay_us = inst.delay_ms * 1000;
	sleep.usleep(delay_us);
	tm.elapsed();
	return inst.delay_ms;
};

var synchronous_example = function (insts) {
	var tm = new Timer('synchronous');
	var tm.start();
	var results = [];
	for (var ii = 0; ii < insts.length; ii++) {
		results.push(synchronous_mock_download(insts[ii]));
	}
}

