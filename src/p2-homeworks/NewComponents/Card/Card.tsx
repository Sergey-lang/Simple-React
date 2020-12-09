import React from 'react'
import s from './Card.module.css'

type CardProps = {
   title: string
   description?: string
   component: any
}

export const Card: React.FC<CardProps> = ({description,title,component}) => {

   return (
       <div className={s.blogCard}>
          <div className={s.meta}>
             {component}
          </div>
          <div className={s.description}>
             <h1>{title}</h1>
             <p>{description}</p>
          </div>
       </div>
   )
}




