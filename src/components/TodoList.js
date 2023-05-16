import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, deleteTodo, fetchTodos } from "../store/todosReducer"
import { useEffect, useState } from "react"


const TodoList = () => {
    const {items, loading, error} = useSelector(state => state.todos)
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()

    const onAdd = () => {
        if (newTodo.trim() !== ''){
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    if (loading) return <h3>Данные загружаются</h3>
    if (error) return <h3>{error}</h3>

    return (
        <div>
            TodoList
            <div>
                <input
                    type="text"
                    onChange={e => setNewTodo(e.target.value)}
                    value={newTodo}
                />
                <button onClick={onAdd}>Добавить</button>
            </div>
            <div>
                {items.length>0 &&
                    <ol>
                        {items.map(t =>
                            <li
                                key={t.id}
                                onClick={e => dispatch(deleteTodo(t.id))}
                            >{t.title}</li>
                        )}
                    </ol>
                }
            </div>


        </ div>
    )
}
export default TodoList