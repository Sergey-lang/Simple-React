import React from 'react'
import s from './Title.module.css'

type TitleProps = {
   name: string
}

export const Title: React.FC<TitleProps> = ({name}) => {
   return (
       <div className={s.titleWrapper}>
          <h2>
             {name}
          </h2>
       </div>
   )
}