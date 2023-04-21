import { Request, Response } from 'express'
import { z } from 'zod'

import { PrismaProductsRepository } from '@/repositories/prisma/prisma-products-repository'
import { CreateProductUseCase } from '@/use-cases/products/create-product-use-case'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const createProductBodySchema = z.object({
      name: z.string().min(3),
      description: z.string().min(1),
      price: z.string().min(0),
      category: z.string().uuid(),
      ingredients: z.string(),
    })

    const createProductFileSchema = z
      .any()
      .refine((file) => !!file, { message: 'Missing product image' })

    const { name, description, price, category, ingredients } =
      createProductBodySchema.parse(request.body)

    const file = createProductFileSchema.parse(request.file)

    const createProductUseCase = new CreateProductUseCase(
      new PrismaProductsRepository(),
    )

    const { product } = await createProductUseCase.execute({
      name,
      description,
      category,
      ingredients: JSON.parse(ingredients),
      price: Number(price),
      file,
    })

    return response.status(201).json(product)
  }
}
