module.exports = [
    {
        name: 'fiborm',
        _dirname: 'fiborm',
        isTopPackage: true
    },
    {
        name: 'knex',
        _dirname: 'knex',
    },
    {
        name: 'sql-query',
        _dirname: 'sql-query',
    },
    {
        name: 'sql-ddl-sync',
        _dirname: 'sql-ddl-sync',
    },
    /* internal module :start */
    {
        name: 'orm-core',
        _dirname: 'orm-core',
    },
    {
        name: 'db-driver',
        _dirname: 'db-driver',
    },
    {
        name: 'orm-hql',
        _dirname: 'orm-hql',
    },
    {
        name: 'orm-migrator',
        _dirname: 'orm-migrator',
    },
    {
        name: 'orm-plugin-pool',
        _dirname: 'orm-plugin-pool',
    },
    {
        name: 'orm-plugin-uacl',
        _dirname: 'orm-plugin-uacl',
    },
    /* internal module :end */
]