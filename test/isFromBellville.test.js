var isFromBellville = require('../isFromBellville');
const assert = require('assert');
describe(' isFromBellville function', function(){
    it ('should return true', function(){
        assert.equal(isFromBellville('CY 123'), true);
    })
    it ('should return false', function(){
        assert.equal(isFromBellville('CJ 123'), false);
    })
})