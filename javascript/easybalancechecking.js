function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
    const regex = /[A-z0-9\.\s]/g
    let arr = book.split('\n').filter(element => element.length > 0).map(element => {return element.match(regex).join('')})
    
    let original = parseFloat(arr[0]);
    let total = 0;
    let count = arr.length -1

    for(let i=0; i<arr.length; i+=1){
        if(i===0){
        arr[i] = 'Original Balance: '.concat(parseFloat(arr[i]).toFixed(2))
        } else {
        let temp = arr[i].split(' ')
        let num = parseFloat(temp[2])
        temp[2] = parseFloat(temp[2]).toFixed(2)
        total += num
        original -= num
        arr[i] = temp.join(' ')
        
        arr[i] = arr[i].concat(` Balance ${original.toFixed(2)}`)
        }
    }
    return arr.join('\r\n').concat(`\r\nTotal expense  ${total.toFixed(2)}\r\nAverage expense  ${(total/count).toFixed(2)}`)
}