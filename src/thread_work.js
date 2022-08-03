//work线程:计算任务
import { thread_view } from './thread_view'
import { EVENT, sysEVENT } from './dom'
import { handlerMap } from './render'

export const activeEffectStack = []
export let globalEffect
const MAIN = typeof window !== 'undefined' //检查是否为Worker环境

export function app(instance) {
    instance.render = instance.setup() // jsx 编译后的 render函数表达式
    MAIN ? thread_view() : thread_work(instance) 
}

//worker线程：生成vdom；数据绑定，依赖收集；diff；发送渲染消息
function thread_work(instance) {
    instance.update = effect(function componentEffects() {
        handlerMap.splice(0, handlerMap.length)
        const oldVnode = instance.subTree || null
        const newVnode = (instance.subTree = instance.render()) // 生成vdom，并进行数据绑定
        let commit = diff(0, null, null, newVnode)
        console.log('[effect] oldVnode:', oldVnode)
        console.log('[effect] newVnode:', newVnode)
        console.log('[effect] commit:', commit)
        self.postMessage(commit)
    })
    globalEffect = instance.update
    instance.update()
    self.addEventListener('message', e => {
        const { type, id, __domp } = e.data
        if (type === EVENT) {
            // 收到事件执行命令，执行handlerMap中对应的事件
            const fn = handlerMap[id - 1]
            console.log('[EVENT] handlerMap:', handlerMap)
            console.log('[EVENT] run fn:', fn)
            fn && fn()
            instance.update() //给渲染主线程发送更新消息
            return
        }
        if (type === sysEVENT) {
            const fn = handlerMap[id - 1]
            console.log('[sysEVENT] __domp:', __domp)
            console.log('[sysEVENT] run fn:', fn)
            fn && fn(__domp)
            instance.update()
            return
        }
    })
}

function effect(fn) {
    const effect = function effect(...args) {
        return run(effect, fn, args)//递归
    }
    return effect
}

function run(effect, fn, args) {
    if (activeEffectStack.indexOf(effect) === -1) {
        try {
            activeEffectStack.push(effect) //执行fn前，将effect放入栈中
            return fn(...args)
        } finally {
            activeEffectStack.pop() //fn执行完毕，将effect从栈中取出
        }
    }
}

// diff and patch (待完善)
function diff(parent, node, oldVnode, newVnode) {
    const commitQueue = []

    if (oldVnode === newVnode) {
    } else if (!oldVnode || oldVnode.type !== newVnode.type) {



        commitQueue.push([parent, node, newVnode])
    }
    return commitQueue
}

