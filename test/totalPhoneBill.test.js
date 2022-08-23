var totalPhoneBill = require('../totalPhoneBill');
const assert = require('assert'); 
describe('totalPhoneBill function', function(){
    it ('should return R7.45', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    });
    it ('should return R3.40', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'))
    })
})