import { CategoriesRepository } from '@/repositories/categories-repository'
import { Category } from '@prisma/client'

interface ListAllCategoriesUseCaseResponse {
  categories: Category[]
}

export class ListAllCategoriesUseCase {
  constructor(private categoriesRespository: CategoriesRepository) {}

  async execute(): Promise<ListAllCategoriesUseCaseResponse> {
    const categories = await this.categoriesRespository.findMany()

    return { categories }
  }
}
