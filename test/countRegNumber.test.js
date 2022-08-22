var countRegNumber = require('../countRegNumber');
const assert = require('assert');

describe ('countRegNumber function', function(){
     it ('should return 3', function(){
        assert(3,countRegNumber('CA 182736,CY 523519,CJ 812328'))
     });
});