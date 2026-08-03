import { Router } from 'express'
import { getActivities, getUsers } from '../controllers/apiController'

const router = Router()

router.get('/api/users', getUsers)
router.get('/api/activities', getActivities)

export default router
