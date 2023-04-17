import { CreateIngredientDTO } from '@/dtos/create-ingredient-dto'
import { prisma } from '@/lib/prisma'
import { IngredientsRepository } from '../ingredients-repository'

export class PrismaIngredientsRepository implements IngredientsRepository {
  async create(data: CreateIngredientDTO) {
    const ingredient = await prisma.ingredient.create({
      data,
    })

    return ingredient
  }
}
