import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => { // defines as functional component
  const [todoInput, setTodoInput] = useState<string>("") // can use union for multiple: <string | number>
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todoInput) {
      setTodos([...todos, {id: Date.now(), todo: todoInput, isDone: false}])
      setTodoInput("")
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    // dropped outside of a droppable zone
    if(!destination) return 
    // dropped in the same spot
    if(destination.droppableId===source.droppableId && destination.index===source.index) return

    let add, 
      active = todos,
      complete = completedTodos; 
    
    if(source.droppableId==="TodosList"){
      add=active[source.index]
      active.splice(source.index, 1)
    } else {
      add=complete[source.index]
      complete.splice(source.index, 1)
    }

    if(destination.droppableId==="TodosList"){
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setTodos(active)
    setCompletedTodos(complete)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className = "heading">Taskify</span>
        <InputField todoInput={todoInput} setTodoInput={setTodoInput} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
