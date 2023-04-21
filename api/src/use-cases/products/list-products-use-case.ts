import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface ListAllProductsUseCaseResponse {
  products: Product[]
}

export class ListAllProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<ListAllProductsUseCaseResponse> {
    const products = await this.productsRepository.findMany()

    return { products }
  }
}
