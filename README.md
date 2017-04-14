## Install
The Contrast Api module is available to install via *pip*.
```commandline
    npm install contrast-security --save
```

### Sample usage
The SDK offers a majority of our public APIs through an instance of the ContrastSdk object.
Any method of the SDK that interacts with our API returns a promise.

> **Note:** The Contrast URL is optional and defaults to https://app.contrastsecurity.com

```javascript
    var Contrast = require('contrast-security');    
    var contrastSdk = new ContrastSdk('username','api_key','service_key','teamserver_url');
```

An example of getting an application:
```javascript
    var orgUuid='organization_uuid';
    contrastSdk.getApplication(orgUuid, 'an_app_id').then(function(response){

    });
```

In some cases, you may want to filter applications, servers, traces or libraries. Any endpoint that involves filtering can use the appropriate filter object.

These methods are easily identifiable on the ContrastSDK object by looking at any methods that include the phrase `filter`.

```javascript
    var filter = {};
    filter.apps = ['appId1', 'appId2'];
    contrastSdk.filterLibraries(orgUuid, filter).then(function(response){

    });
```

### Developing
Use *npm* to install the projects dependencies:

```commandline
    npm install
    npm install -g mocha
```

To run the tests, create a file in the `/tests` directory called *config.json* with TeamServer information. An example test configuration can be seen in `tests/config.json.example`.

Then run tests with mocha:

```commandline
    npm run test
```
