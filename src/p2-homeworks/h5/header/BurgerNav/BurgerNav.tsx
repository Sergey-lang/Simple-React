import React from 'react'
import {NavLink} from 'react-router-dom'

import s from './BurgerNav.module.css'

type BurgerNavProps = {
   state: boolean
   callback: (state: boolean) => void
}

export const BurgerNav: React.FC<BurgerNavProps> = ({state, callback}) => {

   const hideBurgerMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      callback(true)
   }

   const show = {
      right: 0
   }

   const hide = {
      right: '-900px'
   }

   return (
       <div className={s.navBar} style={!state ? show : hide}>
          <ul className={s.shares}>
             <li className={s.link}>
                <NavLink to='/pre-junior'
                         activeClassName={s.activeLink}
                         onClick={hideBurgerMenu}
                >PreJunior
                </NavLink>
             </li>
             <li className={s.link}>
                <NavLink to='/junior'
                         activeClassName={s.activeLink}
                         onClick={hideBurgerMenu}
                >Junior
                </NavLink>
             </li>
             <li className={s.link}>
                <NavLink to='/junior-plus'
                         activeClassName={s.activeLink}
                         onClick={hideBurgerMenu}
                >
                   Junior+</NavLink>
             </li>
          </ul>
       </div>
   )
}



