const reverseString = function(string) {
    let splitstring = string.split('');  // split the string into individual characters and store in splitstring array. We need to store it as split method is non destructive
    splitstring.reverse(); // reverse the array of characters
    string = splitstring.join(''); // join the characters back together and assign to string

    return string 


};

// Do not edit below this line
module.exports = reverseString;
