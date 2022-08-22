var isWeekday = require('../isWeekday');
const assert = require('assert');
describe('isWeekday Function', function(){
    it ('should return false', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it ('should return true', function(){
        assert.equal(isWeekday('Monday'), true);
    });
})