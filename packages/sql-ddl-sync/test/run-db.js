const test = require('test')
test.setup()

var DBDriver     = require("@fiborm/db-driver");
var common  = require("./common");
var url     = require("url");

if (!process.env.URI) {
	throw new Error('no URI provided')
}

var uri = url.parse(process.env.URI, true);

if (!uri.protocol) {
	throw new Error(
		'invlid URI provided: ',
		process.env.URI
	)
}

common.dbdriver = DBDriver.create(process.env.URI);
common.dialect = common.dbdriver.type;
runTest();

process.exit(0);

function runTest () {
	require('./integration/db.callback')
	require('./integration/db')

	require('./integration/db.sync')

	test.run(console.DEBUG)

	common.dbdriver.close()
}