import { CreateProductDTO } from '@/dtos/create-product-dto'
import { prisma } from '@/lib/prisma'
import { ProductsRepository } from '../products-repository'

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: CreateProductDTO) {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        imagePath: data.imagePath,
        category: {
          connect: {
            id: data.category,
          },
        },
        ingredients: {
          connect: data.ingredients.map((ingredientId) => ({
            id: ingredientId,
          })),
        },
      },

      include: {
        category: true,
        ingredients: true,
      },
    })

    return product
  }

  async findMany() {
    const products = await prisma.product.findMany({
      include: {
        ingredients: true,
        category: true,
      },
    })

    return products
  }
}
