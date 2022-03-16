

function unluckyDays(year){
    //your code here
    let i = 1;
    let counter = 0;
    while(i<13){
      let g = new Date(`${i} 13, ${year}`)
      if(g.getDay() === 5){
        counter += 1;
      }
      i+=1
    }
    return counter
  }