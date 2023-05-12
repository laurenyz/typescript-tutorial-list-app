import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => { // defines as functional component
  const [todo, setTodo] = useState<string>("") // can use union for multiple: <string | number>

console.log(todo)

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
