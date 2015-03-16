var promiseMap = require('../index');
var assert = require("assert");

describe('promiseMap', function() {
	it('should work', function(done) {
		var upperCase = function(string, cb) {
			cb(null, string.toUpperCase())
		}
		var expect = ["SIMON","PAVITRA"];
		promiseMap(['simon','pavitra'], upperCase)
			.then(function(result) {
				assert.deepEqual(expect, result);
				done();
			});
	});
});
