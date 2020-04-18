const { expect } = require('chai');
const { triangleArea } = require('./q3');

describe('q3.js', () => {
    it('throws when any side is given as negative', () => {
        expect(() => triangleArea(10, -9, 11)).to.throw("One or more of the sides is a negative value!");
    })

    it('throws when the triangle is not valid, due to the sides', () => {
        expect(() => triangleArea(11, 2, 9)).to.throw("The triangle sides do not form a valid triangle!");
    })

    it('calculates the area of a triangle', () => {
        expect(triangleArea(3, 4, 5)).to.equal(6);
    })

    it('calculates the area of a triangle (complex)', () => {
        expect(triangleArea(9, 10, 11)).to.equal(30 * Math.sqrt(2));
    })
})
