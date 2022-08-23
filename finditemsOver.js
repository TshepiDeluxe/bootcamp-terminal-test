module.exports = function findItemsOver(list,threshold){ 
    var itemListOver = [];
    for (let i = 0; i < list.length; i++){ 
      var itemList = list[i];
      var itemQty = itemList.qty;
      if(itemQty > threshold){
      itemListOver.push(itemList)}
    }
    return itemListOver
  }