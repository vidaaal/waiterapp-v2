import { Router } from 'express'

import { categoriesRouter } from './categories'
import { ingredientsRouter } from './ingredients'
import { ordersRouter } from './orders'
import { usersRouter } from './users'

const router = Router()

router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/categories', categoriesRouter)
router.use('/ingredients', ingredientsRouter)

export { router }
