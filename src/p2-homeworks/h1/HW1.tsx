import React from 'react';
import Message from './Message';
import avatarImg from './4516396841595453816-128.png'
import s from './HW1.module.css'

const messageData = {
    avatar: avatarImg,
    name: 'Sergey',
    message: 'Great job!',
    time: '03:00',
};

function HW1() {
    return <div className={s.messageWrapper}>
        <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
        />
    </div>
}

export default HW1;
