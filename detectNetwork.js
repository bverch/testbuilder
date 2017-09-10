// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var idNum = Number(cardNumber.substring(0,6));
  if(cardNumber.length === 14 && (parseInt(idNum/10000) === 38 || parseInt(idNum/10000) === 39)){
	  return 'Diner\'s Club';
  }
  else if((cardNumber.length <= 19 && cardNumber.length >= 16) && ((parseInt(idNum) >= 622126 && parseInt(idNum) <= 622925) || (parseInt(idNum/1000) >= 624 && parseInt(idNum/1000) <= 626) || (parseInt(idNum/100) >= 6282 && parseInt(idNum/100) <= 6288))){
	  return 'China UnionPay';
  }
  else if((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (parseInt(idNum) === 564182 || parseInt(idNum) === 633110 || parseInt(idNum/100) === 6333 || parseInt(idNum/100) === 6759 || parseInt(idNum/100) === 4936 || parseInt(idNum/100) === 4911 || parseInt(idNum/100) === 4905 || parseInt(idNum/100) === 4903)){
	  return 'Switch';
  }
  else if(cardNumber.length === 15 && (parseInt(idNum/10000) === 34 || parseInt(idNum/10000) === 37)){
	  return 'American Express';
  }
  else if((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && parseInt(idNum/100000) === 4){
	  return 'Visa';
  }
  else if(cardNumber.length === 16 && (parseInt(idNum/10000) >= 51 && parseInt(idNum/10000) <= 55)){
	  return 'MasterCard';
  }
  else if((cardNumber.length === 16 || cardNumber.length === 19) && (parseInt(idNum/10000) === 65 || (parseInt(idNum/1000) <= 649 && parseInt(idNum/1000) >= 644) || parseInt(idNum/100) === 6011)){
	  return 'Discover';
  }
  else if((cardNumber.length <= 19 && cardNumber.length >= 12) && (parseInt(idNum/100) === 5018 || parseInt(idNum/100) === 5020 || parseInt(idNum/100) === 5038 || parseInt(idNum/100) === 6304)){
	  return 'Maestro';
  }
  else{
	  return 'Invalid Card';
  }
};