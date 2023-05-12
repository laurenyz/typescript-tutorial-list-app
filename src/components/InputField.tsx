import React from 'react'
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
// can also define like 
// const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className='input'>
        <input 
            className="input__box" 
            type="input" 
            value={todo}
            onChange = {(event) => setTodo(event.target.value)}
            placeholder = "Enter a task" 
        />
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField