import React, { Component } from 'react'
import Header from '../header'
import PostList from '../post-list'
import Content from '../content'
import Footer from '../footer'





export default class App extends Component {
    state = {
        mass: []
    }
    maxId = 0;
    getData = (data)=>{
        const newItem={
            id: this.maxId++,
            name: data
        }
        this.setState(({mass})=>{
            const newArr = [...mass,newItem]
            return{
                mass: newArr
            }
        })
    }
    // deleteData=(id)=>{
    //     this.setState=(({mass})=>{
    //         const index = data.findIndex(elem => elem.id === id)
    //         const newArr = [...data.slice(0,index),...data.slice(index+1)]
    //         return{
    //             data:newArr
    //         }
    //     })
    // }
    
    
    
    render(){
        const {mass} = this.state
        return(
            <div>
                <Header/>
                <PostList data ={this.getData}/>
                <Content array = {mass} delete = {this.deleteData}/>
                <Footer/>
            </div>
        )
    }
}