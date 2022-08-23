module.exports = function regCheck(regNo,indicator) { 
    return regNo.endsWith(indicator);
  }