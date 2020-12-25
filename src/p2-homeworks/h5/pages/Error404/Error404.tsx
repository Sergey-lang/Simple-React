import React from 'react'
import s from './Error404.module.css'
import {NavLink} from 'react-router-dom'

export function Error404() {
   return (
       <div className={s.error_wrapper}>
          <div className={s.numberError}>404</div>
          <div className={s.messageError}><p>You're on a page that doesn't exist.</p></div>
          <p className={s.redirectionText}>Click on the link below to go to the first page.</p>
          <NavLink to='/pre-junior'
                   className={s.link}
          >PreJunior
          </NavLink>
       </div>
   )
}
