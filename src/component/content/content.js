import React, { Component } from 'react'
import './content.css'


export default class Content extends Component{
    render(){
        const {array} = this.props;
        const object = array.map(item =>{
            const {id,name} = item
            return(
                <li className="content" key = {id}>
                    <h1>{id}</h1>
                    <h2>{name}</h2>
                    <button onClick ={()=> this.props.delete(id)}>Удалить</button>
                </li>
            )
        })
        return(
          <div>
              <ul>
                  {object}
              </ul>
          </div>
        )
    }
}