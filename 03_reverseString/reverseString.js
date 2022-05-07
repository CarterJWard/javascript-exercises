const reverseString = function (string) {
    let res = ""
    for (i = string.length; i >= 0; i--) {
        res += string.charAt(i - 1)
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
