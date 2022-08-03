/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.js\");\n\nconst App = {\n  setup() {\n    const add = () => {\n      state.value++;\n    };\n\n    const inputHandler = __domp => {\n      state.input.value = __domp.v;\n      console.log('inputHandler:', state);\n    };\n\n    const hiddenHandler = () => state.isHidden = !state.isHidden;\n\n    let state = (0,_src__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      title: \"学习任务清单\",\n      list: [{\n        text: '第一个待办',\n        color: 'pink'\n      }, {\n        text: '第二个待办',\n        color: 'orange'\n      }, {\n        text: '第三个待办',\n        color: 'blue'\n      }],\n      input: {\n        value: '123'\n      },\n      value: 1,\n      isHidden: false\n    });\n    return () => (0,_src__WEBPACK_IMPORTED_MODULE_0__.render)(\"div\", null, (0,_src__WEBPACK_IMPORTED_MODULE_0__.render)(_src__WEBPACK_IMPORTED_MODULE_0__.TodoList, {\n      title: state.title,\n      list: state.list,\n      value: state.input,\n      oninput: inputHandler\n    }), state.isHidden ? (0,_src__WEBPACK_IMPORTED_MODULE_0__.render)(\"div\", null) : (0,_src__WEBPACK_IMPORTED_MODULE_0__.render)(\"h3\", null, \"\\u5F53\\u524D\\u6570\\u91CF\\uFF1A\", Object.keys(state.list).length), (0,_src__WEBPACK_IMPORTED_MODULE_0__.render)(\"button\", {\n      onClick: hiddenHandler\n    }, state.isHidden ? '显示总数' : '隐藏总数'));\n  }\n\n};\n(0,_src__WEBPACK_IMPORTED_MODULE_0__.app)(App);\n\n//# sourceURL=webpack://miniapp-demo/./index.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem),\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n// 系统预制组件\n\n\nclass Component {\n  constructor(props) {\n    this.props = props || {};\n    this.state = null;\n  }\n\n  setState(nextState) {\n    this.state = Object.assign(this.state, nextState);\n\n    if (this.dom && this.shouldComponentUpdate(this.props, nextState)) {\n      patch(this.dom, this.render());\n    }\n  }\n\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextProps != this.props || nextState != this.state;\n  }\n\n  componentWillMount() {}\n\n  componentDidMount() {}\n\n  componentWillReceiveProps() {}\n\n  componentWillUnmount() {}\n\n}\n\nclass TodoItem extends Component {\n  constructor(props) {\n    super();\n    this.props = props;\n  }\n\n  render() {\n    return (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"li\", {\n      className: \"item\",\n      style: this.props.style\n    }, this.props.text, (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"a\", {\n      href: \"#\",\n      onClick: this.props.RemoveItem\n    }, \"X \"));\n  }\n\n}\nclass TodoList extends Component {\n  constructor(props) {\n    super();\n    this.props = props;\n    this.colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#0060DA', '#007EE6', '#0094DB', '#00A6BE', '#00B49B'];\n    console.log('[List constructor] props:', props);\n  } // handleItemRemove(key) {\n  //     delete this.props.list[key]\n  //     console.log('[List handleItemRemove] key:', key)\n  // }\n\n\n  handleItemRemove(idx) {\n    this.props.list.splice(idx, 1);\n    console.log('[List handleItemRemove] idx:', idx, this.props.list);\n  } // handleAdd() {\n  //     let k = Object.keys(this.props.list).length\n  //     this.props.list[k + 1] = { 'text': this.props.value.value ,'color': this.colors[k%this.colors.length]}\n  //     console.log('[List handleAdd]:', this.props.list)\n  // }\n\n\n  handleAdd() {\n    let k = this.props.list.length;\n    this.props.list.push({\n      'text': this.props.value.value,\n      'color': this.colors[k % this.colors.length]\n    });\n    console.log('[List handleAdd]:', this.props.list);\n  }\n\n  render() {\n    return (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"div\", null, (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"h2\", null, this.props.title), (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"div\", null, (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"input\", {\n      type: \"text\",\n      value: this.props.value.value,\n      __oninput: this.props.oninput\n    }), (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"button\", {\n      onClick: () => this.handleAdd()\n    }, \"add\")), (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(\"ul\", {\n      className: \"list\"\n    }, this.props.list.map((item, idx) => {\n      return (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(TodoItem, {\n        style: {\n          color: item.color\n        },\n        RemoveItem: () => this.handleItemRemove(idx),\n        text: item.text\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack://miniapp-demo/./src/components.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVENT\": () => (/* binding */ EVENT),\n/* harmony export */   \"sysEVENT\": () => (/* binding */ sysEVENT),\n/* harmony export */   \"updateProperty\": () => (/* binding */ updateProperty),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _thread_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread_view */ \"./src/thread_view.js\");\n// 创建dom\n\n\nconst EVENT = 1;\nconst sysEVENT = 2; // 更新props\n\nfunction updateProperty(dom, name, oldValue, newValue) {\n  if (name === 'key') {} else if (name === '__oninput') {\n    //处理oninput事件(需要将dom.value传参给handler函数)\n    let inputHandler = event => {\n      _thread_view__WEBPACK_IMPORTED_MODULE_1__.worker.postMessage({\n        type: sysEVENT,\n        id: newValue,\n        __domp: {\n          v: dom.value\n        }\n      });\n    };\n\n    dom.addEventListener('input', inputHandler);\n  } else if (name[0] === 'o' && name[1] === 'n') {\n    //处理普通事件\n    name = name.slice(2).toLowerCase();\n\n    let newHandler = event => {\n      // 用户回调，发送消息\n      _thread_view__WEBPACK_IMPORTED_MODULE_1__.worker.postMessage({\n        type: EVENT,\n        id: newValue\n      });\n    };\n\n    dom.addEventListener(name, newHandler);\n  } else if (name == 'style') {\n    //处理style的设置\n    let v = \"\";\n\n    for (const k in newValue) {\n      v = v + k + \":\" + newValue[k] + \";\";\n    }\n\n    dom.setAttribute(name, v);\n  } else {\n    //普通属性\n    if (typeof newValue === 'string') {\n      dom.setAttribute(name, newValue);\n    } else {\n      dom.setAttribute(name, JSON.stringify(newValue));\n    }\n  }\n} // 创建dom \n\nfunction createElement(vnode) {\n  let dom = vnode.type === _render__WEBPACK_IMPORTED_MODULE_0__.TEXT ? document.createTextNode(vnode.tag) : document.createElement(vnode.tag);\n  _thread_view__WEBPACK_IMPORTED_MODULE_1__.elementMap.push(dom);\n\n  if (vnode.children) {\n    for (let i = 0; i < vnode.children.length; i++) {\n      dom.appendChild(createElement(vnode.children[i]));\n    }\n  }\n\n  for (var name in vnode.props) {\n    updateProperty(dom, name, null, vnode.props[name]);\n  }\n\n  return dom;\n}\n\n//# sourceURL=webpack://miniapp-demo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* reexport safe */ _thread_work__WEBPACK_IMPORTED_MODULE_0__.app),\n/* harmony export */   \"reactive\": () => (/* reexport safe */ _reactive__WEBPACK_IMPORTED_MODULE_1__.reactive),\n/* harmony export */   \"render\": () => (/* reexport safe */ _render__WEBPACK_IMPORTED_MODULE_2__.render),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _thread_work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread_work */ \"./src/thread_work.js\");\n/* harmony import */ var _reactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactive */ \"./src/reactive.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://miniapp-demo/./src/index.js?");

/***/ }),

/***/ "./src/reactive.js":
/*!*************************!*\
  !*** ./src/reactive.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"targetMap\": () => (/* binding */ targetMap),\n/* harmony export */   \"reactive\": () => (/* binding */ reactive)\n/* harmony export */ });\n/* harmony import */ var _thread_work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread_work */ \"./src/thread_work.js\");\n// 响应式\n\nconst toProxy = new WeakMap();\nconst toRaw = new WeakMap();\nconst targetMap = new WeakMap(); //依赖信息收集\n\nconst isObj = obj => typeof obj === 'object'; // 创建数据对象的代理\n\n\nfunction reactive(target) {\n  // 非对象数据，则原数据返回\n  if (!isObj(target)) return target; // 代理已存在，将代理返回\n\n  let proxy = toProxy.get(target);\n  if (proxy) return proxy; // 本身就是代理，将其返回\n\n  if (toRaw.has(target)) return target;\n  const handlers = {\n    get(target, key, receiver) {\n      let res = Reflect.get(target, key, receiver);\n\n      if (isObj(target[key])) {\n        return reactive(res);\n      }\n\n      track(target, key);\n      return res;\n    },\n\n    set(target, key, value, receiver) {\n      let res = Reflect.set(target, key, value, receiver);\n\n      if (key in target) {\n        trigger(target, key);\n      }\n\n      return res;\n    },\n\n    deleteProperty(target, key) {\n      return Reflect.deleteProperty(target, key);\n    }\n\n  };\n  let observed = new Proxy(target, handlers);\n  toProxy.set(target, observed);\n  toRaw.set(observed, target);\n\n  if (!targetMap.has(target)) {\n    targetMap.set(target, new Map());\n  }\n\n  return observed;\n} // 触发器\n\nfunction trigger(target, key) {\n  let deps = targetMap.get(target);\n  const effects = new Set();\n  let map = deps.get(key);\n  if (!map) return;\n  map.forEach(e => effects.add(e));\n  effects.forEach(e => e());\n  console.log('[trigger] target-key:', target, key);\n} // 跟踪器\n\n\nfunction track(target, key) {\n  const effect = _thread_work__WEBPACK_IMPORTED_MODULE_0__.globalEffect; //将要被收集的依赖\n\n  if (effect) {\n    let depsMap = targetMap.get(target);\n\n    if (!depsMap) {\n      targetMap.set(target, depsMap = new Map());\n    }\n\n    let dep = depsMap.get(key);\n\n    if (!dep) {\n      depsMap.set(key, dep = new Set());\n    }\n\n    if (!dep.has(effect)) {\n      dep.add(effect);\n    }\n\n    console.log('[track] target-key:', target, key);\n  }\n}\n\n//# sourceURL=webpack://miniapp-demo/./src/reactive.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TEXT\": () => (/* binding */ TEXT),\n/* harmony export */   \"handlerMap\": () => (/* binding */ handlerMap),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n// 生成vdom\nconst TEXT = 3;\nlet handlerMap = [];\nfunction render(tag, attrs) {\n  let props = attrs || {};\n  let key = props.key || null;\n  let children = []; // 处理标签属性中的 onXXXX 事件回调函数\n\n  for (const k in props) {\n    if (k[0] === 'o' && k[1] === 'n') {\n      let e = props[k];\n      handlerMap.push(e);\n      props[k] = handlerMap.length;\n    }\n  } // 处理子标签\n\n\n  let addc = vnode => {\n    if (vnode == null || vnode === true || vnode === false) {} else if (typeof vnode === 'string' || typeof vnode === 'number') {\n      children.push({\n        tag: vnode,\n        type: TEXT\n      });\n    } else if (typeof vnode === 'object' && typeof vnode.length === 'number') {\n      for (let i = 0; i < vnode.length; ++i) {\n        addc(vnode[i]);\n      }\n    } else {\n      children.push(vnode);\n    }\n  };\n\n  for (let i = 2; i < arguments.length; i++) {\n    let vnode = arguments[i];\n    addc(vnode);\n  } // 生成当前tag的vnode\n\n\n  if (typeof tag === 'function') {\n    // 当前tag是组件\n    // let com = new tag(reactive(props));\n    let com = new tag(props);\n    let com_vnode = com.render();\n    com_vnode.children.push(...children);\n    return com_vnode;\n  }\n\n  delete props.key; // 删除属性中的key项\n\n  return {\n    tag,\n    props,\n    children,\n    key\n  };\n}\n\n//# sourceURL=webpack://miniapp-demo/./src/render.js?");

/***/ }),

/***/ "./src/thread_view.js":
/*!****************************!*\
  !*** ./src/thread_view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementMap\": () => (/* binding */ elementMap),\n/* harmony export */   \"worker\": () => (/* binding */ worker),\n/* harmony export */   \"thread_view\": () => (/* binding */ thread_view)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n//view线程：生成dom\n\nconst elementMap = [];\nlet worker = null;\nfunction thread_view() {\n  const PATHNAME = function () {\n    const scripts = document.getElementsByTagName('script');\n    return scripts[scripts.length - 1].src;\n  }();\n\n  elementMap.push(document.body);\n  console.log('PATHNAME:', PATHNAME);\n  worker = new Worker(PATHNAME);\n\n  worker.onmessage = e => {\n    const commitQueue = e.data;\n    commitQueue.forEach(commit);\n  };\n} // 对每个commit信息的处理\n\nfunction commit(op) {\n  getElement(op[0]).innerHTML = ''; //清空该commit中parent对应的dom元素\n\n  elementMap.length = 1;\n\n  if (op.length === 4) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateProperty)(op[1], op[2], op[3]);\n  } else if (op.length === 3) {\n    console.log('commit op:', op);\n    getElement(op[0]).insertBefore(getElement(op[2]) || (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)(op[2]), getElement(op[1]));\n    console.log('eMap:', elementMap);\n  } else {\n    getElement(op[0]).removeChild(getElement(op[1]));\n  }\n}\n\nconst getElement = index => elementMap[index];\n\n//# sourceURL=webpack://miniapp-demo/./src/thread_view.js?");

/***/ }),

/***/ "./src/thread_work.js":
/*!****************************!*\
  !*** ./src/thread_work.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeEffectStack\": () => (/* binding */ activeEffectStack),\n/* harmony export */   \"globalEffect\": () => (/* binding */ globalEffect),\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _thread_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread_view */ \"./src/thread_view.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n//work线程:计算任务\n\n\n\nconst activeEffectStack = [];\nlet globalEffect;\nconst MAIN = typeof window !== 'undefined'; //检查是否为Worker环境\n\nfunction app(instance) {\n  instance.render = instance.setup(); // jsx 编译后的 render函数表达式\n\n  MAIN ? (0,_thread_view__WEBPACK_IMPORTED_MODULE_0__.thread_view)() : thread_work(instance);\n} //worker线程：生成vdom；数据绑定，依赖收集；diff；发送渲染消息\n\nfunction thread_work(instance) {\n  instance.update = effect(function componentEffects() {\n    _render__WEBPACK_IMPORTED_MODULE_2__.handlerMap.splice(0, _render__WEBPACK_IMPORTED_MODULE_2__.handlerMap.length);\n    const oldVnode = instance.subTree || null;\n    const newVnode = instance.subTree = instance.render(); // 生成vdom，并进行数据绑定\n\n    let commit = diff(0, null, null, newVnode);\n    console.log('[effect] oldVnode:', oldVnode);\n    console.log('[effect] newVnode:', newVnode);\n    console.log('[effect] commit:', commit);\n    self.postMessage(commit);\n  });\n  globalEffect = instance.update;\n  instance.update();\n  self.addEventListener('message', e => {\n    const {\n      type,\n      id,\n      __domp\n    } = e.data;\n\n    if (type === _dom__WEBPACK_IMPORTED_MODULE_1__.EVENT) {\n      // 收到事件执行命令，执行handlerMap中对应的事件\n      const fn = _render__WEBPACK_IMPORTED_MODULE_2__.handlerMap[id - 1];\n      console.log('[EVENT] handlerMap:', _render__WEBPACK_IMPORTED_MODULE_2__.handlerMap);\n      console.log('[EVENT] run fn:', fn);\n      fn && fn();\n      instance.update(); //给渲染主线程发送更新消息\n\n      return;\n    }\n\n    if (type === _dom__WEBPACK_IMPORTED_MODULE_1__.sysEVENT) {\n      const fn = _render__WEBPACK_IMPORTED_MODULE_2__.handlerMap[id - 1];\n      console.log('[sysEVENT] __domp:', __domp);\n      console.log('[sysEVENT] run fn:', fn);\n      fn && fn(__domp);\n      instance.update();\n      return;\n    }\n  });\n}\n\nfunction effect(fn) {\n  const effect = function effect(...args) {\n    return run(effect, fn, args); //递归\n  };\n\n  return effect;\n}\n\nfunction run(effect, fn, args) {\n  if (activeEffectStack.indexOf(effect) === -1) {\n    try {\n      activeEffectStack.push(effect); //执行fn前，将effect放入栈中\n\n      return fn(...args);\n    } finally {\n      activeEffectStack.pop(); //fn执行完毕，将effect从栈中取出\n    }\n  }\n} // diff and patch (待完善)\n\n\nfunction diff(parent, node, oldVnode, newVnode) {\n  const commitQueue = [];\n\n  if (oldVnode === newVnode) {} else if (!oldVnode || oldVnode.type !== newVnode.type) {\n    commitQueue.push([parent, node, newVnode]);\n  }\n\n  return commitQueue;\n}\n\n//# sourceURL=webpack://miniapp-demo/./src/thread_work.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;