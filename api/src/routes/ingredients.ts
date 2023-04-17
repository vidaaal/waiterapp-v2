import { CreateIngredientController } from '@/http/controllers/ingredients/create-ingredient-controller'
import { Router } from 'express'

const ingredientsRouter = Router()

const createIngredientController = new CreateIngredientController()

ingredientsRouter.post('/', createIngredientController.handle)

export { ingredientsRouter }
