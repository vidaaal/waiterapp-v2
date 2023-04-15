import { PrismaOrdersRepository } from '@/repositories/prisma/prisma-orders-repository'
import { ListAllOrdersUseCase } from '@/use-cases/orders/list-all-orders-use-case'
import { Request, Response } from 'express'

export class ListAllOrdersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllOrdersUseCase = new ListAllOrdersUseCase(
      new PrismaOrdersRepository(),
    )

    const { orders } = await listAllOrdersUseCase.execute()

    return response.json(orders)
  }
}
