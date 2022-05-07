const removeFromArray = function (arr) {

    for (i = 1; i <= arguments.length; i++) {
        let val = arguments[i]
        let loc = arr.findIndex(id => id === val)
        while (loc != -1) {
            if (loc == arr.length - 1) {
                arr.pop()
            }
            if (loc == 0) {
                arr.shift()
            } else {
                let arr1 = arr.slice(0, loc)
                let arr2 = arr.slice(loc + 1, arr.length)
                arr = arr1.concat(arr2)
            }
            loc = arr.findIndex(id => id === val)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
