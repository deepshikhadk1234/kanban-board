//import { useState } from 'react'

import './App.css'
import TaskCard from './components/TaskCard.tsx'



function App() {
  // const [count, setCount] = useState(0)
  const task = {
    title: 'Kanban Board',
    id: '1',
    points: 10
  }

  return (
    <>
    <TaskCard task={task} />
    {/* <TaskCard task={task} />
    <TaskCard task={task} />
    <TaskCard title={title} id={id} points={points} /> */}
   
    </>
    
    
  )
}

export default App
