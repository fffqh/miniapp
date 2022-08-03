//view线程：生成dom
import { createElement, updateProperty } from './dom'
export const elementMap = []
export let worker = null

export function thread_view() {
    const PATHNAME = (function () {
        const scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1].src
    })()
    elementMap.push(document.body)
    console.log('PATHNAME:', PATHNAME);
    worker = new Worker(PATHNAME)
    worker.onmessage = e => {
        const commitQueue = e.data
        commitQueue.forEach(commit)
    }
}

// 对每个commit信息的处理
function commit(op) {
    getElement(op[0]).innerHTML = '' //清空该commit中parent对应的dom元素
    elementMap.length = 1

    if (op.length === 4) {
        updateProperty(op[1], op[2], op[3])
    } else if (op.length === 3) {
        console.log('commit op:', op)
        getElement(op[0]).insertBefore(
            getElement(op[2]) || createElement(op[2]),
            getElement(op[1])
        )
        console.log('eMap:', elementMap)
    } else {
        getElement(op[0]).removeChild(getElement(op[1]))
    }
}

const getElement = index => elementMap[index]
