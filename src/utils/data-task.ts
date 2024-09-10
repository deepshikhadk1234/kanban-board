export type Status = 'todo' | 'inProgress' | 'done'

export type Task = {
    title: string
    id: string
    description?: string
    status: Status
    points?: number
  }
 export const statuses: Status[]=['todo', 'inProgress', 'done']

  export const tasks: Task[] = [
    {
      title: 'Kanban Board',
      id: '1',
      description: 'Hello how are you ????',
      status: 'todo',
      points: 10
    },
    {
      title: 'Kanban Board',
      id: '2',
      description: 'Hello how are you ????',
      status: 'inProgress',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '3',
      status: 'done',
      points: 33
    },
    {
      title: 'Kanban Board',
      id: '4',
      status: 'todo',
      points: 90
    },
    {
      title: 'Kanban Board',
      id: '5',
      status: 'inProgress',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '6',
      status: 'done',
      points: 33
    },
    {
      title: 'Kanban Board',
      id: '7',
      status: 'todo',
      points: 90
    },
    {
      title: 'Kanban Board',
      id: '8',
      status: 'inProgress',
      points: 334
    },
    {
      title: 'Kanban Board',
      id: '9',
      status: 'done',
      points: 33
    }

  ]
