import { FormEvent, useState } from "react";
import { Button, Form, Input } from "./styles";
import { ITodoFormProps } from "./types";

export default function TodoForm({ addTodo }: ITodoFormProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título (obrigatório)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Descrição (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Adicionar tarefa</Button>
    </Form>
  );
}
