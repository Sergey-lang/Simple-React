import React from 'react';
import s from './PreJunior.module.css'
import HW1 from '../../../h1/HW1';
import HW2 from '../../../h2/HW2';
import HW3 from '../../../h3/HW3';
import HW4 from '../../../h4/HW4';
import HW6 from '../../../h6/HW6';
import {Header} from '../../../NewComponents/Header';

export function PreJunior() {
    return (
        <div className={s['preJunior-wrapper']}>
            <div className={s.home_block}>
                <Header title={'homework 1'}/>
                <div className={s.content}>
                    <div className={s.work}>
                        <HW1/>
                    </div>
                    <div className={s.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, distinctio excepturi fugit in molestias mollitia odit optio provident qui quia reprehenderit tempora velit vero.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 2'}/>
                <div className={s.content}>
                    <div className={s.work}>
                        <HW2/>
                    </div>
                    <div className={s.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, distinctio excepturi fugit in molestias mollitia odit optio provident qui quia reprehenderit tempora velit vero.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 3'}/>
                <div className={s.content}>
                    <div className={s.work}>
                        <HW3/>
                    </div>
                    <div className={s.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, distinctio excepturi fugit in molestias mollitia odit optio provident qui quia reprehenderit tempora velit vero.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 4'}/>
                <div className={s.content}>
                    <div className={s.work}>
                        <HW4/>
                    </div>
                    <div className={s.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, distinctio excepturi fugit in molestias mollitia odit optio provident qui quia reprehenderit tempora velit vero.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.home_block}>
                <Header title={'homework 6'}/>
                <div className={s.content}>
                    <div className={s.work}>
                        <HW6/>
                    </div>
                    <div className={s.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci, distinctio excepturi fugit in molestias mollitia odit optio provident qui quia reprehenderit tempora velit vero.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

