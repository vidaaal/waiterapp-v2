import { OrdersRepository } from '@/repositories/orders-repository'
import { Order } from '@prisma/client'

interface CreateOrderUseCaseRequest {
  table: string
  products: {
    productId: string
    quantity: number
  }[]
}

interface CreateOrderUseCaseResponse {
  order: Order
}

export class CreateOrderUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute(
    data: CreateOrderUseCaseRequest,
  ): Promise<CreateOrderUseCaseResponse> {
    const order = await this.ordersRepository.create({
      table: data.table,
      products: data.products,
    })

    return { order }
  }
}
