# Fake API service

Simple server for mocking external api services in tests.

# Installing
```bash
git clone https://github.com/giosg/fake-api.git
cd fake-api
npm install
```

# Running
```bash
# node fake-api-service.js --config <path_to_service_definitions_dir>
node fake-api-service.js --config /var/data/service_mock
```

# Development, running and watchin changes in source files
```bash
# nodemon fake-api-service.js --config <path_to_service_definitions_dir>
nodemon fake-api-service.js --config example_services
```

# Using API
By default server runs on port 4000.
```bash
curl "http://localhost:4000/api/v1/example-endpoint/123/?param_from_query=test" | python -m json.tool
```

# Creating service definitions
In order to use fake-api-service to mock external service you need to configure desired endpoints and responses.
Under the hood fake-api-service uses [Dyson](https://github.com/webpro/dyson) to generate dynamic fake api responses so you can prefer
to it's documentation on how to define endpoints. There is also example on `example_services/get` which can be helpful.

## quick start
1. Create following folder hierarchy
```bash
mocked_external_service
└── get
    └── some_mocked_api.js
```

2. Add following javascript to `some_mocked_api.js` file
```javascript
var some_endpoint = {
    path: '/api/v1/example-endpoint',
    template: {
    "id": function(params, query) {
      return params.id;
    },
    "param_from_query": function(params, query) {
      return query.param_from_query;
    },

    "foobar": "barfoo",
    "kewl": true
  }
};
module.exports = [some_endpoint];
```

3. Start server
```
node fake-api-service.js --config mocked_external_service
```

4. Consume API
```bash
curl "http://localhost:4000/api/v1/example-endpoint/123/?param_from_query=test" | python -m json.tool
```
