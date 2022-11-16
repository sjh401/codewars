function sortArray(array) {
    // Return a sorted array.
    let odd = array.filter(element => element%2 !== 0).sort((a,b)=>a-b);
    
    return array.map(function(element){
        if(element%2 !== 0){
        element = odd[0];
        odd.shift();
        };
        return element
    });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);

