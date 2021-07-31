const test = require('test')
test.setup()

var common = require('../common')
var assert = require('assert')

describe('select-aggregate', () => {
  it('select-aggregate', () => {
    assert.equal(
      common.Select().from('table1').max('col1').build(),
    //   'SELECT MAX(`col1`) FROM `table1`'
	'select MAX(`col1`) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').avg().max('col1').build(),
    //   'SELECT AVG(MAX(`col1`)) FROM `table1`'
	'select AVG(MAX(`col1`)) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').avg().max('col1').min('col2').build(),
    //   'SELECT AVG(MAX(`col1`)), MIN(`col2`) FROM `table1`'
	'select AVG(MAX(`col1`)), MIN(`col2`) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').avg().max([ 'col1', 'col2' ]).min('col3').build(),
    //   'SELECT AVG(MAX(`col1`, `col2`)), MIN(`col3`) FROM `table1`'
	'select AVG(MAX(`col1`, `col2`)), MIN(`col3`) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').round('col1', 2).build(),
    //   'SELECT ROUND(`col1`, 2) FROM `table1`'
	'select ROUND(`col1`, 2) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').round().build(),
    //   'SELECT ROUND(*) FROM `table1`'
	'select ROUND(*) from `table1`'
    )

    assert.equal(
      common.Select().from('table1').round('col1', 3, 'x').build(),
    //   'SELECT ROUND(`col1`, 3) AS `x` FROM `table1`'
	'select ROUND(`col1`, 3) as `x` from `table1`'
    )
  })
})

if (require.main === module) {
  test.run(console.DEBUG)
}
