import { CreateCategoryController } from '@/http/controllers/categories/create-category-controller'
import { ListAllCategoriesController } from '@/http/controllers/categories/list-all-categories-controller'
import { Router } from 'express'

const categoriesRouter = Router()

const listAllCategories = new ListAllCategoriesController()
const createCategoryController = new CreateCategoryController()

categoriesRouter.get('/', listAllCategories.handle)
categoriesRouter.post('/', createCategoryController.handle)

export { categoriesRouter }
