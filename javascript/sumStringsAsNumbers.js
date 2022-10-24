function sumStrings(a,b) { 
    if(!a.length || !b.length) return !a.length ? b : a;
    let i = 0;
    a = a.toString().split('').reverse();
    b = b.toString().split('').reverse();
    let totalString = '';
    let overNine = 0;
  
    while(i < a.length || i < b.length){
      let temp = '';
      if(i >= a.length){
        temp = b[i] * 1;
      } else if(i >= b.length){
        temp = a[i] * 1;
      } else{
        temp = (a[i]*1 + b[i]*1);
      };
      
      if(overNine > 0){
        temp += overNine;
        overNine = 0;
      };
      temp = temp.toString().split('');
      
      if(temp.length > 1){
        totalString = temp[1].concat(totalString);
        overNine = temp[0]*1;
      } else {
        totalString = temp[0].concat(totalString);
      };
    i+=1;
    };
    if(overNine > 0){
      totalString = overNine.toString().concat(totalString);
    };
    
    totalString = totalString.split('');
    while(totalString[0] === "0"){
      totalString.shift();
    };
    return totalString.join('');
  }