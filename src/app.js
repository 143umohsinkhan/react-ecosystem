import React from 'react';
import {hot} from 'react-hot-loader';
import './app.css';
import TodoList from './todos/todolist';

const App=()=>(
    <div className="App">
        <TodoList></TodoList>
    </div>
);

export default hot(module)(App);