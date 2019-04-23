import React from 'react';

const TodoItem = ({ todo, onDeleteClick }) => {
  return(
    <div className="item">
      <div className="header">{todo.title}</div>
      <div className="content">
        {todo.content}
      </div>
      <br></br>
      <button onClick={() => onDeleteClick(todo)} className="negative ui button">Delete Todo</button>
    </div>
  );
}

export default TodoItem;
