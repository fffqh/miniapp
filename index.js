import { app, render, reactive, TodoList } from './src'

const App = {
    setup() {
        const add = () => {
            state.value++
        }
        const inputHandler = (__domp) => {
            state.input.value = __domp.v
            console.log('inputHandler:', state)
        }
        const hiddenHandler = ()=> state.isHidden=!state.isHidden

        let state = reactive({
            title: "学习任务清单",
            list: [
                { text: '第一个待办', color: 'pink' },
                { text: '第二个待办', color: 'orange' },
                { text: '第三个待办', color: 'blue' }
            ],
            input: { value: '123' },
            value: 1,
            isHidden:false
        })

        return () => (
            <div>
                <TodoList 
                    title  ={state.title}
                    list   ={state.list} 
                    value  ={state.input} 
                    oninput={inputHandler} >
                </TodoList>
                {state.isHidden?<div></div>:<h3>当前数量：{Object.keys(state.list).length}</h3>}
                <button onClick={hiddenHandler}>{state.isHidden?'显示总数':'隐藏总数'}</button>
            </div>
        )
    }
}

app(App)
