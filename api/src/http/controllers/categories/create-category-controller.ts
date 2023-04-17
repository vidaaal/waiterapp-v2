import { PrismaCategoriesRepository } from '@/repositories/prisma/prisma-categories-repository'
import { CreateCategoryUseCase } from '@/use-cases/categories/create-category-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryBodySchema = z.object({
      name: z.string(),
      icon: z.string(),
    })

    const { name, icon } = createCategoryBodySchema.parse(request.body)

    const createCategoryCase = new CreateCategoryUseCase(
      new PrismaCategoriesRepository(),
    )

    const { category } = await createCategoryCase.execute({
      name,
      icon,
    })

    return response.status(201).json(category)
  }
}
