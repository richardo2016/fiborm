/// <reference lib="es2020" />

export {
    // #ref
    ref,
    shallowRef,
    isRef,
    toRef,
    toRefs,
    unref,
    proxyRefs,
    customRef,
    triggerRef,
    Ref,
    ToRefs,
    UnwrapRef,
    ShallowUnwrapRef,
    RefUnwrapBailTypes,

    // #reactive
    reactive,
    readonly,
    isReactive,
    isReadonly,
    isProxy,
    shallowReactive,
    shallowReadonly,
    markRaw,
    toRaw,
    ReactiveFlags,
    DeepReadonly,
    UnwrapNestedRefs,

    // #computed
    computed,
    ComputedRef,
    WritableComputedRef,
    WritableComputedOptions,
    ComputedGetter,
    ComputedSetter,

    // #effect
    effect,
    stop,
    trigger,
    track,
    enableTracking,
    pauseTracking,
    resetTracking,
    ITERATE_KEY,
    ReactiveEffect,
    ReactiveEffectOptions,
    DebuggerEvent,

    // #operations
    TrackOpTypes,
    TriggerOpTypes
} from '@vue/reactivity'