import React from "react";
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.numberError}>404</div>
            <div className={s.messageError}><p>Page not found!</p></div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
