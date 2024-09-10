//import { useState } from 'react'

import './App.css'
import TaskCard from './components/TaskCard.tsx'
import { tasks, statuses } from './utils/data-task'

function App() {
  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: taskInColumn
    }
  })

  return (
    <div className='flex divide-y'>
      {columns.map((column) => (
        <div>
          <h2 className="text-3xl p-2 capitalize font-bold text-cyan-800">{column.title}</h2>
          {column.tasks.map((task) => <TaskCard task={task} />)}
        </div>
      ))}
      </div>
  )
}


export default App
