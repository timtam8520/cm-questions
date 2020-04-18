function mostCommon(integers) {
    if (integers && (integers.length <= 1)) {
        return integers;
    }
    const dict = new Map();
    for (let i = 0; i < integers.length; i++) {
        const number = integers[i];
        dict.has(number) ? dict.set(number, 1 + dict.get(number)) : dict.set(number, 1)
    }

    let sortedResults = [...dict.entries()].sort((a,b) => b[1] - a[1])

    let index = 0;
    const highestCommonality = sortedResults[index][1];
    const results = [];
    
    while(index < sortedResults.length && highestCommonality === sortedResults[index][1]) {
        results.push(sortedResults[index][0]);
        ++index;
    }

    return results;
}

module.exports = {
    mostCommon
};
