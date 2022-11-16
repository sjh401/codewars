const fourSix = (four) => {
    let arr = [];
    
    while(four > 0){
        arr.unshift(Math.floor(four/4));
        four -= 4;
    };
    four > 0 ? arr.push(arr[arr.length-1] + (four/4)): arr[arr.length-1] += (four/4);
    return arr;
}

console.log(fourSix(27*7))