import { CreateOrderDTO } from '@/dtos/create-order-dto'
import { OrdersRepository } from '@/repositories/orders-repository'

export class CreateOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(data: CreateOrderDTO) {
    const order = await this.ordersRepository.create(data)

    return order
  }
}
