import React, {ChangeEvent, useState} from 'react';
import s from './HW13.module.css'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export const HW13: React.FC = (props) => {
   type DataType = {
      success: boolean
   }
   type ResType = {
      errorText: string
      info: string
      yourBody: DataType
   }
   let [checked, setChecked] = useState<boolean>(false)
   const [response, setResponse] = useState<ResType>();

   const buttonHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked);
   }

   const url = 'https://neko-cafe-back.herokuapp.com/auth/test';
   const data: DataType = {success: checked};

   async function sendData() {
      try {
         const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
               'Content-Type': 'application/json'
            }
         });
         const json = await response.json();
         console.dir(json)
         setResponse(json)
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <div className={s.hw13Wrapper}>
         <div className={s.description}>
            <div>
               <div className={s.greeting}>HI, THERE!</div>
            </div>
            <div>
               <h1 className={s.title}><span className={s.text}>I'M </span>AWAIT FETCH</h1>
            </div>
            <div>
               <p>The Fetch API allows you to asynchronously request for a resource. Use the fetch() method to return a promise that resolves into a Response object.</p>
            </div>
            <div className={s.request}>
               <div>
                  <SuperButton
                     onClick={sendData}
                     className={s.btn}
                  >Send Request</SuperButton>
                  <SuperCheckbox
                     onChange={buttonHandler}
                     checked={checked}
                     className={s.checkBox}
                  />
               </div>
            </div>
            <div className={s.result}>
               <div className={s.list}>
                  <span>{!response ? 'This will be error text' : response.errorText}</span>
                  <span>{!response ? 'This will be text from inform' : response.info}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
