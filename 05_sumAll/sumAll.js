const sumAll = function (start, end) {
    let sum = 0
    if (start < 0 || end < 0 || typeof (start) != 'number' || typeof (end) != "number") {
        return 'ERROR'
    }
    if (start > end) {
        for (start; start >= end; start--) {
            sum = sum + start
        }
    } else {
        for (start; start <= end; start++) {
            sum = sum + start
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
