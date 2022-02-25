function assembleString(array){
    if(!array.length) return ''
    let str = array[0];
    let i = 1;
    let j = 0;
    
    while(str.includes('*') === true){
      let temp = ''
      if(i===array.length){
        str = str.replace('*','#')
      } else if(array[i].charAt(j) !== '*' && j<str.length){
        temp = str
        str = str.slice(0,j)
        temp = temp.slice(j+1,temp.length)
        str = str.concat(array[i].charAt(j)).concat(temp)
      } else if(j>str.length){
        i+=1
        j=0
      }
        j +=1;
    }
    return str;
  }