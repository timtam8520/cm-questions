function positiveDivisors(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result;
}

module.exports = {
    positiveDivisors
};
