var numberToPrice = function(number) {
    console.log(number)
    let periods = number.toString().match(/[.]/g)
    if(Number.isInteger(parseInt(number)) === false) return 'NaN'
    if(periods && number.toString().match(/[.]/g).length > 1) return 'NaN'
    number = parseFloat(number).toFixed(3)
    let arr = number.toString().split('')
    arr.pop()
    arr.reverse()
    for(let i=3; i<arr.length; i+=1){
      if((i-2)%3 === 0 && arr[i+1] !== '-' && i+1 !==arr.length){
        arr[i] = ','.concat(arr[i])
      }
    }
    return arr.reverse().join('')
    
  }