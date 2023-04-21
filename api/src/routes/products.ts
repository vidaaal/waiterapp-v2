import { storageTypes } from '@/config/multer'
import { CreateProductController } from '@/http/controllers/products/create-product-controller'
import { Router } from 'express'
import multer from 'multer'

const productsRouter = Router()

const createProductController = new CreateProductController()

productsRouter.post(
  '/',
  multer(storageTypes.s3).single('image'),
  createProductController.handle,
)

export { productsRouter }
