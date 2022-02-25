import React, { createContext, useState } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
	const [todos, setTodos] = useState([
		{ id: 1, item: 'learning React' },
		{ id: 2, item: 'work out' },
		{ id: 3, item: 'reading a book' },
	]);

	return (
		<ToDoContext.Provider value={[todos, setTodos]}>
			{props.children}
		</ToDoContext.Provider>
	);
};
