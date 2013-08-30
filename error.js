#!/home/houxianxu/.nvm/v0.10.12/bin/node
// rewrite code from startup class lecture 10 for practicing javascript programming

var Email = function(emstr) {
	var regex = /([^@]+)@([^\.]+)\.([^\.]+)/;
	if (regex.test(emstr)) {
		var match = regex.exec(emstr);
		this.user = match[1];
		this.domain = match[2];
		this.tld = match[3];
		this.valueOf = function() {
			return this.value; /*this can also code as this.emstr*/
		};
		this.toString = function() {
			return this.user + '@' + this.domain + '.' + this.tld;
		};
	}	
	else {
		throw new EmailFormatException(emstr);
	}
};

var EmailFormatException = function(value) {
	this.value = value;
	this.message = "not in a@b.c form";
	this.toString = function() {
		return this.value + this.message;
	}
};

var EMAIL_INVALID = -1;
var EMAIL_UNKNOWN = -1;

var parseEmail = function(instr) {
	try {
		em = new Email(instr);
	} 
	catch (e) {
		if (e instanceof EmailFormatException) {
			return EMAIL_INVALID;
		}
		else {
			return EMAIL_UNKNOWN;
		}
	}
	return em;
}

console.log(parseEmail('houxianxu@gmail.com'))
console.log(parseEmail('houxianxugmail.com'))


