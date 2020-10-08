import React from "react";
import s from './PreJunior.module.css'
import HW1 from "../../../h1/HW1";
import HW2 from "../../../h2/HW2";
import HW3 from "../../../h3/HW3";
import HW4 from "../../../h4/HW4";
import HW6 from '../../../h6/HW6';
import {Header} from '../../../NewComponents/Header';

function PreJunior() {
    return (
        <div className={s.prejunior_wrapper}>
            <div className={s.home_block}>
                <Header title={'homework 1'}/>
                <HW1/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 2'}/>
                <HW2/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 3'}/>
                <HW3/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 4'}/>
                <HW4/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 6'}/>
                <HW6/>
            </div>
        </div>
    );
}

export default PreJunior;
