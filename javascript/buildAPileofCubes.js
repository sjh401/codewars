function findNb(m) {
    let volume = 1;
    let n = 1;
    while(volume < m && volume >= 1){
        volume += (n+=1)**3;
    }
    return volume === m ? n:-1;
}

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));