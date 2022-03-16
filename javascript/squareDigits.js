function squareDigits(num){
    let result = num.toString().split('').map(element=>parseInt(element)**2).join('')
    return parseInt(result);
  }