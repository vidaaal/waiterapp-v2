import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { BaseModal } from '../../../../components/BaseModal'
import { Button } from '../../../../components/Button'

import { Order } from '../../../../types/Order'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { Actions, Content, OrderDetails } from './styles'

interface OrderModalProps {
  order: Order | null
  isOpen: boolean
  onOpenChange: (data: boolean) => void
}

export function OrderModal({ order, isOpen, onOpenChange }: OrderModalProps) {
  if (!order) {
    return null
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return (total += product.price * quantity)
  }, 0)

  return (
    <BaseModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Content>
        <header>
          <strong>Mesa 2</strong>

          <Dialog.Close>
            <button type="button">
              <X size={24} />
            </button>
          </Dialog.Close>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ id, product, quantity }) => (
              <div className="item" key={id}>
                <img
                  src={product.imagePath}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <Button type="button" variant="secondary">
            Cancelar Pedido
          </Button>

          {order.status !== 'DONE' && (
            <Button type="button" className="primary">
              {order.status === 'WAITING' && 'Iniciar Produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
            </Button>
          )}
        </Actions>
      </Content>
    </BaseModal>
  )
}
