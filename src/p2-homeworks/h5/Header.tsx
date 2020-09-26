import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.main_nav_block}>
            <div className={s.links_block}>
                <div className={s.link}>
                    <NavLink to='/pre-junior' activeClassName={s.activeLink}>PreJunior</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to='/junior' activeClassName={s.activeLink}>Junior</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to='/junior-plus' activeClassName={s.activeLink}>Junior+</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;


