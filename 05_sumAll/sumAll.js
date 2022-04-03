const sumAll = function(num1, num2) {
    if (num1 < num2 && num1 & num2 > 0 && !isNaN(num1 & num2)) { // added to pass check 3, 4, 5 and 6 
        for (let i = num1; i != num2; i++) { 
        num1 += (i + 1);
        }

        return num1

    } else if (num1 > num2 && num1 & num2 > 0 && !isNaN(num1 & num2)) {
        [num1, num2] = [num2, num1]; // swapping the variable values
        for (let i = num1; i != num2; i++) { 
            num1 += (i + 1);
        }
    
        return num1
    } else
        return 'ERROR'
    

};

// Do not edit below this line
module.exports = sumAll;

