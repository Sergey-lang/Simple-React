import React from 'react';
import s from './Todo.module.css'
import {FilterType, ListType} from './../HW2';

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
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }} className={s.remove_button}>X
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className={s.filter}>
                <button className={s.filter_button} onClick={() => {
                    props.changeTask('all')
                }}>All
                </button>
                <button className={s.filter_button} onClick={() => {
                    props.changeTask('high')
                }}>High
                </button>
                <button className={s.filter_button} onClick={() => {
                    props.changeTask('medium')
                }}>Medium
                </button>
                <button className={s.filter_button} onClick={() => {
                    props.changeTask('low')
                }}>Low
                </button>
            </div>
        </div>
    );
}

export default Todo;