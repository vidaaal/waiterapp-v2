import { OrdersRepository } from '@/repositories/orders-repository'

export class ListAllOrdersUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute() {
    const orders = await this.ordersRepository.findMany()

    return orders
  }
}
