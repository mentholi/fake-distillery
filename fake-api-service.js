var dyson = require('dyson');

// Store reference to expressServer
// globally so we can list all registred
// routes on index view.
expressServer = dyson.bootstrap({
	configDir: __dirname + '/services',
	port: 4000
});

// Provided dyson is installed globally,
// the equivalent for this script from the CLI would be: `dyson services`
