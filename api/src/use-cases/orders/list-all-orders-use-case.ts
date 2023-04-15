import { OrdersRepository } from '@/repositories/orders-repository'
import { Order } from '@prisma/client'

interface ListAllOrdersUseCaseResponse {
  orders: Order[]
}

export class ListAllOrdersUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(): Promise<ListAllOrdersUseCaseResponse> {
    const orders = await this.ordersRepository.findMany()

    return { orders }
  }
}
