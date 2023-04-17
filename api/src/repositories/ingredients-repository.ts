import { CreateIngredientDTO } from '@/dtos/create-ingredient-dto'
import { Ingredient } from '@prisma/client'

export interface IngredientsRepository {
  create: (data: CreateIngredientDTO) => Promise<Ingredient>
}
