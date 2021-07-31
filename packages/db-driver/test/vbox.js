const vm = require('vm')

const vbox = new vm.SandBox({}, name => {
    try {
        return require(name);
    } catch (err) {
        console.warn(`error occured when try to require('${name}')`)
        console.error(err);
    }
})

const suffix = process.env.ENTRY_SUFFIX || ''

vbox.add({
    [`${require.resolve('../lib')}`]: require(`../lib/index${suffix}`)
})

vbox.run(require.resolve('./run'))