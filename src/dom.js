// 创建dom

import { TEXT } from './render'
import { worker, elementMap } from './thread_view'
export const EVENT = 1
export const sysEVENT = 2

// 更新props
export function updateProperty(dom, name, oldValue, newValue) {
    if (name === 'key') {
    
    } else if (name === '__oninput') {//处理oninput事件(需要将dom.value传参给handler函数)
        let inputHandler = event => {
            worker.postMessage({
                type: sysEVENT,
                id: newValue,
                __domp: { v: dom.value }
            })
        }
        dom.addEventListener('input', inputHandler)
    } else if (name[0] === 'o' && name[1] === 'n') {//处理普通事件
        name = name.slice(2).toLowerCase()
        let newHandler = event => {
            // 用户回调，发送消息
            worker.postMessage({
                type: EVENT,
                id: newValue
            })
        }
        dom.addEventListener(name, newHandler)
    } else if (name == 'style') {//处理style的设置
        let v = ""
        for (const k in newValue) {
            v = v + k + ":" + newValue[k] + ";"
        }
        dom.setAttribute(name, v);
    } else { //普通属性
        if (typeof newValue === 'string') {
            dom.setAttribute(name, newValue)
        } else {
            dom.setAttribute(name, JSON.stringify(newValue))
        }
    }
}

// 创建dom 
export function createElement(vnode) {
    let dom =
        vnode.type === TEXT
            ? document.createTextNode(vnode.tag)
            : document.createElement(vnode.tag)
    elementMap.push(dom)
    if (vnode.children) {
        for (let i = 0; i < vnode.children.length; i++) {
            dom.appendChild(createElement(vnode.children[i]))
        }
    }
    for (var name in vnode.props) {
        updateProperty(dom, name, null, vnode.props[name])
    }
    return dom
}
