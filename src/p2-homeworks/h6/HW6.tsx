import React, {useState} from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {restoreState, saveState} from './localStorage/localStorage';
import {Header} from '../NewComponents/Header';
import s from './Hw6.module.css'

function HW6() {

    const [value, setValue] = useState<string>('');

    const save = () => {
        saveState<string>('editable-span-value', value);
    };
    const restore = () => {
        setValue(restoreState('editable-span-value', value)); //current value saved in key 'editable-span-value'
    }; // I didn't understand how is it work, but it's working...:(

    return (
        <div className={s.wrapper}>
            <Header title={'HOMEWORK 6'}/>
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}
                         className={s.btn}>save</SuperButton>
            <SuperButton onClick={restore}
                         className={s.btn}>restore</SuperButton>


            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeSuperEditableSpan/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW6;
