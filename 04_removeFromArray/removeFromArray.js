const removeFromArray = function(array, ...args) {
   
    let newArray = array.filter(function(item, index) {
        if (!args.includes(item)) {
            return item;
        }
    })
    return newArray
    }

    // filters out a new array based on arguments 

// Do not edit below this line
module.exports = removeFromArray;
