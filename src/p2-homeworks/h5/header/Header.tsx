import React, {useState} from 'react'

import s from './Header.module.css'

import {HamburgerButton} from './HamburgerButton/HamburgerButton'
import {BurgerNav} from './BurgerNav/BurgerNav'

export function Header() {

   let [state, setState] = useState<boolean>(true)

   return (
       <div className={s.navbar}>
          <div className={s.trigger}>
             <HamburgerButton changeState={setState} state={state}/>
          </div>
          <BurgerNav state={state}/>
       </div>
   )
}


