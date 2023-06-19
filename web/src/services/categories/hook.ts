import { useQuery } from '@tanstack/react-query'
import { Category } from '../../types/Category'
import { categoriesService } from './service'

export function useCategories() {
  return useQuery<Category[]>(['categories'], categoriesService.listAll, {
    initialData: [],
  })
}
