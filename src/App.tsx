//import { useState } from 'react'

import './App.css'
import TaskCard from './components/TaskCard.tsx'
import { Task } from './utils/data-task'




function App() {
  // const [count, setCount] = useState(0)
  const task: Task={
    title: 'Kanban Board',
    id: '1',
    points: 10
  }

  return (
    <>
    <TaskCard task={task} />
   
    </>
    
    
  )
}

export default App
