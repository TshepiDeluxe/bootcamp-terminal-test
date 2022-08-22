var regCheck = require('../regCheck');
const assert = require('assert');
describe('regCheck function', function(){
    it ('should return true', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true)
    })
    it ('should return false', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false)
    })
})