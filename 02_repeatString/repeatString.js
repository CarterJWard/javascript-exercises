const repeatString = function (string, val) {
    let res = ""
    if (val < 0) {
        return 'ERROR'
    }
    for (i = 0; i < val; i++) {
        res += string
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
