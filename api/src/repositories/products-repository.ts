import { CreateProductDTO } from '@/dtos/create-product-dto'
import { Product } from '@prisma/client'

export interface ProductsRepository {
  create: (data: CreateProductDTO) => Promise<Product>
  findMany: () => Promise<Product[]>
}
