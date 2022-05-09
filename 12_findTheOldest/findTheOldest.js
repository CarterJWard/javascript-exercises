const findTheOldest = function (people) {
    let age = people[0].yearOfDeath - people[0].yearOfBirth
    let person = people[0]
    console.log(age)
    people.forEach(element => {
        let curAge = element.yearOfDeath - element.yearOfBirth
        if (curAge > age) {
            age = curAge
            person = element

        }
    })
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
