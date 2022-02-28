function arrayDiff(a, b) {
    while(b.length){
      a = a.filter(element => element !== b[0])
      b.shift()  
    }
    return a
  }