export type Status = 'todo' | 'inProgress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    title: string
    id: string
    description?: string
    status: Status
    priority: Priority
    points?: number
  }
 export const statuses: Status[]=['todo', 'inProgress', 'done']
export const priorities: Priority[]= ['low','medium','high']
  export const tasks: Task[] = [
    {
      title: 'Kanban Board',
      id: '1',
      description: 'Hello how are you ????',
      status: 'todo',
      priority: 'medium',
      points: 10
    },
    {
      title: 'Kanban Board',
      id: '2',
      description: 'Hello how are you ????',
      status: 'inProgress',
      priority: 'medium',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '3',
      status: 'done',
      priority: 'high',
      points: 33
    },
    {
      title: 'Kanban Board',
      id: '4',
      status: 'todo',
      priority: 'medium',
      points: 90
    },
    {
      title: 'Kanban Board',
      id: '5',
      status: 'inProgress',
      priority: 'low',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '6',
      status: 'done',
      priority: 'medium',
      points: 33
    },
    {
      title: 'Kanban Board',
      id: '7',
      status: 'todo',
      priority: 'high',
      points: 90
    },
    {
      title: 'Kanban Board',
      id: '8',
      status: 'inProgress',
      priority: 'medium',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '9',
      status: 'done',
      priority: 'low',
      points: 33
    }

  ]
