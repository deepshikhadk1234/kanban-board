//import { useState } from 'react'

import './App.css'
import TaskCard from './components/TaskCard.tsx'
import { tasks } from './utils/data-task'

function App() {
  
  return (
    <>
    {tasks.map((task) => (
      <TaskCard task={task} />
    ))}
   
    </>
    
    
  )
}

export default App
