import { useQuery } from '@tanstack/react-query'
import { productsService } from '../productsService'

export function useProducts() {
  return useQuery(['products'], productsService.listProducts)
}
