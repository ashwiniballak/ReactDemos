import React, { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/todos'
function TodoList() {
  const [todos, setTodos] = useState([])
  // const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url)
      const todos = await response.json()
      setTodos(todos)
      // setLoading(false)
    }
    fetchTodos()
  }, [])
  // if (loading) {
  //   return <div>Loading...</div>
  // }
  console.log(todos)
  return (
    <div>
      <h2>todos</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title} {todo.completed ? '✅' : '❌'}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList