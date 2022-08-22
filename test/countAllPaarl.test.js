var countAllPaarl = require('../countAllPaarl');
const assert = require("assert");
describe('countAllPaarl', function(){
    it ('should return 2', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'))
    });
});