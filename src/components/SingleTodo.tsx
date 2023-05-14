import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editTodoText, setEditTodoText] = useState<string>(todo.todo)
    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      editInputRef.current?.focus()
    }, [editMode])
    
    const handleDone = (id:number) => {
        setTodos(todos.map(todo => todo.id===id ? {...todo, isDone: !todo.isDone} : todo))
    }
    
    const handleDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !==id))
    }

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(todos.map(todo => todo.id===id ? {...todo, todo: editTodoText} : todo))
        setEditMode(false)
    }

  return (
    <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}>
        {
            editMode
            ?
                <input 
                    ref={editInputRef}
                    className='todos__single--text'
                    value={editTodoText} 
                    onChange={(e)=> setEditTodoText(e.target.value)}
                />
            :
                todo.isDone
                ?
                    <s className="todos__single--text">
                        {todo.todo}
                    </s>
                :
                    <span className="todos__single--text">
                        {todo.todo}
                    </span>
        }
        <div>
            <span className="icon" onClick={() =>{
                if(!editMode && !todo.isDone){
                    setEditMode(true)
                }
            }}>
                <AiFillEdit />
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo