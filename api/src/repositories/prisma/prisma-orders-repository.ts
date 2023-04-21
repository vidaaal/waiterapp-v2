import { CreateOrderDTO } from '@/dtos/create-order-dto'
import { prisma } from '@/lib/prisma'
import { OrdersRepository } from '../orders-repository'

export class PrismaOrdersRepository implements OrdersRepository {
  async create(data: CreateOrderDTO) {
    const order = prisma.order.create({
      data: {
        table: data.table,
        products: {
          createMany: {
            data: data.products.map((product) => ({
              product_id: product.productId,
              quantity: product.quantity,
            })),
          },
        },
      },

      include: {
        products: true,
      },
    })

    return order
  }

  async findMany() {
    const orders = prisma.order.findMany({
      include: {
        products: {
          select: {
            quantity: true,
            product: true,
          },
        },
      },
    })

    return orders
  }
}
