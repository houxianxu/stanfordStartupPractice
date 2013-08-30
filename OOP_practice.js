#!/home/houxianxu/.nvm/v0.10.12/bin/node
/*rewrite code from startup class lecture 10 for practicing javascript programming*/

/*No1*/
// object as dictionary

var parsedburl = function (dburl) {
	var dbregex = /([^:]+):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
	var out = dbregex.exec(dburl);
	// console.log(out)
	return {
		'protocol': out[1],
		'user': out[2],
		'pass': out[3],
		'host': out[4],
		'port': out[5],
		'dbpass': out[6]
	};
};

var pgurl = "postgres://myuser:mypass@example.com:5432/mydbpass";
console.log(parsedburl(pgurl));



/*No1*/
// object as dictionary with function
var dbobj = {
	protocol: 'postgres',
	user: 'myuser',
	pass: 'mypass',
	host: 'example.com',
	port: '5432',
	dbpass: 'mydbpass',
	toString: function() {
		return this.protocol + '://' +	
				this.user + ':' +
				this.pass + '@' +
				this.host + ':' +
				this.port + '/' +
				this.dbpass;
	}
};
console.log(dbobj.toString());


/*No.2*/
//inheritance
function inheritPrototype (childObject, parentObject) {
	var copyOfParent = Object.create(parentObject.prototype);
	copyOfParent.constructor = childObject;
	childObject.prototype = copyOfParent;
}

// Define the parent class constructor and add prototype methods
function Item (sku, price) {
	this.sku = sku
	this.price = price;
}
Item.prototype.toString = function () {
	return "SKU: " + this.sku + " | Price: " + this.price + " USD";
}

// Define the subclass constructor and copy over properties and methods of Item
function Book (sku, price, title, text) {
	Item.call(this, sku, price);
	this.title = title;
	this.text = text;
}
inheritPrototype(Book, Item);

Book.prototype.search = function (regexstr) {
	var regex = RegExp(regexstr);
	var match = regex.exec(this.text);
	var out = '';
	if (match !== null) {
		var start = match.index;
		var end = match.index + match[0].length;
		var dx = 3;
		var padstart = start - dx > 0 ? start - dx : start;
		var padend = end + dx > 0 end + dx : end;
		out = '...' + this.text.slice(padstart, padend) + '...';
	}
	return out;
};

