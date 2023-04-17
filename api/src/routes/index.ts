import { Router } from 'express'
import { categoriesRouter } from './categories'
import { ordersRouter } from './orders'
import { usersRouter } from './users'

const router = Router()

router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/categories', categoriesRouter)

export { router }
