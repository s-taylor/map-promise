var promiseMap = require('../index');
var assert = require("assert");

describe('promiseMap', function() {
	it('should return array of results to then when successful', function(done) {
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
	it('should reject the promise when not successful', function(done) {
		var testError = new Error("this is broken");
		var upperCase = function(string, cb) {
			cb(testError, null);
		}
		promiseMap(['simon','pavitra'], upperCase)
			.then(null, function(err) {
				assert.deepEqual(err, testError)
				done();
			});
	});
});
