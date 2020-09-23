import React from 'react';
import s from './Todo.module.css'
import {FilterType, ListType} from './../HW2';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';

type PropsType = {
    task: Array<ListType>
    removeTask: (id: number) => void
    changeTask: (value: FilterType) => void
}

function Todo(props: PropsType) {
    return (
        <div>
            {props.task.map(t => {
                return (
                    <div key={t.id} className={s.list_block}>
                        <div className={s.list_item}>
                            <p>{t.task}</p>
                            <div className={t.importance}>{}</div>

                            <SuperButton onClick={() => {
                                props.removeTask(t.id)
                            }} className={s.remove_button}>X
                            </SuperButton>
                        </div>
                    </div>
                )
            })}
            <div className={s.filter}>
                <SuperButton className={s.filter_button} onClick={() => {
                    props.changeTask('all')
                }}>All
                </SuperButton>
                <SuperButton className={s.filter_button} onClick={() => {
                    props.changeTask('high')
                }}>High
                </SuperButton>
                <SuperButton className={s.filter_button} onClick={() => {
                    props.changeTask('medium')
                }}>Medium
                </SuperButton>
                <SuperButton className={s.filter_button} onClick={() => {
                    props.changeTask('low')
                }}>Low
                </SuperButton>
            </div>
        </div>
    );
}

export default Todo;