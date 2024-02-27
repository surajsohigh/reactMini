import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")
    const [editText, setEditText] = useState({ id: null, text: "" })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setTodo([...todo, {id: Date.now(), text:input}])
      setInput("")
    }
  
    const deleteTodo = (id) => {
      console.log(id)
      setTodo(todo.filter((todoItem) => todoItem.id !== id));
    }
  
    const updateTodo = (id) => {
        
    }
  
  return (
    <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit" >Add</button>
      </form>

      <ul>
        {
          todo.map( (e) => {
            return (
              <li key={e.id}>
                {
                  editText.id === e.id ? 
                  (<>
                  
                  </>) : 
                  (<>
                    {e.text}
                    <button onClick={() => deleteTodo(e.id)}>Delete</button>
                    <button onClick={() => updateTodo(e.id)}>Update</button> 
                  </>)
                }



            </li>

            )
          } )
        }
      </ul>
    </div>
    </>
  )
}

export default Todo