import { Router } from 'express'
import { ordersRouter } from './orders'
import { usersRouter } from './users'

const router = Router()

router.use('/orders', ordersRouter)
router.use('/users', usersRouter)

export { router }
