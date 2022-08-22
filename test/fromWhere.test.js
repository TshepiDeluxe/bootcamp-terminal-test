var fromWhere = require('../fromWhere');
const assert = require('assert'); 
describe ('fromWhere function', function(){
    it ('it should return Bellville', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    })
    it ('it should return Paarl', function(){
        assert.equal(fromWhere('CJ'), 'Bellville');
    })
})