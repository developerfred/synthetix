'use strict';

const program = require('commander');

require('pretty-error').start();
require('dotenv').config();

require('./src/commands/build')(program);
require('./src/commands/deploy')(program);
require('./src/commands/verify')(program);
require('./src/commands/nominate')(program);
require('./src/commands/owner')(program);
require('./src/commands/generate-token-list')(program);
require('./src/commands/remove-synths')(program);

program.parse(process.argv);