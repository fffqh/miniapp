// 响应式
import { globalEffect } from './thread_work'

const toProxy = new WeakMap()
const toRaw = new WeakMap()
export const targetMap = new WeakMap() //依赖信息收集
const isObj = obj => typeof obj === 'object'

// 创建数据对象的代理
export function reactive(target) {
    // 非对象数据，则原数据返回
    if (!isObj(target)) return target

    // 代理已存在，将代理返回
    let proxy = toProxy.get(target)
    if (proxy) return proxy
    // 本身就是代理，将其返回
    if (toRaw.has(target)) return target

    const handlers = {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)
            if (isObj(target[key])) {
                return reactive(res)
            }
            track(target, key)
            return res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver)
            if (key in target) {
                trigger(target, key)
            }
            return res
        },
        deleteProperty(target, key) {
            return Reflect.deleteProperty(target, key)
        }
    }

    let observed = new Proxy(target, handlers)

    toProxy.set(target, observed)
    toRaw.set(observed, target)

    if (!targetMap.has(target)) {
        targetMap.set(target, new Map())
    }
    return observed
}



// 触发器
function trigger(target, key) {
    let deps = targetMap.get(target)
    const effects = new Set()
    let map = deps.get(key)
    if (!map) return
    map.forEach(e => effects.add(e))
    effects.forEach(e => e())
    console.log('[trigger] target-key:', target, key)
}

// 跟踪器
function track(target, key) {
    const effect = globalEffect //将要被收集的依赖
    if (effect) {
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()))
        }
        let dep = depsMap.get(key)
        if (!dep) {
            depsMap.set(key, (dep = new Set()))
        }
        if (!dep.has(effect)) {
            dep.add(effect)
        }
        console.log('[track] target-key:', target, key)
    }
}
