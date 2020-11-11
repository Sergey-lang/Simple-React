import React, {useCallback, useEffect, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from './HW11.module.css'

export function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const onChange2 = useCallback((value: Array<number>) => {
        setValue1(value[0])
        setValue2(value[1])
    }, [])

    return (
        <div className={s.hw_11}>
            <div className={s.superRange}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <SuperDoubleRange
                    onChangeRange={onChange2}
                    value={[value1, value2]}
                    step={5}
                />
                <div className={s.values}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
            </div>
        </div>
    );
}
