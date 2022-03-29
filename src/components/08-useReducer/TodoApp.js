import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


import './css/style.css'

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {


    const [ todos, dispatch ] = useReducer( todoReducer, [], init );


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete = id => {
        dispatch({
        type: 'delete',
        payload: id
        })
    }

    const handleToggle = id => {
    dispatch({
        type: 'toggle',
        payload: id
    })
    }

    const handleAddTodo = newTodo => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <section className="row">
            <div className="col-6">

                <TodoList
                    todos={todos}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            </div>

            <div className="col-6">
            <TodoAdd handleAddTodo={ handleAddTodo }/>
            </div>
        </section>
        </>
    )
}
