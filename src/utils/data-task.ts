export type Status = 'todo' | 'inProgress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    title: string
    id: string
    status: Status
    priority: Priority
    points?: number
  }
 export const statuses: Status[]=['todo', 'inProgress', 'done']
export const priorities: Priority[]= ['low','medium','high']

