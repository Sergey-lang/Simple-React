import React from 'react';
import Message from './Message';
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    name: 'Batman',
    message: 'Great job!',
    time: '18:53',
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
