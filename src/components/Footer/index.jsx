import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.png'

import './index.css'

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
            <div className="footer__item">
            <img src={Logo} alt="logo" className="footer__logo" />
            <div className="footer__text">
                Traffic-King - это технологичная рекламная сеть,которая предоставляет самые эффективные методы для 
                решения задач в сфере DigitalMarketing.
            </div>
            </div>
              
               <div className="footer__info">
                   <Link to="/" className="footer__info-link">Политика конфиденциальности</Link>
                   <Link to="/" className="footer__info-link">Условия использования</Link>
               </div>

               <div className="footer__info">
               contact.us@traffic-king.com
               </div>

               <div className="footer__low">
               © Copyright Traffic-King 2021
               </div>

            </div>
        </footer>
    )
}

export default Footer
