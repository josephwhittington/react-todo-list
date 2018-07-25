import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: JSON.parse(localStorage.getItem('list-item')) || []
        }

        this.add_item = this.add_item.bind(this)
        this.onEnter = this.onEnter.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    componentDidMount() {
        document.getElementById('list-item').focus()
    }

    componentDidUpdate() {
        document.getElementById('list-item').focus()
    }

    updateState(items) {
        this.setState({items: items})
        localStorage.setItem('list-item', JSON.stringify(items))
    }

    add_item(item) {
        let join = [...this.state.items]
        join.push(item)
        this.updateState(join)
    }

    onEnter(event) {
        if(event.keyCode == 13 && event.target.value !== '') {
            this.add_item(event.target.value)
            event.target.value = ''
        }
    }

    removeItem(event) {
        let _items = [...this.state.items]
        _items.splice(event.target.dataset.key, 1)
        console.log(event.target.dataset.key)
        this.updateState(_items)
    }

    render() {
        const { items } = this.state
        return (
            <div>
                <h1>To Do List: <br /> Start Listing</h1>
                <input type="text" name="list-item" id="list-item" onKeyDown={this.onEnter} placeholder='Enter Item' />
                <div>
                    {items.length> 0? items.reverse().map((item, index) => <Item onClick={this.removeItem} key={index} _key={index} item={item} />)
                     : <h3>You Have No List Items</h3>}
                </div>
            </div>
        )
    }
}