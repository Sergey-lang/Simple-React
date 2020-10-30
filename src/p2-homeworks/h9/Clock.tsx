import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false)

    const stop = () => {
        setDisabled(false)
        clearInterval(timerId)
    }

    const start = () => {
        setDisabled(true)
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const deg = 6

    let hh = date.getHours() * 15
    let mm = date.getMinutes() * deg
    let ss = date.getSeconds() * deg

    let dd = date.getDate()
    console.log(hh,mm,ss)
    let mh = date.getMonth()
    let yy = date.getFullYear()

    const stringDate = `${dd < 10 ? '0' + dd : dd}:${mh < 10 ? '0' + mh : mh}:${yy < 10 ? '0' + yy : yy}`;

    return (
        <div className={s.main_block}>

            <div className={s.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <div className={s.hour}>
                    {}
                    <div className={s.hr} style={{transform: `rotate(${hh}deg)`}}></div>
                </div>
                <div className={s.min}>
                    <div className={s.mn} style={{transform: `rotate(${mm}deg)`}}></div>
                </div>
                <div className={s.sec}>
                    <div className={s.sc} style={{transform: `rotate(${ss}deg)`}}></div>
                </div>
            </div>
            {show && (
                <div className={s.data_wrapper}>
                    {stringDate}
                </div>
            )}

            <div className={s.button_wrapper}>
                <SuperButton onClick={start}
                             className={s.watches_button}
                             disabled={disabled}
                >start</SuperButton>
                <SuperButton onClick={stop}
                             className={`${s.watches_button}`}
                             disabled={!disabled}>
                    stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
