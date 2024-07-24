import { ITodo } from '../../global/types/todo.types';

export interface ITodoListProps {
	todos: Array<ITodo>;
	toggleComplete: (id: number) => void;
	removeTodo: (id: number) => void;
	editTodo: (id: number, title: string, newDescription?: string) => void;
}
