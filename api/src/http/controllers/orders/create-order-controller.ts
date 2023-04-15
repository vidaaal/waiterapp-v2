import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { CreateOrderUseCase } from '@/use-cases/orders/create-order-use-case'
import { Request, Response } from 'express'
import { z } from 'zod'

export class CreateOderController {
  async handle(request: Request, response: Response) {
    const createOrderBodySchema = z.object({
      table: z.string(),
      products: z.array(
        z.object({
          productId: z.string(),
          quantity: z.number(),
        }),
      ),
    })

    const { table, products } = createOrderBodySchema.parse(request.body)

    const createOrderUseCase = new CreateOrderUseCase(
      new PrismaOrdersRepository(),
    )

    const order = await createOrderUseCase.execute({
      table,
      products,
    })

    return response.status(201).json(order)
  }
}
