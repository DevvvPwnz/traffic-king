import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './index.css'
import { gsap } from "gsap"
import { UilRocket } from '@iconscout/react-unicons'


function TopSection() {
     let tl = gsap.timeline() 
     const sectionCenter = React.useRef()
     const btn = React.useRef()
     const text = React.useRef()


   React.useEffect(()=>{
      tl.from(sectionCenter.current,{scaleY: 0},0.5)
        .from(text.current,{opacity:0,y:-50,},"+=0.5")
        .from(btn.current,{opacity:0,y:50,},"+=0.5")
   },[])

    return (
        <section className="top-section">
            <Header/>
            <div className="top-section__center" ref={sectionCenter}>
                 <p className="top-section__center-text" ref={text}> Лучшие решения - в один клик!</p>
                <div className="top-section__center-btn" ref={btn}>
                    <Link to="/login" className=" btn__rocket"> <div className="btn__rocket-icon"><UilRocket color="gold" /></div> Запустить компанию</Link>
                </div>
            </div>
        </section>
    )
}

export default TopSection
