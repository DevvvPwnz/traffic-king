import React from 'react'
import { Link } from 'react-router-dom'
import  './index.css'


import { UilQuestion } from '@iconscout/react-unicons'
import { UilCommentQuestion } from '@iconscout/react-unicons'

function Support() {
    return (
        <section className="support">
           <div className="support__prev">
               <div className="support__text">
                   Наша цель - совместное развитие и достижение максимальных результатов!
               </div>
           </div>
            <div className="support__item">
                <div className="support__item-left">
                    <UilCommentQuestion color="#327b81" size="100px"/>
                </div>
                <div className="support__item-right item__right">
                  <div className="item__right-title">
                  Остались вопросы?
                  </div>
                  <div className="item__right-text">
                      Наша служба поддержки всегда готова помочь вам.
                  </div>
                  <Link to="/support" className="item__right-btn">
                   Задать вопрос <UilQuestion color="gold" />
                  </Link>
                </div>
            </div>
        </section>
    )
}

export default Support
