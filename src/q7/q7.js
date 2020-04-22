function arrangeBy(key) {
    return (objects) => {
        let output = {};
        if (objects && objects.length > 0) {
            for (const obj of objects) {
                if (!obj || typeof obj !== 'object') {
                    continue;
                }

                const objKey = obj[key];
                if (!objKey) {
                    continue;
                }

                let existingElements = output[objKey];
                if(existingElements) {
                    output = Object.assign(output, { [objKey]: [...existingElements, obj] });
                } else {
                    output = Object.assign(output, { [objKey]: [obj] });
                }
            }
        }
        return output;
    }
}

module.exports = {
    arrangeBy
};
