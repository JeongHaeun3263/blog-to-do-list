import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToDoProvider } from './contexts/ToDoContext';

function App() {
	return (
		<ToDoProvider>
			<div className='app'>
				<Navbar />
				<TodoForm />
				<TodoList />
			</div>
		</ToDoProvider>
	);
}

export default App;
