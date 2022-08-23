module.exports = function countAllFromTown(regNo,regNoStart){ 
    var regNoList = regNo.split(',');
    var count = 0;
    for(let i = 0; i < regNoList.length; i++){
      if(regNoList[i].includes(regNoStart)){
      count++;}
    }
    return count;
  }
