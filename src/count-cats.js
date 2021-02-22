const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let numberCats = 0;
  arrCats = backyard.flat();
     arrCats.forEach(item_cat => {
    if (item_cat==='^^') numberCats++;
  });
  return numberCats;
};

