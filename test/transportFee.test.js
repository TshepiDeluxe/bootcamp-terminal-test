var transportFee = require('../transportfee');
const assert = require('assert');
describe ('transportFee function', function(){
    it ('should return R20', function(){
        assert.equal(transportFee('morning'), 'R20')
    });
    it ('should return R10', function(){
        assert.equal(transportFee('afternoon'), 'R10')
    });
    it ('should return free', function(){
        assert.equal(transportFee('nightshift'), 'free')
    })
})
