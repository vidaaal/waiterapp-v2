import { Board, OrdersContainer } from './styles'

interface OrdersBoardProps {
  icon: string
  title: string
  // orders: Order[]
  // onCancelOrder: (orderId: string) => void
  // onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <figure>{icon}</figure>
        <strong>{title}</strong>
        <span>2</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Mesa 12</strong>
          <span>13 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  )
}
