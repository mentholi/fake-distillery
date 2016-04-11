var g = require('dyson-generators');

var room_totals = {
	path: '/api/v1/rooms/:room_id/treatments',
	template: {
    "room_id": function(params, query) {
      return params.room_id;
    },
    "start_date": function(params, query) {
      return query.start_date;
    },
    "end_date": function(params, query) {
      return query.end_date;
    },
    "total_treatments": 874822,
    "sessions_treated": 606945,
    "total_goals": 95950,
    "conversion_rate": "15.80",
    "currencies": [
      "EUR",
      "USD",
      "GBP",
    ],
    "sales_by_currency": {
      "EUR": {
        "code": "EUR",
        "goals": 95000,
        "sales": "23234.20",
        "avg_value_per_buyer": "2.45"
      },
      "USD": {
        "code": "USD",
        "goals": 910,
        "sales": "9100.00",
        "avg_value_per_buyer": "10.00"
      },
      "GBP": {
        "code": "GBP",
        "goals": 50,
        "sales": "850.76",
        "avg_value_per_buyer": "17.01"
      }
    }
  }
};

var single_treatment = {
  path: '/api/v1/rooms/:room_id/treatments/:treatment_id',
  template: {
    "room_id": function(params, query) {
      return params.room_id;
    },
    "start_date": function(params, query) {
      return query.start_date;
    },
    "end_date": function(params, query) {
      return query.end_date;
    },
    "treatment_id": function(params, query) {
      return params.treatment_id;
    },
    "total_treatments": 874822,
    "sessions_treated": 606945,
    "total_goals": 95950,
    "conversion_rate": "15.80",
    "currencies": [
      "EUR",
      "USD",
      "GBP",
    ],
    "sales_by_currency": {
      "EUR": {
        "code": "EUR",
        "goals": 95000,
        "sales": "23234.20",
        "avg_value_per_buyer": "2.45"
      },
      "USD": {
        "code": "USD",
        "goals": 910,
        "sales": "9100.00",
        "avg_value_per_buyer": "10.00"
      },
      "GBP": {
        "code": "GBP",
        "goals": 50,
        "sales": "850.76",
        "avg_value_per_buyer": "17.01"
      }
    }
  }
};

module.exports = [room_totals, single_treatment];
