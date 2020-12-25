import React from 'react'
import {Header} from './header/Header'
import {Routes} from './Routes'
import {HashRouter} from 'react-router-dom'

import mainCont from './Container.module.css'
import s from './HW5.module.css'

export function HW5() {

   return <>
      <HashRouter>
         <Header/>
         <div className={s.content}>
            <div className={mainCont.container}>
               <Routes/>
            </div>
         </div>
      </HashRouter>
   </>
}