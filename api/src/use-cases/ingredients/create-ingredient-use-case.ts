import { IngredientsRepository } from '@/repositories/ingredients-repository'
import { Ingredient } from '@prisma/client'

interface CreateIngredientUseCaseRequest {
  name: string
  icon: string
}

interface CreateIngredientUseCaseResponse {
  ingredient: Ingredient
}

export class CreateIngredientUseCase {
  constructor(private ingredientsRepository: IngredientsRepository) {}

  async execute(
    data: CreateIngredientUseCaseRequest,
  ): Promise<CreateIngredientUseCaseResponse> {
    const ingredient = await this.ingredientsRepository.create({
      icon: data.icon,
      name: data.name,
    })

    return { ingredient }
  }
}
