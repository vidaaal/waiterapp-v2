import { useQuery } from '@tanstack/react-query'
import { Product } from '../../types/Product'
import { productsService } from './service'

export function useProducts() {
  return useQuery<Product[]>(['products'], productsService.listAll)
}
