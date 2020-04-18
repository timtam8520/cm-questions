const { expect } = require("chai");
require('./q1');

describe('q1.js', () => {
    it('returns true for null', () => {
        var a = String(null);
        expect(a.isNullOrEmpty()).to.be.true;
    })

    it('returns false for "a"', () => {
        var a = String("a");
        expect(a.isNullOrEmpty()).to.be.false;
    })

    it('returns true for ""', () => {
        var a = String("");
        expect(a.isNullOrEmpty()).to.be.true;
    })

    it('returns true for "null"', () => {
        var a = String("null");
        expect(a.isNullOrEmpty()).to.be.true;
    })
})
