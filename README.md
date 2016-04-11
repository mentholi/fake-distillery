# Fake api service

Simple server for mocking external api services in tests.

# Installing
```
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
```
# nodemon fake-api-service.js --config <path_to_service_definitions_dir>
nodemon fake-api-service.js --config example_services
```

# Creating service definitions
In order to use fake-api-service to mock external service you need to configure desired endpoints and responses.
Under the hood fake-api-service uses [Dyson](https://github.com/webpro/dyson) to generate dynamic fake api responses so you can prefer
to it's documentation on how to define endpoints. There is also example on `example_services/get` which can be helpful.