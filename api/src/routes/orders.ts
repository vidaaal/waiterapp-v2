import { CreateOderController } from '@/http/controllers/orders/create-order-controller'
import { ListAllOrdersController } from '@/http/controllers/orders/list-all-orders-controller'
import { Router } from 'express'

const ordersRouter = Router()

const listAllOrdersController = new ListAllOrdersController()
const createOrderController = new CreateOderController()

ordersRouter.get('/', listAllOrdersController.handle)
ordersRouter.post('/', createOrderController.handle)

export { ordersRouter }
