import { api } from '../../lib/axios'

class ProductsService {
  async listAll() {
    const response = await api.get('/products')

    return response.data
  }
}

export const productsService = new ProductsService()
