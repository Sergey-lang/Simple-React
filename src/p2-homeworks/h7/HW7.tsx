import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

const arr = ['x', 'y', 'z']

export function HW7() {
   const [value, onChangeOption] = useState(arr[0])

   return (
       <div className={s.hw_7}>
          <SuperSelect
              name={'select'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
              className={s.select}
          />
          <SuperRadio
              name={'radio'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
          />
       </div>
   )
}

