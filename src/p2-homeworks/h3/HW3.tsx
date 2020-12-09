import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './HW3.module.css'
import {v1} from 'uuid'

// types
export type UserType = {
   id: string
   name: string
}

// уровень работы с глобальными данными
function HW3() {
   const [users, setUsers] = useState<Array<UserType>>([])

   const addUserCallback = (name: string) => {
      let user = {id: v1(), name: name}
      let newUsers = [user, ...users]
      setUsers(newUsers)
   }

   return (
       <div className={s.home_3}>
          <GreetingContainer users={users} addUserCallback={addUserCallback}
          />
       </div>
   )
}

export default HW3
