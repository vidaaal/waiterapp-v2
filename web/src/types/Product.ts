import { Category } from './Category'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imagePath: string
  category_id: string
  category: Category
}
