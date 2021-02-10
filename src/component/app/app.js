import React, { Component } from 'react'
import Header from '../header'
import PostList from '../post-list'
import Content from '../content'
import Footer from '../footer'
export default class App extends Component {
    state = {
        items: [],
        maxId: 0
    }

    addData = (data) => {
        const newItem = {
            id: this.state.maxId,
            name: data.name,
            image: data.image
        }

        this.setState({
            items: [
                ...this.state.items,
                newItem
            ],
            maxId: this.state.maxId + 1
        })
    }
    deleteItem = (id) => {
        this.setState({
            items: this.state.items.filter(it => it.id !== id)
        })
    }

    render(){
        const { items } = this.state
        return(
            <div>
                <Header/>
                <PostList addData={this.addData}/>
                <Content data={items} deleteItem={this.deleteItem}/>
                <Footer/>
            </div>
        )
    }
}
