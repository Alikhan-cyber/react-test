import React, { Component } from 'react'


export default class PostList extends Component{
    state = {
        name: "Hello world"
    }
    onValueChange = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    sendData = ()=>{
        this.props.data(this.state.name)
    }
    
    
    render(){
        return(
            <div>
                <input
                    value={this.state.name}
                    type="text"
                    placeholder="Введите название"
                    onChange={this.onValueChange}
                />
                <button onClick={this.sendData}>Добавить</button>
            </div>
        )
    }
}