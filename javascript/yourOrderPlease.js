function order(words){
    let i = 0;
    let arr = [];
    words= words.split(' ');
    while(i < words.length){
        let number = words[i].replace(/\D/g,'');
        arr[parseInt(number)-1] = words[i];
        i += 1;
    }
    
    return arr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string" )