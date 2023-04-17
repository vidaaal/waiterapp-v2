import { CreateCategoryDTO } from '@/dtos/create-category-dto'
import { prisma } from '@/lib/prisma'
import { CategoriesRepository } from '../categories-repository'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async create(data: CreateCategoryDTO) {
    const category = await prisma.category.create({
      data,
    })

    return category
  }

  async findMany() {
    const categories = await prisma.category.findMany()

    return categories
  }
}
