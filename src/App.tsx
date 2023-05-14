import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => { // defines as functional component
  const [todoInput, setTodoInput] = useState<string>("") // can use union for multiple: <string | number>
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todoInput) {
      setTodos([...todos, {id: Date.now(), todo: todoInput, isDone: false}])
      setTodoInput("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputField todoInput={todoInput} setTodoInput={setTodoInput} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
