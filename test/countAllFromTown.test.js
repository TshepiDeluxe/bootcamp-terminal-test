var countFromAll = require('../countAllFromTown');
describe('The countFromAllTown function', function(){
    it ('should return 3', function (){
        assert.equal(3, countFromAll('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    });
});