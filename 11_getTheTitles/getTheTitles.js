const getTheTitles = function (books) {
    let keep = []
    books.forEach(element => keep.push(element.title))
    return keep
};

// Do not edit below this line
module.exports = getTheTitles;
