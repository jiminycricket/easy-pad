const { padLeft, padRight } = require('./index.js');
const assert = require('assert');

describe('padLeft', () => {
  it("padLeft('test', 10, '*') === '******test'", () => {
    assert.equal(padLeft('test', 10, '*'), '******test');
  });
});

describe('padRight', () => {
  it("padLeft('test', 10, '*') === 'test******g'", () => {
    assert.equal(padRight('test', 10, '*'), 'test******');
  });
});
