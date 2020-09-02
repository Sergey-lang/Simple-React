import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import s from './HW3.module.css';
import {v1} from 'uuid';
import AlternativeGreeting from './AlternativeGreeting';

// types
export type UserType = {
    id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let user = {id: v1(), name: name};
        let newUsers = [user, ...users];
        setUsers(newUsers); // need to fix
    }

    return (
        <div className={s.home_3}>
            <hr/>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
            />
        </div>
    );
}

export default HW3;
