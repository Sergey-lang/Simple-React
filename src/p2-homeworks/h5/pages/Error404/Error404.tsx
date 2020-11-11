import React from 'react';
import s from './Error404.module.css';

export function Error404() {
    return (
        <div className={s.error_wrapper}>
            <div className={s.numberError}>404</div>
            <div className={s.messageError}><p>You have lended on a super-secret page!!!</p></div>
        </div>
    );
}
