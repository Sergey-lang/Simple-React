import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {
    title: string
    className?: any

    restProps?:any
}

export const Header: React.FC<HeaderPropsType> = ({title,className, ...restProps}) => {
    const titleStyle = `${s.main_header} ${className}`
    return (
        <h3 className={titleStyle}>{title}</h3>
    )
}




