import React from 'react'
import classNames from 'classnames'

import './HamburgerButton.css'

type HamburgerProps = {
   state: boolean
   changeState: (state: boolean) => void
}

export const HamburgerButton: React.FC<HamburgerProps> = ({state, changeState}) => {

   const onClickHandler = () => {
      changeState(!state)
   }

   return (
       <div className={classNames('navIcon', {
          'open': !state
       })} onClick={(e) => {
          onClickHandler()
       }}>
          <span></span>
          <span></span>
          <span></span>
       </div>
   )
}