import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {InitStateType, loadingAC} from './bll/loadingReducer';
import Preloader from './bll/Preloader.gif';
import s from './HW10.module.css';

export function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, InitStateType>(state => state.loading)

    const unloading = false

    const setLoading = () => {
        dispatch(loadingAC(!loading.loading))
        setTimeout(() => {
            dispatch(loadingAC(unloading))
        }, 2000)
        console.log('loading...');
    };

    return (
        <div className={s.hw_10}>
            {loading.loading
                ? (
                    <div className={s.preloader}><img src={Preloader} /></div>
                ) : (
                    <div>
                        <SuperButton className={s.set_btn} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    );
}

