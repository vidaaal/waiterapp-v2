import { CreateUserController } from '@/http/controllers/users/create-user-controller'
import { ListAllUsersController } from '@/http/controllers/users/list-all-users-controller'
import { Router } from 'express'

const usersRouter = Router()

const createUserController = new CreateUserController()
const listAllUsersController = new ListAllUsersController()

usersRouter.post('/', createUserController.handle)
usersRouter.get('/', listAllUsersController.handle)

export { usersRouter }
