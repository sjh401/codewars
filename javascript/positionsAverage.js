function posAverage(s) {
    // your code
  let arr = s.split(', ');
  const total = ((arr.length * (arr.length-1)) /2)*arr[0].length;
  let count = 0;
  
  while(arr.length>1){
    for(let i=1; i<arr.length; i+=1){
      for(let j=0; j<arr[0].length; j+=1){
        if(arr[0].charAt(j) === arr[i].charAt(j)){
          count+=1
          }
      }
    }
    arr.shift();
  }
  return (count/total)*100
  
}