import React from "react";
import {UserType} from './HW3';

type AlternativeGreetingPropsType = {
    users: Array<UserType>
}
const  AlternativeGreeting: React.FC<AlternativeGreetingPropsType> = ({users}) => {
    return (
        <div></div>
    )
}


export default AlternativeGreeting;
