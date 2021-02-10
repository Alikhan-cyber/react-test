import React, { Component } from 'react'
import './content.css'

export default class Content extends Component{
    render(){
        const { data, deleteItem } = this.props;
        return(
            <div>
                <ul>
                    {data.map(item =>{
                        const { id, name, image } = item
                        return(
                            <li className="content" key={id}>
                                <h1>{id}</h1>
                                <h2>{name}</h2>
                                <img alt="" src={image} />
                                <button type="button" onClick ={()=> deleteItem(id)}>Удалить</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
