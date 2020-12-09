import React, {useState} from 'react';
import s from './Hw2.module.css';
import Todo from './TodoList/Todo';

export type ListType = {
    id: number
    task: string
    importance: FilterType
}

export type FilterType = 'all' | 'low' | 'medium' | 'high'

function HW2() {
    const [task, setTask] = useState<Array<ListType>>(
        [
            {id: 1, task: 'Do housework', importance: 'low'},
            {id: 2, task: 'Go shopping', importance: 'medium'},
            {id: 3, task: 'Buy milk', importance: 'low'},
            {id: 4, task: 'Download new film', importance: 'medium'},
            {id: 5, task: 'Be happy!', importance: 'high'},
        ]
    )

    function removeTask(id: number) {
        setTask(task.filter(t => t.id !== id))
    }

    const [filter, setFilter] = useState<FilterType>('all')

    let arrayAfterFilter = task
    if (filter === 'low') {
        arrayAfterFilter = task.filter(t => t.importance === 'low')
    } else if (filter === 'medium') {
        arrayAfterFilter = task.filter(t => t.importance === 'medium')
    } else if (filter === 'high') {
        arrayAfterFilter = task.filter(t => t.importance === 'high')
    } else if (filter === 'all') {
        arrayAfterFilter = task
    }

    function changeImportance(value: FilterType) {
        setFilter(value)
    }

    return (
        <div className={s.filterWrapper}>
            <Todo task={arrayAfterFilter}
                  removeTask={removeTask}
                  changeTask={changeImportance}
            />
        </div>
    );
}

export default HW2;