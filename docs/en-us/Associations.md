## Asscociations

Associations describe relation between models, in general, it represents relation-model in SQL(mysql, sqlite, etc). In `fiborm`, it implemented by `Model::defineMergeModel`

By default: `fiborm` support those types of association:

- [hasOne](en-us/Assoc-hasOne.md)
- [extendsTo](en-us/Assoc-extendsTo.md)
- [hasManyExclusively](en-us/Assoc-hasManyExclusively.md)
- [belongsToMany](en-us/Assoc-belongsToMany.md)

### Customize your own associations
