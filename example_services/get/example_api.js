var g = require('dyson-generators');

var example_endpoint = {
    path: '/api/v1/example-endpoint/:id',
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
module.exports = [example_endpoint];