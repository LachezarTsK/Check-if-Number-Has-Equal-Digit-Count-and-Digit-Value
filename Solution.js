
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    const ascii_zero = 48;
    const totalDigits = 10;
    const frequency = new Array(totalDigits).fill(0);

    for (let i = 0; i < num.length; ++i) {
        frequency[num.codePointAt(i) - ascii_zero]++;
    }
    for (let i = 0; i < num.length; ++i) {
        if (frequency[i] !== (num.codePointAt(i) - ascii_zero)) {
            return false;
        }
    }
    return true;
};
