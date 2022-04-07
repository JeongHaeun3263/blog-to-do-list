import React, { useContext, useState } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const TodoForm = () => {
	const { addItem } = useContext(ToDoContext);

	const [item, setItem] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(item);
		setItem('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='todo-input'
				type='text'
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<button className='btn'>ADD</button>
		</form>
	);
};

export default TodoForm;
