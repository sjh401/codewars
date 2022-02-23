function sumArray(array) {
  if(array === null || array === undefined || array.length < 3) return 0
    array.sort((a,b)=>a-b)
    array.pop()
    array.shift()
    return array.reduce((c,p)=> c+p)
}