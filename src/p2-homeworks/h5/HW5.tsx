import React from 'react'

import s from './HW5.module.css'

import {Header} from './header/Header'
import {Routes} from './Routes'
import {HashRouter} from 'react-router-dom'
import {Main} from './main/Main'

import mainCont from './Container.module.css'

export function HW5() {

   return <>
      <HashRouter>
         <div className={s.mainHeaderWrapper}>
            <div className={mainCont.container}>
               <Header/>
               <Main/>
            </div>
         </div>
         <div className={s.content}>
            <div className={mainCont.container}>
               <Routes/>
            </div>
         </div>
      </HashRouter>
   </>
}

