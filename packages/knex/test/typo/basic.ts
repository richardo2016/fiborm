import FKnex = require('../../')

FKnex.SandBox

var knex = FKnex({
    client: 'sqlite'
})

knex.orWhere
knex.andWhere

var qbuilder = knex.queryBuilder()
var sbuilder = knex.schema

knex.batchInsert
