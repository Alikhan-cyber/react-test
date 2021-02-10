import React, { Component } from 'react'
import './footer.css'



export default class Footer extends Component{
    render(){
        return(
            <div>
		<div class="footer-center">
			<div class="footer-block">
				<h2 class="footer-block-title">
					О банке
				</h2>
				<p><a href="">Информация о банке</a></p>
				<p><a href="">Финансовые показатели</a></p>
				<p><a href="">Руководство банка</a></p>
				<p><a href="">Корпоративные мероприятия</a></p>
				<p><a href="">Карьера</a></p>
				<p><a href="">Реквизиты банка</a></p>
				<p><a href="">FAQ</a></p>
			</div>
			<div class="footer-block">
				<h2 class="footer-block-title">
					Пресс-центр
				</h2>
				<p><a href="">Новости</a></p>
				<p><a href="">Акция</a></p>
			</div>
			<div class="footer-block">
				<h2 class="footer-block-title">
					Сервис
				</h2>
				<p><a href="">Обращения и предложения</a></p>
				<p><a href="">Калькулятор</a></p>
				<p><a href="">Пополнение депозита</a></p>
			</div>
			<div class="footer-block">
				<h2 class="footer-block-title">
					Курсы валют
				</h2>
				<p><a href="">Сервис временно не работает</a></p>
			</div>
			<div class="footer-block">
				<h2 class="footer-block-title">
					Где нас искать
				</h2>
				<p><a href="">Адреса филиалов</a></p>
				
			</div>
		</div>
		<div class="footer-end">
			<p>Лицензия № 1.1.32, выданная НБРК от 20.04.2015 г</p>
			<div class="footer-end-img-div">
				<img class="footer-end-img" src="../images/ibec-systems.svg" alt=""/>
			</div>
		</div>
	</div>
        )
    }
}