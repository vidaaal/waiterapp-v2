import { ProductsRepository } from '@/repositories/products-repository'
import { Product } from '@prisma/client'

interface CreateProductUseCaseRequest {
  name: string
  description: string
  price: number
  ingredients: string[]
  category: string
  // eslint-disable-next-line no-undef
  file: Express.MulterS3.File
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    description,
    price,
    ingredients,
    category,
    file,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    console.log(file)

    const product = await this.productsRepository.create({
      name,
      description,
      price,
      imagePath: file.location,
      ingredients,
      category,
    })

    return { product }
  }
}
