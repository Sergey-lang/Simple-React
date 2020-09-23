import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message_style}>
            <div className={s.user_img}><img src={props.avatar} alt=""/></div>
            <div className={s.bubble_wrapper}>
                <div className={s.name_message}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>

    );
}

export default Message;
