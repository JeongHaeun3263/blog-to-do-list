import React, { createContext, useState } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
	const [todos, setTodos] = useState([
		{ id: 1, item: 'learning React' },
		{ id: 2, item: 'work out' },
		{ id: 3, item: 'reading a book' },
	]);

	const addItem = (item) => {
		setTodos([...todos, { item, id: todos.length + 1 }]);
	};

	const deleteItem = (id) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	return (
		<ToDoContext.Provider value={{ todos, addItem, deleteItem }}>
			{props.children}
		</ToDoContext.Provider>
	);
};
