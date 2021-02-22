const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (isDirect) {
     if (isDirect ===true || (isDirect==undefined)) {
      this.isDirect = true;
      
    }     
    if (isDirect ===false) {
       this.isDirect = false;
       
    } 
  }    
  
  encrypt(message, key) {
    if ((!message) || (!key)) throw Error('Error');
    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arrMes = message.toUpperCase().split('');
    //key = key.padStart(arrMes.length+1,key);
    key = key.repeat(Math.ceil(message.length/key.length));    
    let  arrKey = key.toUpperCase().split('');
    
    let arrMesEcrypt = [];
      
    for (let i=0; i<arrMes.length; i++) {
      if(arr_EN.indexOf(arrMes[i])!=-1) {
      arrMesEcrypt.push(arr_EN[(arr_EN.indexOf(arrMes[i]) + arr_EN.indexOf(arrKey[i]))%26]);
      } else {
      arrMesEcrypt.push(arrMes[i]);
      arrKey.splice(i, 0, arrMes[i]);
      }
      
      
    }  
   
    if (this.isDirect) {
    return arrMesEcrypt.join('');
    } else {
    return arrMesEcrypt.reverse().join('');
    }
    
    
  } 
  decrypt(message, key) {
     if ((!message) || (!key)) throw new CustomError('Error');
    const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arrMes = message.toUpperCase().split('');
    //key = key.padStart(arrMes.length+1,key);
    key = key.repeat(Math.ceil(message.length/key.length));
   
    let  arrKey = key.toUpperCase().split('');
    
    let arrMesEcrypt = [];
      
    for (let i=0; i<arrMes.length; i++) {
      if(arr_EN.indexOf(arrMes[i])!=-1) {
      arrMesEcrypt.push(arr_EN[(arr_EN.indexOf(arrMes[i]) - arr_EN.indexOf(arrKey[i])+26)%26]);
      } else {
      
      arrMesEcrypt.push(arrMes[i]);
      arrKey.splice(i, 0, arrMes[i]);
      
      }
      
    }  
    
     if (this.isDirect) {
    return arrMesEcrypt.join('');
    } else {
    return arrMesEcrypt.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
