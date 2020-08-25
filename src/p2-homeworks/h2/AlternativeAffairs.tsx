import React, {useState} from 'react';
import s from './AlternativeAffairs.module.css'
import Todo from './Todo';

export type ListType = {
    id: number
    task: string
    importance: string
}

export type FilterType = 'all' | 'low' | 'medium' | 'high'

function AlternativeAffairs() {
//local state contain array with ListType
    const [task, setTask] = useState<Array<ListType>>(
        [
            {id: 1, task: 'Wash the dishes', importance: 'low'},
            {id: 2, task: 'Go shopping', importance: 'medium'},
            {id: 3, task: 'Solve task from CodeWars', importance: 'low'},
            {id: 4, task: 'Watch the movies about React', importance: 'medium'},
            {id: 5, task: 'Be quite', importance: 'high'},
        ]
    )

    //remove task from l.state
    function removeTask(id: number) {
        setTask(task.filter(t => t.id !== id))
    }

    const [filter, setFilter] = useState<FilterType>('all')
    //new let for return value from filter
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
        <div className={s.list_container}>
            <Todo task={arrayAfterFilter}
                  removeTask={removeTask}
                  changeTask={changeImportance}
            />
        </div>
    );
}

export default AlternativeAffairs;
