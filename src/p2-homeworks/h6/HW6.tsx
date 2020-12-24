import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './Hw6.module.css'

function HW6() {

   const [value, setValue] = useState<string>('')

   const save = () => {
      saveState<string>('editable-span-value', value)
   }
   const restore = () => {
      setValue(restoreState('editable-span-value', value)) //current value saved in key 'editable-span-value'
   }

   return (
       <div className={s.wrapper}>
          <div className={s.editableSpanWrapper}>
             <SuperEditableSpan
                 value={value}
                 onChangeText={setValue}
                 className={s.editableSpan}
                 spanClassName={s.span}
                 spanProps={{children: value ? undefined : 'enter text...'}}
             />
          </div>
          <SuperButton onClick={save}
                       className={s.btn}>save</SuperButton>
          <SuperButton onClick={restore}
                       className={s.btn}>restore</SuperButton>
       </div>
   )
}

export default HW6
