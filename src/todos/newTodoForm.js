import React, { useState } from 'react';
//import './NewTodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from './action';

const NewToDoForm = ({ todos, onCreatePressed }) => {

    const [inputValue, setInputValue] = useState('');

    return (<div className="newTodoform">
        <input className="newTodoInput"
            value={inputValue}
            placeholder="Type your new todo here"
            onChange={e => setInputValue(e.target.value)}
            type="text"></input>
        <button className='newTodoButton'
            onClick={() => {
                let isDuplicate = todos.some(todo => todo.text === inputValue);
                if (!isDuplicate) 
                {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
        > Create Todo</button>
    </div>);
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispath => ({
    onCreatePressed: text => dispath(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);