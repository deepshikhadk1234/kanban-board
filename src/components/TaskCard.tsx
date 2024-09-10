import { Task } from '../utils/data-task'

const Taskcard = ({ task }: {
  task: Task
}) => {
  return (
    <div className="border rounded-lg p-2 m-2 px-5 bg-white">
      <div className="text-base font-semibold py-2">
        {task.title}
      </div>
      <div className ="text-base font-medium py-2 justify-normal">
        {task.description}
      </div>
      <div className="flex gap-4 justify-between py-2 text-gray-500">
        <div>{task.id}</div>
        <div>{task.points}</div>
      </div>
    </div>
  )
}

export default Taskcard