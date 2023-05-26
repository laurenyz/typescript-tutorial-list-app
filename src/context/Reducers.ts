import { Todo } from "../model";

type Actions = 
| { type: "add"; payload: string }
| { type: "remove"; payload: number }
| { type: "done"; payload: number };

export const TodoReducer = (state: Todo[], actions: Actions) => {
    switch (actions.type) {
        case "add":
            return [
                ...state,
                { id: Date.now(), todo: actions.payload, isDone: false}
            ]
        case "remove":
            return state.filter((todo) => todo.id !== actions.payload)
        case "done":
            return state.map((todo) => 
                todo.id !== actions.payload? {...todo, isDone: !todo} : todo
            )
        default:
            return state
    }
};

// const [state, dispatch] = useReducer(TodoReducer, [])