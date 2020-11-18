import React from 'react';
import s from './JuniorPlus.module.css';
import {Header} from '../../../NewComponents/Header';
import {HW13} from '../../../h13/HW13';

export function JuniorPlus() {
   return (
      <div className={s.juniorPlus}>
         <div className={s.home_block}>
            <Header title={'homework 13'}
                    className={s.plusJun}
            />
            <HW13/>
         </div>
         <div className={s.home_block}>
            <Header title={'homework 14'}
                    className={s.plusJun}
            />
            <HW13/>
         </div>
      </div>
   );
}

