import React from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any// need to fix any
    addUser: () => void// need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {

    const inputClass = error !== '' ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <div className={s.group}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span className={s.bar}></span>
                <span className={s.errorBlock}>{error}</span>
                <button onClick={addUser} className={s.modern}>add</button>
                <span className={s.userCount}>Users count: {totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
