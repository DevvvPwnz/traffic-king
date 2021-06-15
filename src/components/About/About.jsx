import React from 'react'
import './index.css'
import Push from '../../assets/imgs/push.png'
import Banner from '../../assets/imgs/banner.png'
import Clickunder from '../../assets/imgs/click.png'
import Mix from '../../assets/imgs/mix.png'
import Crown from '../../assets/imgs/crown.png'



import SwiperCore, { Navigation, A11y,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// Icons
import { UilGlobe } from '@iconscout/react-unicons'
import { UilTrophy } from '@iconscout/react-unicons'
import { UilCheckSquare } from '@iconscout/react-unicons'
import { UilChartLine } from '@iconscout/react-unicons'
import { UilDesktop } from '@iconscout/react-unicons'
import { UilDollarAlt } from '@iconscout/react-unicons'


SwiperCore.use([Navigation, A11y,]);


function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__items">
                    <div className="about__item">
                        <div className="about__item-icon"><UilGlobe color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Траффик со всего мира</div>
                        <div className="about__item-text">
                            Качественные источники по самым популярным гео.Тысячи сайтов и приложений готовых конвертировать вам прибыль.
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__item-icon"><UilTrophy color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Лучшие форматы рекламы</div>
                        <div className="about__item-text">
                         Самые эффективные и актуальные форматы рекламы: Баннеры, Нативная реклама, Пуш-уведомления / Ин-Апп Пуш / Он-Сайт Пуш / Кликандер / Микс-трафик
                        </div>
                    </div>
                </div>

                    <div className="about__brand">
                    <img src={Crown} className="about__brand-img" alt="" />
                    <div className="about__title">
                        Traffic-king
                       
                    </div>
                    </div>

                    <div className="about__items">
                    <div className="about__item">
                        <div className="about__item-icon"><UilCheckSquare color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Качественный трафик</div>
                        <div className="about__item-text">
                        Мы постоянно следим за качеством трафика, исключая возможность
                        появления ботов.
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__item-icon"><UilChartLine color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Глубокая аналитика</div>
                        <div className="about__item-text">
                        Удобный интерфейс для запуска и отслеживания рекламных кампаний.
                        </div>
                    </div>
                </div> 
                   
                <div className="about__format" id="format">Форматы рекламы:</div>
               
                <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}

    >
      <SwiperSlide>
         <div className="format__ad">
               <div className="format__ad-title">Push-уведомления</div>
               <img src={Push} alt="" className="format__ad-img" />
               <p className="format__ad-text">
               Всплывающие уведомления, которые появляются на экране ПК, смартфона или планшета пользователя.
               </p>
         </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="format__ad">
               <div className="format__ad-title">Нативная реклама</div>
               <img src={Banner} alt="" className="format__ad-img" />
               <p className="format__ad-text">
               Нативная реклама органично вписывается в дизайн сайта,похожа с контентом площадки, что обеспечивает высокий CTR и органичность.
               </p>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="format__ad">
               <div className="format__ad-title">Clickunder</div>
               <img src={Clickunder} alt="" className="format__ad-img" />
               <p className="format__ad-text">
               Cрабатывает по клику пользователя на определенные элементы страницы сайта,обеспечивает постоянный приток потенциальных клиентов по самым низким ценам.
               </p>
         </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="format__ad">
               <div className="format__ad-title">Mix-трафик</div>
               <img src={Mix} alt="" className="format__ad-img" />
               <p className="format__ad-text">
              Мощный метод использования сразу нескольких форматов рекламы для максимальной прибыли и выявления более эффективного источника.
               </p>
         </div>
      </SwiperSlide>
    </Swiper>
               

            </div>
         <div className="sec">
              <div className="container">
              <div className="about__items">
                    <div className="about__item">
                        <div className="about__item-icon"><UilDesktop color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Гибкая настройка</div>
                        <div className="about__item-text">
                        Тип устройства,особенности пользователей,подбор рекламы по категориям.
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__item-icon"><UilDollarAlt color="#327b81" size="50px"/></div>
                        <div className="about__item-title">Нацеленность на результат</div>
                        <div className="about__item-text">
                        Постоянное развитие,оптимизация и привлечение новых рекламных форматов,использования миксованых форматов для максимального заработка.
                        </div>
                    </div>
                </div>
              </div>
        </div>

         
        </section>
    )
}

export default About
