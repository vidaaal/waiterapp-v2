import { Request, Response } from 'express'
import { z } from 'zod'

import { CreateIngredientUseCase } from '@/use-cases/ingredients/create-ingredient-use-case'
import { PrismaIngredientsRepository } from '@/repositories/prisma/prisma-ingredients-repository'

export class CreateIngredientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createIngredientBodySchema = z.object({
      name: z.string().min(1),
      icon: z.string().min(1),
    })

    const { name, icon } = createIngredientBodySchema.parse(request.body)

    const createIngredientUseCase = new CreateIngredientUseCase(
      new PrismaIngredientsRepository(),
    )

    const { ingredient } = await createIngredientUseCase.execute({
      name,
      icon,
    })

    return response.status(201).json(ingredient)
  }
}
