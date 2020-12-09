import React from 'react'

import s from './BurgerNav.module.css'

import {NavLink} from 'react-router-dom'

type BurgerNavProps = {
   state: boolean
}

export const BurgerNav: React.FC<BurgerNavProps> = ({state}) => {

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
                <NavLink to='/pre-junior' activeClassName={s.activeLink}>PreJunior</NavLink>
             </li>
             <li className={s.link}>
                <NavLink to='/junior' activeClassName={s.activeLink}>Junior</NavLink>
             </li>
             <li className={s.link}>
                <NavLink to='/junior-plus' activeClassName={s.activeLink}>Junior+</NavLink>
             </li>
          </ul>
       </div>
   )
}



