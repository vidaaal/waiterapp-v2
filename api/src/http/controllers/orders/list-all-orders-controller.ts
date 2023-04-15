import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { ListAllOrdersUseCase } from '@/use-cases/orders/list-all-orders-use-case'
import { Request, Response } from 'express'

export class ListAllOrdersController {
  async handle(request: Request, response: Response) {
    const createOrderUseCase = new ListAllOrdersUseCase(
      new PrismaOrdersRepository(),
    )

    const orders = await createOrderUseCase.execute()

    return response.json(orders)
  }
}
