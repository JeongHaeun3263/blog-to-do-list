import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const TodoForm = () => {
	const [todos, setTodos] = useContext(ToDoContext);

	const [item, setItem] = useState('');

	const updateItem = (e) => {
		e.preventDefault();
		setItem(e.target.value);
	};

	const addItem = (e) => {
		e.preventDefault();
		setTodos((todos) => [...todos, { item, id: todos.length + 1 }]);
		setItem('');
	};

	return (
		<form onSubmit={addItem}>
			<input
				className='todo-input'
				type='text'
				name='item'
				value={item}
				onChange={updateItem}
			/>
			<button className='btn'>ADD</button>
		</form>
	);
};

export default TodoForm;
