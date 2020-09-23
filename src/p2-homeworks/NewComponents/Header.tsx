import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {
    title: string
}

export const Header: React.FC<HeaderPropsType> = ({title}) => {
    return (
        <h3 className={s.main_header}>{title}</h3>
    )
}




