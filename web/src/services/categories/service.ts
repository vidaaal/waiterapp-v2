import { api } from '../../lib/axios'

class CategoriesService {
  async listAll() {
    const response = await api.get('/categories')

    return response.data
  }
}

export const categoriesService = new CategoriesService()
