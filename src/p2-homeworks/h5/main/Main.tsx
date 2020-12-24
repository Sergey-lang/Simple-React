import React from 'react'

import s from './Main.module.css'

export const Main: React.FC = (props) => {

   return (
       <div className={s.main}>
          <div className={s.textWrapper}>
             <h4>Front-end React, Redux</h4>
             <h1>Hello! The are simple <span>react</span> components</h1>
          </div>
       </div>
   )
}



