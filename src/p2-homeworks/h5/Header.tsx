import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

export function Header() {
    return (
        <nav className={s.nav}>
            <div className={s['menu']}>
                <div className={s['label']}>Follow Me</div>
                <div className={s['spacer']}></div>
                <div className={s['item']}>
                    <span><NavLink to='/pre-junior' activeClassName={s.activeLink}>PreJunior</NavLink></span></div>
                <div className={s['item']}>
                    <span><NavLink to='/junior' activeClassName={s.activeLink}>Junior</NavLink></span></div>
                <div className={s['item']}>
                    <span><NavLink to='/junior-plus' activeClassName={s.activeLink}>Junior+</NavLink></span></div>
            </div>
        </nav>
    );
}



