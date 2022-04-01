
const repeatString = function(string, num) {
    let c = ""; // variable that stores a string which i add to each loop
    for (let i = 0; i < num; i++) { 
        c += string; // adding to the variable holding the string
    }

    string = ""; // empty the string now, we need to store the new repeated version in here 
    string += c; // the variable c has now been appended to the required amount of times so now I add it onto string 
    return string // return string 
};

// Do not edit below this line
module.exports = repeatString;
