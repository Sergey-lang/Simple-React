import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type PersonType = {
   _id: number
   name: string
   age: number
}

export type InitialStateType = Array<PersonType>
export type ActionTypes =
    ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkAgeAC>

const SORT = 'SORT'
const CHECK = 'CHECK'

const sortUpAC = () => ({type: SORT, payload: 'up'})
const sortDownAC = () => ({type: SORT, payload: 'down'})
const checkAgeAC = () => ({type: CHECK, payload: 18})

const initialPeople: InitialStateType = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

export const HW8: React.FC = () => {
   const [people, setPeople] = useState(initialPeople)

   const finalPeople = people.map(p => (
       <div key={p._id}>
          <div className={s.person_block}>
             <div>{p.name}</div>
             <div>{p.age}</div>
          </div>
       </div>
   ))

   const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
   const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
   const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC()))

   return (
       <div className={s.hw_8}>
          <div className={s.person_container}>
             {finalPeople}
             <div className={s.button_block}>
                <div><SuperButton onClick={sortUp} className={s.btn_style}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown} className={s.btn_style}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge} className={s.btn_style}>check 18</SuperButton></div>
             </div>
          </div>
       </div>
   )
}
