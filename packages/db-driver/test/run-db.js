const test = require('test')
test.setup()

var ORM     = require("@fiborm/orm");
var common  = require("./common");
var url     = require("url");

if (!process.env.URI) {
	throw new Error('no URI provided');
}

var uri = url.parse(process.env.URI, true);

if (!uri.protocol) {
	throw new Error(
		'invlid URI provided: ',
		process.env.URI
	)
}

ORM.connect(process.env.URI, function (err, db) {
	if (err) throw err;

	common.driver = db.driver;
	common.dialect = db.driver.dialect;

	runTest();

	db.closeSync();

	process.exit(0);
});

function runTest () {
	require('./integration/db.callback')
	require('./integration/db')

	test.run(console.DEBUG)
}