const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arrChain : [], 
  getLength: function() {
    return this.arrChain.length;
  },
  addLink: function(value) {
   
    this.arrChain.push(`( ${value} )`);
    return this;
  },
  removeLink: function(position) {
    if (Number.isInteger(position) 
    && (position>0)
    && (this.arrChain.length >= position)) {
        this.arrChain.splice(position-1,1);
    return this;
    } else {
    this.arrChain = [];
    throw new Error('Error');
    }
  },
  reverseChain: function() {
    this.arrChain.reverse();
    return this;
  },
  finishChain: function() {
    const currentChain = this.arrChain.join('~~');
    this.arrChain = [];
    return currentChain;
  }

};


/*const chainMaker = {



  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};*/

module.exports = chainMaker;
