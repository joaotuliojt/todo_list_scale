import TodoItem from '../TodoItem';
import { ITodoListProps } from './types';

export default function TodoList({
	todos,
	toggleComplete,
	removeTodo,
	editTodo,
}: ITodoListProps) {
	return (
		<div>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleComplete={toggleComplete}
					removeTodo={removeTodo}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
}
