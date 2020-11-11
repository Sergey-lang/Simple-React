import React from 'react';
import {Header} from './Header';
import {Routes} from './Routes';
import {HashRouter} from 'react-router-dom';
import s from './HW5.module.css';

export function HW5() {
    return <>
        <HashRouter>
            <Header/>
            <div className={s.container}>
                <Routes/>
            </div>
        </HashRouter>
    </>
}

