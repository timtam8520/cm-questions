function InvalidTriangleException(message) {
    return new Error(message);
}

function isTriangleValid(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }
    return true;
}

function triangleArea(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw InvalidTriangleException("One or more of the sides is a negative value!");
    }
    if (!isTriangleValid(a, b, c)) {
        throw InvalidTriangleException("The triangle sides do not form a valid triangle!");
    }
    const s = ( a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

module.exports = {
    triangleArea
};
