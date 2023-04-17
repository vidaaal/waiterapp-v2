import { CreateCategoryDTO } from '@/dtos/create-category-dto'
import { Category } from '@prisma/client'

export interface CategoriesRepository {
  create: (data: CreateCategoryDTO) => Promise<Category>
  findMany: () => Promise<Category[]>
}
