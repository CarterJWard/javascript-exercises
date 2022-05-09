const fibonacci = function (num) {
    if (num < 0) {
        return 'OOPS'
    }
    num = parseInt(num)
    let first = 0
    let second = 0
    let current = 1
    for (let i = 0; i <= num; i++) {
        second = first
        first = current
        current = second + first;
    }
    return second
};

// Do not edit below this line
module.exports = fibonacci;
