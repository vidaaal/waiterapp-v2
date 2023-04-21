import { storageTypes } from '@/config/multer'
import { CreateProductController } from '@/http/controllers/products/create-product-controller'
import { ListAllProductsController } from '@/http/controllers/products/list-all-products-controller'
import { Router } from 'express'
import multer from 'multer'

const productsRouter = Router()

const listAllProductsController = new ListAllProductsController()
const createProductController = new CreateProductController()

productsRouter.get('/', listAllProductsController.handle)
productsRouter.post(
  '/',
  multer(storageTypes.s3).single('image'),
  createProductController.handle,
)

export { productsRouter }
