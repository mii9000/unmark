var assert = require('assert'),
	fs = require('fs'),
	path = require('path')
	markdown = fs.readFileSync(path.resolve(__dirname, 'source.md')).toString(),
	result = fs.readFileSync(path.resolve(__dirname, 'result.txt')).toString()
	unmark = require('../unmark');

describe('remove-markdown', function () {
  it('should remove markdown', function () {
	var text = unmark(markdown);
	console.log(text);	
	assert.equal(text, result);
  });
});