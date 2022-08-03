// 生成vdom

export const TEXT = 3
export let handlerMap = []

export function render(tag, attrs) {
    let props = attrs || {}
    let key = props.key || null
    let children = []

    // 处理标签属性中的 onXXXX 事件回调函数
    for (const k in props) {
        if (k[0] === 'o' && k[1] === 'n') {
            let e = props[k]
            handlerMap.push(e)
            props[k] = handlerMap.length
        }
    }
    // 处理子标签
    let addc = (vnode) => {
        if (vnode == null || vnode === true || vnode === false) {
        } else if (typeof vnode === 'string' || typeof vnode === 'number') {
            children.push({ tag: vnode, type: TEXT });
        } else if (typeof vnode === 'object' && typeof vnode.length === 'number') {
            for (let i = 0; i < vnode.length; ++i) {
                addc(vnode[i]);
            }
        } else {
            children.push(vnode);
        }
    }

    for (let i = 2; i < arguments.length; i++) {
        let vnode = arguments[i]
        addc(vnode);
    }

    // 生成当前tag的vnode
    if (typeof tag === 'function') { // 当前tag是组件
        // let com = new tag(reactive(props));
        let com = new tag(props);
        let com_vnode = com.render();
        com_vnode.children.push(...children)
        return com_vnode;
    }

    delete props.key // 删除属性中的key项
    return { tag, props, children, key }
}

