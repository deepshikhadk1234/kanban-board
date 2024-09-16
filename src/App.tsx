//import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard.tsx'
import { tasks as initialTasks, Status, statuses, Task } from './utils/data-task'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: taskInColumn
    }
  })

  // const updateTaskPoints = (task: Task, points: number) => {
  //   updateTask({...task, points})
  // }

  // const updateTaskTitle = (task: Task, title: string) => { 
  //   updateTask({...task, title})
  // }

  const updateTask = (task: Task) => { // Change String to string

    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if (task) {
      updateTask({ ...task, status })
    }
  }

  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null)
  const handleDragEnter = (status: Status) => {
    console.log('drag enter', status)
    setCurrentlyHoveringOver(status)
  }


  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div
          onDrop={(e) => handleDrop(e, column.title)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => handleDragEnter(column.title)}
        >
          <div className="flex justify-between text-3xl p-2 font-bold  text-cyan-800 ">
            <h2 className=" capitalize ">{column.title}</h2>
            {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
          </div>
          <div className={`w-full ${currentlyHoveringOver === column.title ? 'bg-gray-200' : 'bg-transparent'}`}>
            {column.tasks.map((task) => (
              <TaskCard
                task={task}
                updateTask={updateTask}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


export default App
