import { CreateUserController } from '@/http/controllers/users/create-user-controller'
import { Router } from 'express'

const usersRouter = Router()

const createUserController = new CreateUserController()

usersRouter.post('/', createUserController.handle)

export { usersRouter }
