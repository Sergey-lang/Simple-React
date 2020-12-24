import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {

   const [text, setText] = useState<string>('')
   const error = text ? '' : 'error'

   const showAlert = () => {
      if (error) {
         alert('введите текст...')
      } else {
         alert(text)
         setText('')
      }
   }

   const [checked, setChecked] = useState<boolean>(false)
   const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

   return (
       <div className={s.hw4Wrapper}>
          <SuperInputText
              value={text}
              onChangeText={setText}
              onEnter={showAlert}
              error={error}
              className={s.red}
          />
          <div className={s.btnWrapper}>
             <SuperButton
                 className={s.work4Btn}
                 onClick={showAlert}>
                delete
             </SuperButton>
          </div>


          <SuperCheckbox
              checked={checked}
              onChangeChecked={setChecked}
              className={s.work4Checkbox}
          spanClassName={s.work4Span}
          >
             some text
          </SuperCheckbox>

          <SuperCheckbox
              checked={checked}
              onChange={testOnChange}/>
       </div>
   )
}

export default HW4
