import { Request, Response } from 'express'

interface User {
  id: number
  name: string
  email: string
}

interface Activity {
  id: number
  type: string
  durationMinutes: number
  date: string
}

const users: User[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
]

const activities: Activity[] = [
  { id: 1, type: 'Running', durationMinutes: 30, date: '2026-08-01' },
  { id: 2, type: 'Strength', durationMinutes: 45, date: '2026-08-02' },
]

export const getUsers = (_req: Request, res: Response) => {
  res.json(users)
}

export const getActivities = (_req: Request, res: Response) => {
  res.json(activities)
}
