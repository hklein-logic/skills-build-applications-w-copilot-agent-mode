import { Router } from 'express'
import {
  getActivities,
  getLeaderboard,
  getTeams,
  getUsers,
  getWorkouts,
} from '../controllers/apiController'

const router = Router()

router.get('/api/users', getUsers)
router.get('/api/activities', getActivities)
router.get('/api/teams', getTeams)
router.get('/api/leaderboard', getLeaderboard)
router.get('/api/workouts', getWorkouts)

export default router
