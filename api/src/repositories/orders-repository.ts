import { CreateOrderDTO } from '@/dtos/create-order-dto'
import { Order } from '@prisma/client'

export interface OrdersRepository {
  create: (data: CreateOrderDTO) => Promise<Order>
  findMany: () => Promise<Order[]>
}
