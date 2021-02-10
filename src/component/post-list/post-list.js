import React, { Component } from 'react'

export default class PostList extends Component{
    state = {
        name: "Hello world",
        file: null
    }
    onValueChange = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    sendData = (event) =>{
        event.preventDefault()
        const { name, file } = this.state
        this.props.addData({
            name,
            image: file
        })
    }

    addFile = (event) => {
        if (!event.target.files.length) {
            return
        }
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render(){
        const { name } = this.state;

        return(
            <div>
                <form onSubmit={this.sendData}>
                    <input
                        value={name}
                        type="text"
                        placeholder="Введите название"
                        onChange={this.onValueChange}
                    />
                    <input type="file" name="image" onChange={this.addFile} />
                    <button type="submit">Добавить</button>
                </form>
                {/* <img alt="" src={this.state.file} /> */}
            </div>
        )
    }
}
