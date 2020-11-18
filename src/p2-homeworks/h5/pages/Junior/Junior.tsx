import React from 'react';
import s from './Junior.module.css'
import {HW8} from '../../../h8/HW8';
import {HW7} from '../../../h7/HW7';
import {Header} from '../../../NewComponents/Header';
import {HW9} from '../../../h9/HW9';
import {HW10} from '../../../h10/HW10';
import {HW11} from '../../../h11/HW11';
import {HW12} from '../../../h12/HW12';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import {themeInitStateType} from '../../../h12/bll/themeReducer';

export function Junior() {
   const themes = useSelector<AppStoreType, themeInitStateType>(state => state.theme)
   const blockStyle = `${s[themes.currentTheme]} ${s.wrapper}`
    return (
        <div className={s.junior_wrapper}>
            <div className={s.home_block}>
                <Header title={'homework 8'}/>
                <HW8/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 9'}/>
                <HW9/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 7'}/>
                <HW7/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 10'}/>
                <HW10/>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 11'}/>
                <HW11/>
            </div>
            <div className={`${s.home_block} ${blockStyle}`}>
                <Header title={'homework 12'}/>
                <HW12/>
            </div>
        </div>
    );
}
