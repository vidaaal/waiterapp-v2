import { Request, Response } from 'express'
import { z } from 'zod'

import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { CreateOrderUseCase } from '@/use-cases/orders/create-order-use-case'

export class CreateOderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createOrderBodySchema = z.object({
      table: z.string(),
      products: z
        .array(
          z.object({
            productId: z.string().uuid(),
            quantity: z.number().min(1),
          }),
        )
        .min(1),
    })

    const { table, products } = createOrderBodySchema.parse(request.body)

    const createOrderUseCase = new CreateOrderUseCase(
      new PrismaOrdersRepository(),
    )

    const { order } = await createOrderUseCase.execute({
      table,
      products,
    })

    return response.status(201).json(order)
  }
}
