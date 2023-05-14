import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todoInput: string;
    setTodoInput: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //since this function does not return anything
}

const InputField = ({todoInput, setTodoInput, handleAdd}: Props) => {
// can also define like 
// const InputField: React.FC<Props> = ({todo, setTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
        <input 
            ref={inputRef}
            className="input__box" 
            type="input" 
            value={todoInput}
            onChange = {(event) => setTodoInput(event.target.value)}
            placeholder = "Enter a task" 
        />
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField