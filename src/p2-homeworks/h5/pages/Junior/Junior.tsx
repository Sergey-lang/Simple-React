import React from 'react';
import s from './Junior.module.css'
import HW8 from '../../../h8/HW8';
import HW7 from '../../../h7/HW7';
import {Header} from '../../../NewComponents/Header';


function Junior() {
    return (
        <div className={s.junior_wrapper}>
            <div className={s.home_block}>
                <Header title={'homework 7'}/>
                <HW7/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 8'}/>
                <HW8/>
            </div>

        </div>
    );
}

export default Junior;
