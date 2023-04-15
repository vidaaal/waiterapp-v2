export interface CreateOrderDTO {
  table: string
  status?: string
  archived?: string

  products: {
    productId: string
    quantity: number
  }[]
}
