import { useState } from 'react'
import { Order } from '../../../../types/Order'
import { OrderModal } from '../OrderModal'

import { Board, OrdersContainer } from './styles'

interface OrdersBoardProps {
  icon: string
  title: string
  orders: Order[]
  // onCancelOrder: (orderId: string) => void
  // onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  function handleOpenOrderModal(order: Order) {
    setIsOrderModalOpen(true)
    setSelectedOrder(order)
  }

  return (
    <Board>
      <header>
        <figure>{icon}</figure>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button
                onClick={() => handleOpenOrderModal(order)}
                key={order.id}
              >
                <strong>Mesa {order.table}</strong>
                <span>
                  {order.products.length}
                  {order.products.length === 1 ? ' item' : ' itens'}
                </span>
              </button>
            )
          })}
        </OrdersContainer>
      )}

      <OrderModal
        order={selectedOrder}
        isOpen={isOrderModalOpen}
        onOpenChange={setIsOrderModalOpen}
      />
    </Board>
  )
}
