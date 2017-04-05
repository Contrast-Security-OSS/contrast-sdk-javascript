var assert = require('assert');
var ContrastSdk = require('../index.js');

var testConfig = require('./config');

describe('SDK Setup Test', function() {

    it('Should have created correct headers', function() {
      sdk = new ContrastSdk('contrast_admin','demo','demo')
      assert(sdk);
      assert(sdk.headers);
      assert.equal('Y29udHJhc3RfYWRtaW46ZGVtbw==', sdk.headers.Authorization);
      assert.equal('demo',sdk.headers['API-Key']);
    });

});
