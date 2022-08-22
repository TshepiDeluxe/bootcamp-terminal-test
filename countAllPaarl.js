module.export = function countAllPaarl(regNo){ 
    var regNoList = regNo.split(',');
    var count = 0;
    for(let i = 0; i < regNoList.length; i++){ 
      if(regNoList[i].includes('CJ')){
       count++;}
      
    }
    return count;
  }