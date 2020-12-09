import React from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type GreetingPropsType = {
   users: Array<UserType>
   name: string
   setNameCallback: any
   addUser: () => void
   error: string
   totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users}) => {

   const inputClass = error
       ? `${s.correctInput} ${s.error}`
       : s.correctInput

   return (
       <div className={s.wrapper}>
          <div className={s.input_wrapper}>
             <div className={s.form_name}>USERS FORM</div>

             <SuperInputText value={name}
                             onChange={setNameCallback}
                             className={inputClass}
                             placeholder='Enter name'/>
             <span className={s.error_1}>{error}</span>

             <SuperButton onClick={addUser}
                          className={s.add_user_btn}>ADD</SuperButton>
             <span className={s.userCount}>Users count: {totalUsers}</span>

          </div>
          <div className={s.users_block}>
             {users.map(u => <p key={u.id}>ID: {u.id}</p>)}
          </div>
       </div>
   )
}

export default Greeting
