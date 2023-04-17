import { CategoriesRepository } from '@/repositories/categories-repository'
import { Category } from '@prisma/client'

interface CreateCategoryUseCaseRequest {
  name: string
  icon: string
}

interface CreateCategoryUseCaseResponse {
  category: Category
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(
    data: CreateCategoryUseCaseRequest,
  ): Promise<CreateCategoryUseCaseResponse> {
    const category = await this.categoriesRepository.create({
      icon: data.icon,
      name: data.name,
    })

    return { category }
  }
}
