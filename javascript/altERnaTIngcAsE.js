String.prototype.toAlternatingCase = function () {
    // Define your method here :)
   return this.split('').map((letter)=>{
      if(letter.match(/[^A-z]/g) === true){
        return letter
      } else if(letter.toLowerCase() === letter){
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    }).join('');
  }

String.prototype.toAlternatingCase2 = function() {
    return this.split('').map(l => l === l.toLowerCase() ? l.toUpperCase():l.toLowerCase()).join('');
}