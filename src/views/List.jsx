import { useState } from "react";

function List() {
    const [activity,setActifity] = useState([])
    const [title, setTitle] = useState('')
    const [edit , setEdit] = useState({})
    const [message, setMessage] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        if (title === '') {
            setMessage('Judul harus di isi')
            return true
        }
        setMessage('')
        if (edit.id) {
            const updateTodo = {
                id : edit.id,
                nama: title,
                done: edit.done
            }
            const editTodoIndex = activity.findIndex((todo) => {
                return todo.id === edit.id
            })
            const updateTodos = [...activity]
            updateTodos[editTodoIndex] = updateTodo

            setActifity(updateTodos)
            
            setEdit({})
            setTitle('')

            return true
        }

        setActifity([...activity, {
            id: Date.now(),
            nama: title,
            done: false
        }])
        setTitle('')
    }

    const removeTodo = (index) => {
        const filterTodo = activity.filter((todo) => {
            return todo.id !== index
        })
        setActifity(filterTodo)

        if (edit.id) {
            cancelEdit()
        }
    }

    const editTodo = (data) => {
        setTitle(data.nama)
        setEdit(data)
    }

    const cancelEdit = () => {
        setTitle('')
        setEdit({})
    }

    const sudahTodo = (todo) => {
        const updateTodo = {
            ...todo,
            done: todo.done ? false : true
        }
        const editTodoIndex = activity.findIndex((e) => {
            return e.id === todo.id
        })
        const updateTodos = [...activity]
        updateTodos[editTodoIndex] = updateTodo

        setActifity(updateTodos)
    }

    return (
        <div className="pt-10 font-pupylinux">
            <div className="w-max mx-auto mb-7">
            <form onSubmit={addTodo}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Input todo here" className="border rounded-lg py-2 px-3" />
                <button type="submit" className="py-2 px-4 rounded-lg bg-green-400 text-white ml-3">{ edit.id ? 'Update' : 'Add'}</button>
                {
                    edit.id && 
                    <button className="py-2 px-4 rounded-lg bg-yellow-400 text-white ml-3" onClick={() => cancelEdit()}>Cancel</button>
                }
            </form>
            {
                message &&
                <p className="text-sm text-red-500 text-center mt-2">{message}</p>
            }
            </div>
            <ul className="w-max mx-auto">
                {
                    activity.length > 0 
                                ?
                                activity.map(e =>
                                  <li key={e.id} className="border w-[500px] rounded-lg p-3 mb-2 flex items-center justify-between">
                                      <input type="checkbox" checked={e.done} onChange={() => sudahTodo(e)} />
                                  {e.nama}
                                  <div className="flex items-center">
                                  <button className="py-2 px-4 rounded-lg bg-yellow-400 text-white text-sm" onClick={() => { editTodo(e) }}>Edit</button>
                                  <button className="py-2 px-4 rounded-lg bg-red-400 text-white text-sm ml-3" onClick={() => { removeTodo(e.id) }}>Hapus</button>
                                  <p className="ml-3">{e.done ? 'Selesai' : 'Belum selesai'}</p>
                                  </div> 
                                  </li>
                                )
                                :
                                <p>Belum ada todo</p>
                }
            </ul>
        </div>
    )
}

export default List;