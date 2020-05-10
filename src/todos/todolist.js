import React from 'react';
import TodoListItem from './TodoListItem';
import NewToDoForm from './newTodoForm';
import { connect } from 'react-redux';
import { removeTodo } from './action';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <TodoListItem todo={todo}
            onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);