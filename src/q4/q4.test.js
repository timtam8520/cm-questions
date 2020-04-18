const { expect } = require('chai');
const { mostCommon } = require('./q4');

describe('q4.js', () => {
    it('returns an empty list for an empty list', () => {
        expect(mostCommon([])).to.have.length(0);
    })

    it('returns the list for a single integer', () => {
        expect(mostCommon([4])).to.eql([4]);
    })

    it('returns correctly for a list of integers with the same commonality', () => {
        expect(mostCommon([1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7]);
    })

    it('returns correctly for a list of integers with higher commonality', () => {
        expect(mostCommon([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4])).to.eql([5, 4]);
    })
})
