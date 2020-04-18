const { expect } = require('chai');
const { positiveDivisors } = require('./q2')

describe('q2.js', () => {
    it('return an empty list for a negative number', () => {
        expect(positiveDivisors(-2)).to.have.length(0);
    })

    it('returns the correct divisors for 60', () => {
        expect(positiveDivisors(60)).to.eql([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
    })

    it('returns the correct divisors for 42', () => {
        expect(positiveDivisors(42)).to.eql([1, 2, 3, 6, 7, 14, 21, 42]);
    })
})
