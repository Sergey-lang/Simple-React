import React, {useState, ChangeEvent,} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({users, addUserCallback}) => {

        const [name, setName] = useState('');
        const [error, setError] = useState('');

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            setError('')
            setName(e.currentTarget.value);
        };


        const addUser = () => {
            const trimName = name.trim()
            if (trimName) {
                addUserCallback(name)
                alert('Hello ' + name)
                setName('')
            } else {
                let err = 'Name is not defined'
                setError(err)
            }

        };

        const totalUsers = users.length;

        return (
            <Greeting
                users={users}
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        );
    }

export default GreetingContainer;
