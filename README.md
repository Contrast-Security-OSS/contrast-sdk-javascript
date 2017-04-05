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
