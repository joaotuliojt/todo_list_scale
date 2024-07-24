import { useState, useEffect } from "react";

import { ITodo } from "./global/types/todo.types";
import { FilterType } from "./global/types/filter.types";
import { Filter, TodoForm, TodoList } from "./components";

import { Container, GlobalStyle } from "./styles";

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const handleChangeFilter = (newFilter: FilterType) => {
    setFilter(newFilter)
    localStorage.setItem("filter", newFilter);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return false;
  });

  function addTodo(title: string, description: string): void {
    const newTodo = { id: Date.now(), title, description, completed: false }
    if (todos.some((todo) => todo.title === newTodo.title)) {
      alert("Tarefa duplicada")
      return
    }
    const todosUpdated = [...todos, newTodo]
    setTodos(todosUpdated);
    localStorage.setItem("todos", JSON.stringify(todosUpdated));
  }

  function toggleComplete(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id: number, newTitle: string, newDescription?: string) {
    const todosEdited = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
          description: newDescription,
        }
      }
      return todo
    })
    setTodos(todosEdited)
    console.log(id, newTitle, newDescription);
  }

  function sortByTitle() {
    const filteredByTitleTodos = todos.sort((a, b) => a.title.localeCompare(b.title))
    localStorage.setItem("todos", JSON.stringify(filteredByTitleTodos));
    setTodos([...filteredByTitleTodos])
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos") || "")
      : [];
    setTodos(storedTodos);

    const storedFilter = localStorage.getItem("filter") || "all"
    setFilter(storedFilter as FilterType)
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={handleChangeFilter} sortByTitle={sortByTitle} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </Container>
  );
}
