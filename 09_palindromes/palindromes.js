const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    str = str.replace(/\s/g, "")
    str = str.toLowerCase()
    if (str == reverseString(str)) {
        return true
    }
    return false
};

const reverseString = function (string) {
    let res = ""
    for (i = string.length; i >= 0; i--) {
        res += string.charAt(i - 1)
    }
    return res
};

// Do not edit below this line
module.exports = palindromes;
