import { Router } from 'express'

import { categoriesRouter } from './categories'
import { ingredientsRouter } from './ingredients'
import { ordersRouter } from './orders'
import { productsRouter } from './products'
import { usersRouter } from './users'

const router = Router()

router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/categories', categoriesRouter)
router.use('/ingredients', ingredientsRouter)
router.use('/products', productsRouter)

export { router }
