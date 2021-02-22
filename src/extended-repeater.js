const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (options.separator === undefined) options.separator = '+'; 
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  
   
  let resAdd=  (options.addition+options.additionSeparator)
  .repeat(options.additionRepeatTimes);
  
  resAdd = resAdd.slice(0, resAdd.length - options.additionSeparator.length);
  
  
  console.log(resAdd);
  
  let resStr = (str + resAdd + options.separator)
  .repeat(options.repeatTimes)
  resStr = resStr.slice(0, resStr.length - options.separator.length);
   
   
   return resStr;
  
  };