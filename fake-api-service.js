var dyson = require('dyson');
var minimist = require('minimist');

// Read service definition config
var argv = minimist(process.argv.slice(2));
var configDir = argv['config'];
if (!configDir) {
  throw new Error('Config directory is required! Use --config');
}

// Store reference to expressServer
// globally so we can list all registred
// routes on index view.
expressServer = dyson.bootstrap({
  configDir: configDir,
  port: 4000
});

// Provided dyson is installed globally,
// the equivalent for this script from the CLI would be: `dyson services`
