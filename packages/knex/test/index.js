const test = require('test');
test.setup();

require('./reactivity');

test.run(console.DEBUG);