const test = require('test')
test.setup()

var common = require('../common')
var assert = require('assert')

var Point = function () {
	var point = "POINT(" + Array.prototype.slice.apply(arguments).join(", ") + ")";

	return function () {
		return point;
	};
};

var randomBuffer = function () {
	const t = Date.now()
	return {
		string: t,
		buf: Buffer.from(t)
	}
}

describe('insert', () => {
  var bufInfo = randomBuffer();

  it('insert - mysql', () => {
	const queryOptions = { dialect: 'mysql' };

    assert.equal(
      common.Insert(queryOptions).into('table1').set({}).build(),
      "insert into `table1` () values ()"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col: 1 }).build(),
	  "insert into `table1` (`col`) values (1)"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col1: 1, col2: 'a' }).build(),
      "insert into `table1` (`col1`, `col2`) values (1, 'a')"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col1: 1, col2: Point(1, 2) }).build(),
      "insert into `table1` (`col1`, `col2`) values (1, POINT(1, 2))"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col1: 1, col2: bufInfo.buf }).build(),
      "insert into `table1` (`col1`, `col2`) values (1, X'" + Buffer.from(bufInfo.string).toString("hex") + "')"
    )
  })

  it('insert - sqlite', () => {
	const queryOptions = { dialect: 'sqlite' };

    assert.equal(
      common.Insert(queryOptions).into('table1').set({}).build(),
      "insert into `table1` default values"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col: 1 }).build(),
	  "insert into `table1` (`col`) values (1)"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col1: 1, col2: 'a' }).build(),
      "insert into `table1` (`col1`, `col2`) values (1, 'a')"
    )

    assert.equal(
      common.Insert(queryOptions).into('table1').set({ col1: 1, col2: bufInfo.buf }).build(),
      "insert into `table1` (`col1`, `col2`) values (1, X'" + Buffer.from(bufInfo.string).toString("hex") + "')"
    )
  })
})

if (require.main === module) {
  test.run(console.DEBUG)
}
