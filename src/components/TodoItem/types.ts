import { ITodo } from '../../global/types/todo.types';

export interface ITodoItemProps {
	todo: ITodo;
	toggleComplete: (id: number) => void;
	removeTodo: (id: number) => void;
	editTodo: (id: number, title: string, newDescription?: string) => void;
}

export interface ITodoItemStyleProps {
	completed?: boolean;
	deleted?: boolean;
}
