const ftoc = function(temp) {
  temp = (temp - 32) * (5/9); // formula
  temp = Math.round(temp * 10) / 10 // round to one decimal place
  return temp
};

const ctof = function(temp) {
  temp = (temp * 9/5) + 32;
  temp = Math.round(temp * 10) / 10 // round to one decimal place
  return temp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
