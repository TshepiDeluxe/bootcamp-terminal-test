var yearAgo = require('../yearsAgo');
const assert = require('assert');
describe('yearAgo function', function(){
    it ('should return 46', function(){
        assert.equal(yearAgo(1976),46)
    })
})