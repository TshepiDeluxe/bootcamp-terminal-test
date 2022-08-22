module.export = function regCheck(regNo,indicator) { 
    return regNo.endsWith(indicator);
  }