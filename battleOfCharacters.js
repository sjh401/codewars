function battle(x, y) {
    // Lets the battle begin!
    // A = 65 -> Z = 90
    //a = 97 -> z = 122
  
    let xSum = 0;
    let ySum = 0;
    x.split('').forEach(letter => {
      if(letter.charCodeAt(0) <91){
        xSum += letter.charCodeAt(0)-64
      } else if(letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 123){
        xSum += ((letter.charCodeAt(0)-96)/2)
      }
    })
    y.split('').forEach(letter => {
      if(letter.charCodeAt(0) <91){
        ySum += letter.charCodeAt(0)-64
      } else if(letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 123){
        ySum += ((letter.charCodeAt(0)-96)/2)
      }
    })
  
    return xSum > ySum ? x.toString(): ySum > xSum ? y.toString() :'Tie!'
  }