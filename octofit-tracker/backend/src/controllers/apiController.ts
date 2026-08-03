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

interface Team {
  id: number
  name: string
  members: number
  description: string
}

interface LeaderboardEntry {
  id: number
  rank: number
  name: string
  score: number
}

interface Workout {
  id: number
  title: string
  type: string
  durationMinutes: number
  description: string
}

const users: User[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
]

const activities: Activity[] = [
  { id: 1, type: 'Running', durationMinutes: 30, date: '2026-08-01' },
  { id: 2, type: 'Strength', durationMinutes: 45, date: '2026-08-02' },
]

const teams: Team[] = [
  { id: 1, name: 'Team Octopus', members: 8, description: 'A fast-moving crew with big goals.' },
  { id: 2, name: 'Wave Runners', members: 12, description: 'Committed to daily progress and community.' },
]

const leaderboard: LeaderboardEntry[] = [
  { id: 1, rank: 1, name: 'Ada Lovelace', score: 1200 },
  { id: 2, rank: 2, name: 'Grace Hopper', score: 1150 },
]

const workouts: Workout[] = [
  { id: 1, title: 'Morning HIIT', type: 'Cardio', durationMinutes: 25, description: 'Short high-intensity interval session.' },
  { id: 2, title: 'Strength Builder', type: 'Strength', durationMinutes: 40, description: 'Full body strength training workout.' },
]

export const getUsers = (_req: Request, res: Response) => {
  res.json(users)
}

export const getActivities = (_req: Request, res: Response) => {
  res.json(activities)
}

export const getTeams = (_req: Request, res: Response) => {
  res.json(teams)
}

export const getLeaderboard = (_req: Request, res: Response) => {
  res.json(leaderboard)
}

export const getWorkouts = (_req: Request, res: Response) => {
  res.json(workouts)
}
