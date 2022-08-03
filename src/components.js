// 系统预制组件
import {render} from './render'

class Component {
    constructor(props) {
        this.props = props || {};
        this.state = null;
    }

    setState(nextState) {
        this.state = Object.assign(this.state, nextState);
        if (this.dom && this.shouldComponentUpdate(this.props, nextState)) {
            patch(this.dom, this.render());
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillReceiveProps() { }

    componentWillUnmount() { }
}

export class TodoItem extends Component {
    constructor(props) {
        super();
        this.props = props
    }
    render() {
        return <li className="item" style={this.props.style}>
            {this.props.text}<a href="#" onClick={this.props.RemoveItem}>X </a>
        </li>;
    }
}

export class TodoList extends Component {
    constructor(props) {
        super();
        this.props = props
        this.colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671' ,'#0060DA', '#007EE6', '#0094DB', '#00A6BE','#00B49B']
        console.log('[List constructor] props:', props)
    }

    // handleItemRemove(key) {
    //     delete this.props.list[key]
    //     console.log('[List handleItemRemove] key:', key)
    // }
    handleItemRemove(idx) {
        this.props.list.splice(idx,1)
        console.log('[List handleItemRemove] idx:', idx, this.props.list)
    }

    // handleAdd() {
    //     let k = Object.keys(this.props.list).length
    //     this.props.list[k + 1] = { 'text': this.props.value.value ,'color': this.colors[k%this.colors.length]}
    //     console.log('[List handleAdd]:', this.props.list)
    // }

    handleAdd() {
        let k = this.props.list.length
        this.props.list.push({ 'text': this.props.value.value, 'color': this.colors[k % this.colors.length]})
        console.log('[List handleAdd]:', this.props.list)
    }

    render() {
        return <div>
            <h2>{this.props.title}</h2>
            <div>
                <input type='text' value={this.props.value.value} __oninput={this.props.oninput}></input>
                <button onClick={() => this.handleAdd()}>add</button>
            </div>
            <ul className="list">
                {/* {Object.keys(this.props.list).map((key) => {
                    return <TodoItem style={{ color: this.props.list[key].color }}
                        RemoveItem={() => this.handleItemRemove(key)}
                        text={this.props.list[key].text}>
                    </TodoItem>
                })} */}
                {this.props.list.map((item,idx) => {
                    return <TodoItem style={{ color: item.color }}
                        RemoveItem={() => this.handleItemRemove(idx)}
                        text={item.text}>
                    </TodoItem>
                })}
            </ul>
        </div>;
    }
}

