import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteClick }) => {
  const renderedList = todos.map((todo) => {
    return <TodoItem key={todo._id} onDeleteClick={onDeleteClick} todo={todo} />
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default TodoList;
