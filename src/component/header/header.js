import React, { Component } from 'react'
import './header.css'



export default class Header extends Component{
    render(){
        return(
            <div className="menu">
				<div className="logo">
					<a href="https://www.bankastana.kz/ru/">
						<img url="" alt=""/>
					</a>
			    </div>
			    <div className="menu">
				    <ul>
                        <li><a href="#">Частным клиентам</a></li>
                        <li><a href="#">Бизнес клиентам</a></li>
                        <li><a href="#">Адреса филиалов</a></li>
                        <li><a href="#">Интернет банкинг</a></li>
                        <li><a href="#">Привелегии</a></li>
                        <li><a href="#">Трекинг</a></li>
				    </ul>
			    </div>
	    	</div>
        )
    }
}