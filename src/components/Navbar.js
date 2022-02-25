import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

const Navbar = () => {
	const [todos, setTodos] = useContext(ToDoContext);

	console.log(todos);

	return (
		<nav className='navbar'>
			{todos.length === 0 ? (
				<p>Well done!</p>
			) : (
				<p>You have {todos.length} things to do</p>
			)}
		</nav>
	);
};

export default Navbar;
