import { PrismaCategoriesRepository } from '@/repositories/prisma/prisma-categories-repository'
import { ListAllCategoriesUseCase } from '@/use-cases/categories/list-all-categories-use-case'
import { Request, Response } from 'express'

export class ListAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCategoriesUseCase = new ListAllCategoriesUseCase(
      new PrismaCategoriesRepository(),
    )

    const { categories } = await listAllCategoriesUseCase.execute()

    return response.json(categories)
  }
}
