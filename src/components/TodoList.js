import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const TodoList = () => {
	const { todos, deleteItem } = useContext(ToDoContext);

	return (
		<ul className='todo-list'>
			{todos.map((todo) => (
				<li
					className='todo-item'
					key={todo.id}
					onClick={() => deleteItem(todo.id)}
				>
					{todo.item}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
