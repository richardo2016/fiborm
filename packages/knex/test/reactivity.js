const test = require('test');
test.setup();

const { VR } = require('../')

describe("reactivity/effect", () => {
    // it('should run the passed function once (wrapped by a effect)', () => {
    //     const fnSpy = jest.fn(() => { })
    //     VR.effect(fnSpy)
    //     expect(fnSpy).toHaveBeenCalledTimes(1)
    // })

    it('should observe basic properties', () => {
        let dummy
        const counter = VR.reactive({ num: 0 })
        VR.effect(() => (dummy = counter.num))

        assert.equal(dummy, 0)
        counter.num = 7
        assert.equal(dummy, 7)
    })

    it('should observe multiple properties', () => {
        let dummy
        const counter = VR.reactive({ num1: 0, num2: 0 })
        VR.effect(() => (dummy = counter.num1 + counter.num1 + counter.num2))

        assert.equal(dummy, 0)
        counter.num1 = counter.num2 = 7
        assert.equal(dummy, 21)
    })

    it('should handle multiple effects', () => {
        let dummy1, dummy2
        const counter = VR.reactive({ num: 0 })
        VR.effect(() => (dummy1 = counter.num))
        VR.effect(() => (dummy2 = counter.num))

        assert.equal(dummy1, 0)
        assert.equal(dummy2, 0)
        counter.num++
        assert.equal(dummy1, 1)
        assert.equal(dummy2, 1)
    })

    it('should observe nested properties', () => {
        let dummy
        const counter = VR.reactive({ nested: { num: 0 } })
        VR.effect(() => (dummy = counter.nested.num))

        assert.equal(dummy, 0)
        counter.nested.num = 8
        assert.equal(dummy, 8)
    })

    it('should observe delete operations', () => {
        let dummy
        const obj = VR.reactive({ prop: 'value' })
        VR.effect(() => (dummy = obj.prop))

        assert.equal(dummy, 'value')
        // @ts-ignore
        delete obj.prop
        assert.equal(dummy, undefined)
    })

    it('should observe has operations', () => {
        let dummy
        const obj = VR.reactive({ prop: 'value' })
        VR.effect(() => (dummy = 'prop' in obj))

        assert.equal(dummy, true)
        // @ts-ignore
        delete obj.prop
        assert.equal(dummy, false)
        obj.prop = 12
        assert.equal(dummy, true)
    })

    it('should observe properties on the prototype chain', () => {
        let dummy
        const counter = VR.reactive({ num: 0 })
        const parentCounter = VR.reactive({ num: 2 })
        Object.setPrototypeOf(counter, parentCounter)
        VR.effect(() => (dummy = counter.num))

        assert.equal(dummy, 0)
        // @ts-ignore
        delete counter.num
        assert.equal(dummy, 2)
        parentCounter.num = 4
        assert.equal(dummy, 4)
        counter.num = 3
        assert.equal(dummy, 3)
    })

    it('should observe has operations on the prototype chain', () => {
        let dummy
        const counter = VR.reactive({ num: 0 })
        const parentCounter = VR.reactive({ num: 2 })
        Object.setPrototypeOf(counter, parentCounter)
        VR.effect(() => (dummy = 'num' in counter))

        assert.equal(dummy, true)
        // @ts-ignore
        delete counter.num
        assert.equal(dummy, true)
        // @ts-ignore
        delete parentCounter.num
        assert.equal(dummy, false)
        counter.num = 3
        assert.equal(dummy, true)
    })

    it('should observe inherited property accessors', () => {
        let dummy, parentDummy, hiddenValue
        const obj = VR.reactive({})
        const parent = VR.reactive({
            set prop(value) {
                hiddenValue = value
            },
            get prop() {
                return hiddenValue
            }
        })
        Object.setPrototypeOf(obj, parent)
        VR.effect(() => (dummy = obj.prop))
        VR.effect(() => (parentDummy = parent.prop))

        assert.equal(dummy, undefined)
        assert.equal(parentDummy, undefined)
        obj.prop = 4
        assert.equal(dummy, 4)
        // this doesn't work, should it?
        // assert.equal(parentDummy, 4)
        parent.prop = 2
        assert.equal(dummy, 2)
        assert.equal(parentDummy, 2)
    })

    it('should observe function call chains', () => {
        let dummy
        const counter = VR.reactive({ num: 0 })
        VR.effect(() => (dummy = getNum()))

        function getNum() {
            return counter.num
        }

        assert.equal(dummy, 0)
        counter.num = 2
        assert.equal(dummy, 2)
    })

    it('should observe iteration', () => {
        let dummy
        const list = VR.reactive(['Hello'])
        VR.effect(() => (dummy = list.join(' ')))

        assert.equal(dummy, 'Hello')
        list.push('World!')
        assert.equal(dummy, 'Hello World!')
        list.shift()
        assert.equal(dummy, 'World!')
    })

    it('should observe implicit array length changes', () => {
        let dummy
        const list = VR.reactive(['Hello'])
        VR.effect(() => (dummy = list.join(' ')))

        assert.equal(dummy, 'Hello')
        list[1] = 'World!'
        assert.equal(dummy, 'Hello World!')
        list[3] = 'Hello!'
        assert.equal(dummy, 'Hello World!  Hello!')
    })

    it('should observe sparse array mutations', () => {
        let dummy
        const list = VR.reactive([])
        list[1] = 'World!'
        VR.effect(() => (dummy = list.join(' ')))

        assert.equal(dummy, ' World!')
        list[0] = 'Hello'
        assert.equal(dummy, 'Hello World!')
        list.pop()
        assert.equal(dummy, 'Hello')
    })

    it('should observe enumeration', () => {
        let dummy = 0
        const numbers = VR.reactive({ num1: 3 })
        VR.effect(() => {
            dummy = 0
            for (let key in numbers) {
                dummy += numbers[key]
            }
        })

        assert.equal(dummy, 3)
        numbers.num2 = 4
        assert.equal(dummy, 7)
        delete numbers.num1
        assert.equal(dummy, 4)
    })

    it('should observe symbol keyed properties', () => {
        const key = Symbol('symbol keyed prop')
        let dummy, hasDummy
        const obj = VR.reactive({ [key]: 'value' })
        VR.effect(() => (dummy = obj[key]))
        VR.effect(() => (hasDummy = key in obj))

        assert.equal(dummy, 'value')
        assert.equal(hasDummy, true)
        obj[key] = 'newValue'
        assert.equal(dummy, 'newValue')
        // @ts-ignore
        delete obj[key]
        assert.equal(dummy, undefined)
        assert.equal(hasDummy, false)
    })

    it('should not observe well-known symbol keyed properties', () => {
        const key = Symbol.isConcatSpreadable
        let dummy
        const array = VR.reactive([])
        VR.effect(() => (dummy = array[key]))

        assert.equal(array[key], undefined)
        assert.equal(dummy, undefined)
        array[key] = true
        assert.equal(array[key], true)
        assert.equal(dummy, undefined)
    })

    it('should observe function valued properties', () => {
        const oldFunc = () => { }
        const newFunc = () => { }

        let dummy
        const obj = VR.reactive({ func: oldFunc })
        VR.effect(() => (dummy = obj.func))

        assert.equal(dummy, oldFunc)
        obj.func = newFunc
        assert.equal(dummy, newFunc)
    })

    it('should observe chained getters relying on this', () => {
        const obj = VR.reactive({
            a: 1,
            get b() {
                return this.a
            }
        })

        let dummy
        VR.effect(() => (dummy = obj.b))
        assert.equal(dummy, 1)
        obj.a++
        assert.equal(dummy, 2)
    })

    it('should observe methods relying on this', () => {
        const obj = VR.reactive({
            a: 1,
            b() {
                return this.a
            }
        })

        let dummy
        VR.effect(() => (dummy = obj.b()))
        assert.equal(dummy, 1)
        obj.a++
        assert.equal(dummy, 2)
    })

    it.skip('should not observe set operations without a value change', () => {
        let hasDummy, getDummy
        const obj = VR.reactive({ prop: 'value' })

        const getSpy = jest.fn(() => (getDummy = obj.prop))
        const hasSpy = jest.fn(() => (hasDummy = 'prop' in obj))
        VR.effect(getSpy)
        VR.effect(hasSpy)

        expect(getDummy).toBe('value')
        expect(hasDummy).toBe(true)
        obj.prop = 'value'
        expect(getSpy).toHaveBeenCalledTimes(1)
        expect(hasSpy).toHaveBeenCalledTimes(1)
        expect(getDummy).toBe('value')
        expect(hasDummy).toBe(true)
    })

    it('should not observe raw mutations', () => {
        let dummy
        const obj = VR.reactive({})
        VR.effect(() => (dummy = VR.toRaw(obj).prop))

        assert.equal(dummy, undefined)
        obj.prop = 'value'
        assert.equal(dummy, undefined)
    })

    it('should not be triggered by raw mutations', () => {
        let dummy
        const obj = VR.reactive({})
        VR.effect(() => (dummy = obj.prop))

        assert.equal(dummy, undefined)
        VR.toRaw(obj).prop = 'value'
        assert.equal(dummy, undefined)
    })

    it('should not be triggered by inherited raw setters', () => {
        let dummy, parentDummy, hiddenValue
        const obj = VR.reactive({})
        const parent = VR.reactive({
            set prop(value) {
                hiddenValue = value
            },
            get prop() {
                return hiddenValue
            }
        })
        Object.setPrototypeOf(obj, parent)
        VR.effect(() => (dummy = obj.prop))
        VR.effect(() => (parentDummy = parent.prop))

        assert.equal(dummy, undefined)
        assert.equal(parentDummy, undefined)
        VR.toRaw(obj).prop = 4
        assert.equal(dummy, undefined)
        assert.equal(parentDummy, undefined)
    })

    // it('should avoid implicit infinite recursive loops with itself', () => {
    //     const counter = VR.reactive({ num: 0 })

    //     const counterSpy = jest.fn(() => counter.num++)
    //     VR.effect(counterSpy)
    //     expect(counter.num).toBe(1)
    //     expect(counterSpy).toHaveBeenCalledTimes(1)
    //     counter.num = 4
    //     expect(counter.num).toBe(5)
    //     expect(counterSpy).toHaveBeenCalledTimes(2)
    // })

    // it('should avoid infinite recursive loops when use Array.prototype.push/unshift/pop/shift', () => {
    //     ; (['push', 'unshift'] as const).forEach(key => {
    //         const arr = VR.reactive < number[] > ([])
    //         const counterSpy1 = jest.fn(() => (arr[key] as any)(1))
    //         const counterSpy2 = jest.fn(() => (arr[key] as any)(2))
    //         VR.effect(counterSpy1)
    //         VR.effect(counterSpy2)
    //         expect(arr.length).toBe(2)
    //         expect(counterSpy1).toHaveBeenCalledTimes(1)
    //         expect(counterSpy2).toHaveBeenCalledTimes(1)
    //     })
    //         ; (['pop', 'shift'] as const).forEach(key => {
    //             const arr = VR.reactive < number[] > ([1, 2, 3, 4])
    //             const counterSpy1 = jest.fn(() => (arr[key] as any)())
    //             const counterSpy2 = jest.fn(() => (arr[key] as any)())
    //             VR.effect(counterSpy1)
    //             VR.effect(counterSpy2)
    //             expect(arr.length).toBe(2)
    //             expect(counterSpy1).toHaveBeenCalledTimes(1)
    //             expect(counterSpy2).toHaveBeenCalledTimes(1)
    //         })
    // })

    // it('should allow explicitly recursive raw function loops', () => {
    //     const counter = VR.reactive({ num: 0 })
    //     const numSpy = jest.fn(() => {
    //         counter.num++
    //         if (counter.num < 10) {
    //             numSpy()
    //         }
    //     })
    //     VR.effect(numSpy)
    //     expect(counter.num).toEqual(10)
    //     expect(numSpy).toHaveBeenCalledTimes(10)
    // })

    // it('should avoid infinite loops with other effects', () => {
    //     const nums = VR.reactive({ num1: 0, num2: 1 })

    //     const spy1 = jest.fn(() => (nums.num1 = nums.num2))
    //     const spy2 = jest.fn(() => (nums.num2 = nums.num1))
    //     VR.effect(spy1)
    //     VR.effect(spy2)
    //     expect(nums.num1).toBe(1)
    //     expect(nums.num2).toBe(1)
    //     expect(spy1).toHaveBeenCalledTimes(1)
    //     expect(spy2).toHaveBeenCalledTimes(1)
    //     nums.num2 = 4
    //     expect(nums.num1).toBe(4)
    //     expect(nums.num2).toBe(4)
    //     expect(spy1).toHaveBeenCalledTimes(2)
    //     expect(spy2).toHaveBeenCalledTimes(2)
    //     nums.num1 = 10
    //     expect(nums.num1).toBe(10)
    //     expect(nums.num2).toBe(10)
    //     expect(spy1).toHaveBeenCalledTimes(3)
    //     expect(spy2).toHaveBeenCalledTimes(3)
    // })

    // it('should return a new VR.reactive version of the function', () => {
    //     function greet() {
    //         return 'Hello World'
    //     }
    //     const effect1 = VR.effect(greet)
    //     const effect2 = VR.effect(greet)
    //     expect(typeof effect1).toBe('function')
    //     expect(typeof effect2).toBe('function')
    //     expect(effect1).not.toBe(greet)
    //     expect(effect1).not.toBe(effect2)
    // })

    // it('should discover new branches while running automatically', () => {
    //     let dummy
    //     const obj = VR.reactive({ prop: 'value', run: false })

    //     const conditionalSpy = jest.fn(() => {
    //         dummy = obj.run ? obj.prop : 'other'
    //     })
    //     VR.effect(conditionalSpy)

    //     assert.equal(dummy, 'other')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(1)
    //     obj.prop = 'Hi'
    //     assert.equal(dummy, 'other')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(1)
    //     obj.run = true
    //     assert.equal(dummy, 'Hi')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(2)
    //     obj.prop = 'World'
    //     assert.equal(dummy, 'World')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(3)
    // })

    // it('should discover new branches when running manually', () => {
    //     let dummy
    //     let run = false
    //     const obj = VR.reactive({ prop: 'value' })
    //     const runner = VR.effect(() => {
    //         dummy = run ? obj.prop : 'other'
    //     })

    //     assert.equal(dummy, 'other')
    //     runner()
    //     assert.equal(dummy, 'other')
    //     run = true
    //     runner()
    //     assert.equal(dummy, 'value')
    //     obj.prop = 'World'
    //     assert.equal(dummy, 'World')
    // })

    // it('should not be triggered by mutating a property, which is used in an inactive branch', () => {
    //     let dummy
    //     const obj = VR.reactive({ prop: 'value', run: true })

    //     const conditionalSpy = jest.fn(() => {
    //         dummy = obj.run ? obj.prop : 'other'
    //     })
    //     VR.effect(conditionalSpy)

    //     assert.equal(dummy, 'value')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(1)
    //     obj.run = false
    //     assert.equal(dummy, 'other')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(2)
    //     obj.prop = 'value2'
    //     assert.equal(dummy, 'other')
    //     expect(conditionalSpy).toHaveBeenCalledTimes(2)
    // })

    // it('should not double wrap if the passed function is a effect', () => {
    //     const runner = VR.effect(() => { })
    //     const otherRunner = VR.effect(runner)
    //     expect(runner).not.toBe(otherRunner)
    //     expect(runner.raw).toBe(otherRunner.raw)
    // })

    // it('should not run multiple times for a single mutation', () => {
    //     let dummy
    //     const obj = VR.reactive < Record < string, number>> ({})
    //     const fnSpy = jest.fn(() => {
    //         for (const key in obj) {
    //             dummy = obj[key]
    //         }
    //         dummy = obj.prop
    //     })
    //     VR.effect(fnSpy)

    //     expect(fnSpy).toHaveBeenCalledTimes(1)
    //     obj.prop = 16
    //     assert.equal(dummy, 16)
    //     expect(fnSpy).toHaveBeenCalledTimes(2)
    // })

    // it('should allow nested effects', () => {
    //     const nums = VR.reactive({ num1: 0, num2: 1, num3: 2 })
    //     const dummy: any = {}

    //     const childSpy = jest.fn(() => (dummy.num1 = nums.num1))
    //     const childeffect = VR.effect(childSpy)
    //     const parentSpy = jest.fn(() => {
    //         dummy.num2 = nums.num2
    //         childeffect()
    //         dummy.num3 = nums.num3
    //     })
    //     VR.effect(parentSpy)

    //     expect(dummy).toEqual({ num1: 0, num2: 1, num3: 2 })
    //     expect(parentSpy).toHaveBeenCalledTimes(1)
    //     expect(childSpy).toHaveBeenCalledTimes(2)
    //     // this should only call the childeffect
    //     nums.num1 = 4
    //     expect(dummy).toEqual({ num1: 4, num2: 1, num3: 2 })
    //     expect(parentSpy).toHaveBeenCalledTimes(1)
    //     expect(childSpy).toHaveBeenCalledTimes(3)
    //     // this calls the parenteffect, which calls the childeffect once
    //     nums.num2 = 10
    //     expect(dummy).toEqual({ num1: 4, num2: 10, num3: 2 })
    //     expect(parentSpy).toHaveBeenCalledTimes(2)
    //     expect(childSpy).toHaveBeenCalledTimes(4)
    //     // this calls the parenteffect, which calls the childeffect once
    //     nums.num3 = 7
    //     expect(dummy).toEqual({ num1: 4, num2: 10, num3: 7 })
    //     expect(parentSpy).toHaveBeenCalledTimes(3)
    //     expect(childSpy).toHaveBeenCalledTimes(5)
    // })

    //   it('should observe json methods', () => {
    //     let dummy = <Record<string, number>>{}
    //     const obj = VR.reactive<Record<string, number>>({})
    //     VR.effect(() => {
    //       dummy = JSON.parse(JSON.stringify(obj))
    //     })
    //     obj.a = 1
    //     expect(dummy.a).toBe(1)
    //   })

    it('should observe class method invocations', () => {
        class Model {
            count
            constructor() {
                this.count = 0
            }
            inc() {
                this.count++
            }
        }
        const model = VR.reactive(new Model())
        let dummy
        VR.effect(() => {
            dummy = model.count
        })
        assert.equal(dummy, 0)
        model.inc()
        assert.equal(dummy, 1)
    })

    it('lazy', () => {
        const obj = VR.reactive({ foo: 1 })
        let dummy
        const runner = VR.effect(() => (dummy = obj.foo), { lazy: true })
        assert.equal(dummy, undefined)

        assert.equal(runner(), 1)
        assert.equal(dummy, 1)
        obj.foo = 2
        assert.equal(dummy, 2)
    })

    // it('scheduler', () => {
    //     let runner, dummy
    //     const scheduler = jest.fn(_runner => {
    //         runner = _runner
    //     })
    //     const obj = VR.reactive({ foo: 1 })
    //     VR.effect(
    //         () => {
    //             dummy = obj.foo
    //         },
    //         { scheduler }
    //     )
    //     expect(scheduler).not.toHaveBeenCalled()
    //     assert.equal(dummy, 1)
    //     // should be called on first trigger
    //     obj.foo++
    //     expect(scheduler).toHaveBeenCalledTimes(1)
    //     // should not run yet
    //     assert.equal(dummy, 1)
    //     // manually run
    //     runner()
    //     // should have run
    //     assert.equal(dummy, 2)
    // })

    //   it('events: onTrack', () => {
    //     let events: DebuggerEvent[] = []
    //     let dummy
    //     const onTrack = jest.fn((e: DebuggerEvent) => {
    //       events.push(e)
    //     })
    //     const obj = VR.reactive({ foo: 1, bar: 2 })
    //     const runner = VR.effect(
    //       () => {
    //         dummy = obj.foo
    //         dummy = 'bar' in obj
    //         dummy = Object.keys(obj)
    //       },
    //       { onTrack }
    //     )
    //     expect(dummy).toEqual(['foo', 'bar'])
    //     expect(onTrack).toHaveBeenCalledTimes(3)
    //     expect(events).toEqual([
    //       {
    //         effect: runner,
    //         target: VR.toRaw(obj),
    //         type: TrackOpTypes.GET,
    //         key: 'foo'
    //       },
    //       {
    //         effect: runner,
    //         target: VR.toRaw(obj),
    //         type: TrackOpTypes.HAS,
    //         key: 'bar'
    //       },
    //       {
    //         effect: runner,
    //         target: VR.toRaw(obj),
    //         type: TrackOpTypes.ITERATE,
    //         key: ITERATE_KEY
    //       }
    //     ])
    //   })

    //   it('events: onTrigger', () => {
    //     let events: DebuggerEvent[] = []
    //     let dummy
    //     const onTrigger = jest.fn((e: DebuggerEvent) => {
    //       events.push(e)
    //     })
    //     const obj = VR.reactive({ foo: 1 })
    //     const runner = VR.effect(
    //       () => {
    //         dummy = obj.foo
    //       },
    //       { onTrigger }
    //     )

    //     obj.foo++
    //     assert.equal(dummy, 2)
    //     expect(onTrigger).toHaveBeenCalledTimes(1)
    //     expect(events[0]).toEqual({
    //       effect: runner,
    //       target: VR.toRaw(obj),
    //       type: TriggerOpTypes.SET,
    //       key: 'foo',
    //       oldValue: 1,
    //       newValue: 2
    //     })

    //     // @ts-ignore
    //     delete obj.foo
    //     expect(dummy).toBeUndefined()
    //     expect(onTrigger).toHaveBeenCalledTimes(2)
    //     expect(events[1]).toEqual({
    //       effect: runner,
    //       target: VR.toRaw(obj),
    //       type: TriggerOpTypes.DELETE,
    //       key: 'foo',
    //       oldValue: 2
    //     })
    //   })

    //   it('stop', () => {
    //     let dummy
    //     const obj = VR.reactive({ prop: 1 })
    //     const runner = VR.effect(() => {
    //       dummy = obj.prop
    //     })
    //     obj.prop = 2
    //     assert.equal(dummy, 2)
    //     stop(runner)
    //     obj.prop = 3
    //     assert.equal(dummy, 2)

    //     // stopped effect should still be manually callable
    //     runner()
    //     assert.equal(dummy, 3)
    //   })

    //   it('events: onStop', () => {
    //     const onStop = jest.fn()
    //     const runner = VR.effect(() => {}, {
    //       onStop
    //     })

    //     stop(runner)
    //     expect(onStop).toHaveBeenCalled()
    //   })

    //   it('stop: a stopped effect is nested in a normal effect', () => {
    //     let dummy
    //     const obj = VR.reactive({ prop: 1 })
    //     const runner = VR.effect(() => {
    //       dummy = obj.prop
    //     })
    //     stop(runner)
    //     obj.prop = 2
    //     assert.equal(dummy, 1)

    //     // observed value in inner stopped effect
    //     // will track outer effect as an dependency
    //     VR.effect(() => {
    //       runner()
    //     })
    //     assert.equal(dummy, 2)

    //     // notify outer effect to run
    //     obj.prop = 3
    //     assert.equal(dummy, 3)
    //   })

    //   it('markRaw', () => {
    //     const obj = VR.reactive({
    //       foo: markRaw({
    //         prop: 0
    //       })
    //     })
    //     let dummy
    //     VR.effect(() => {
    //       dummy = obj.foo.prop
    //     })
    //     assert.equal(dummy, 0)
    //     obj.foo.prop++
    //     assert.equal(dummy, 0)
    //     obj.foo = { prop: 1 }
    //     assert.equal(dummy, 1)
    //   })

    //   it('should not be trigger when the value and the old value both are NaN', () => {
    //     const obj = VR.reactive({
    //       foo: NaN
    //     })
    //     const fnSpy = jest.fn(() => obj.foo)
    //     VR.effect(fnSpy)
    //     obj.foo = NaN
    //     expect(fnSpy).toHaveBeenCalledTimes(1)
    //   })

    //   it('should trigger all effects when array length is set to 0', () => {
    //     const observed: any = VR.reactive([1])
    //     let dummy, record
    //     VR.effect(() => {
    //       dummy = observed.length
    //     })
    //     VR.effect(() => {
    //       record = observed[0]
    //     })
    //     assert.equal(dummy, 1)
    //     expect(record).toBe(1)

    //     observed[1] = 2
    //     expect(observed[1]).toBe(2)

    //     observed.unshift(3)
    //     assert.equal(dummy, 3)
    //     expect(record).toBe(3)

    //     observed.length = 0
    //     assert.equal(dummy, 0)
    //     expect(record).toBeUndefined()
    //   })

    //   it('should trigger once effect when set the equal proxy', () => {
    //     const obj = VR.reactive({ foo: 1 })
    //     const observed: any = VR.reactive({ obj })
    //     const fnSpy = jest.fn(() => observed.obj)

    //     VR.effect(fnSpy)

    //     observed.obj = obj
    //     expect(fnSpy).toHaveBeenCalledTimes(1)

    //     const obj2 = VR.reactive({ foo: 1 })
    //     const observed2: any = shallowReactive({ obj2 })
    //     const fnSpy2 = jest.fn(() => observed2.obj2)

    //     VR.effect(fnSpy2)

    //     observed2.obj2 = obj2
    //     expect(fnSpy2).toHaveBeenCalledTimes(1)
    //   })

    //   describe('readonly + VR.reactive for Map', () => {
    //     test('should work with readonly(reactive(Map))', () => {
    //       const m = VR.reactive(new Map())
    //       const roM = readonly(m)
    //       const fnSpy = jest.fn(() => roM.get(1))

    //       VR.effect(fnSpy)
    //       expect(fnSpy).toHaveBeenCalledTimes(1)
    //       m.set(1, 1)
    //       expect(fnSpy).toHaveBeenCalledTimes(2)
    //     })

    //     test('should work with observed value as key', () => {
    //       const key = VR.reactive({})
    //       const m = VR.reactive(new Map())
    //       m.set(key, 1)
    //       const roM = readonly(m)
    //       const fnSpy = jest.fn(() => roM.get(key))

    //       VR.effect(fnSpy)
    //       expect(fnSpy).toHaveBeenCalledTimes(1)
    //       m.set(key, 1)
    //       expect(fnSpy).toHaveBeenCalledTimes(1)
    //       m.set(key, 2)
    //       expect(fnSpy).toHaveBeenCalledTimes(2)
    //     })
    //   })
});

if (require.main === module)
    test.run(console.DEBUG);