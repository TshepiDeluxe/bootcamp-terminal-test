module.export = function mostProfitableDepartment(salesData){ 
    const salesMap = {};
    for(let i = 0; i < salesData.length; i++){ 
      const currentdepartmentData = salesData[i];
      salesMap[currentdepartmentData.department] = 0;
    }
    console.log(salesMap);
    
    for(let i = 0; i < salesData.length; i++){ 
      var currentsalesData = salesData[i];
      var currentSalesTotal = salesMap[currentsalesData.department];
      currentSalesTotal += currentsalesData.sales;
      salesMap[currentsalesData.department] = currentSalesTotal;
    }
    console.log(salesMap)
    var currentMaxSales = 0;
    var currentDepartment = null; 
    for(var x in salesMap) { 
      var profitableDept = salesMap[x]
      if(currentMaxSales < profitableDept){ 
        currentMaxSales = profitableDept;
        currentDepartment = x
        
      }
      console.log(currentDepartment);
    }
    return currentDepartment;
  }