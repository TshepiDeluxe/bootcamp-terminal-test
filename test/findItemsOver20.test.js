var findItemOver20 = require('../findItemsOver20');
const assert = require('assert')
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
describe (' findItemOver20 function', function(){
    it (' it should return results', function(){
        assert.deepEqual(results, findItemsOver20(itemList))
    });
});