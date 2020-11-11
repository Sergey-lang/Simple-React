import React, {useEffect, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css'

function Clock() {

    const [timerId, setTimerId] = useState();
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false)

    const stop = () => {
        setDisabled(false)
        clearInterval(timerId)
    }

    const start = () => {
        setDisabled(true)
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    useEffect(() => {
        return () => {
            clearInterval(timerId)
        }
    }, [timerId])

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const deg = 6

    let hh = date.getHours() * 30
    let mm = date.getMinutes() * deg
    let ss = date.getSeconds() * deg

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const stringDate = `${get2digitsString(date.getDate())}:
    ${get2digitsString(date.getMonth() + 1)}:
    ${get2digitsString(date.getFullYear())}`;

    return (
        <div className={s.main_block}>
            <div className={s.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                <div className={s.hour}>
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
