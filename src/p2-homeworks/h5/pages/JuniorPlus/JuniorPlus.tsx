import React from 'react'
import {HW13} from '../../../h13/HW13'
import {Title} from '../../../NewComponents/Title/Title'
import {Card} from '../../../NewComponents/Card/Card'

import s from './JuniorPlus.module.css'

export function JuniorPlus() {
   return (
       <div>
          <Title name={'Junior plus'}/>
          <Card title={'Fetch Request'}
                component={<HW13/>}
                description={'Native fetch or axios?'}
          />
       </div>
   )
}

