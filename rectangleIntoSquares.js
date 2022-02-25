function sqInRect(lng, wdth){
    //your code here
    if(lng === wdth) return null
    let arr = [];
    while(lng > 0 || wdth > 0){
      if(Math.max(lng,wdth) === lng && wdth > 0){
        arr.push(wdth);
        lng = lng - wdth;
      } else if(Math.max(lng,wdth) === wdth && lng > 0){
        arr.push(lng);
        wdth = wdth - lng;
      } else {
        lng = 0;
        wdth = 0;
      }
    }
    return arr;
  }