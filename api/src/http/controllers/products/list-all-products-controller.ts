import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { ListAllProductsUseCase } from '@/use-cases/products/list-products-use-case'
import { Request, Response } from 'express'

export class ListAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllProductsUseCase = new ListAllProductsUseCase(
      new PrismaProductsRepository(),
    )

    const { products } = await listAllProductsUseCase.execute()

    return response.json(products)
  }
}
