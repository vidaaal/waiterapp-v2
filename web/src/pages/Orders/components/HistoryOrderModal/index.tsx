import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { BaseModal } from '../../../../components/BaseModal'
import { Button } from '../../../../components/Button'
import { formatCurrency } from '../../../../utils/formatCurrency'
import {
  Actions,
  DateContainer,
  Header,
  ModalBody,
  OrderDetails,
} from './styles'

interface HistoryOrderModalProps {
  isOpen: boolean
  onOpenChange: (data: boolean) => void
}

export function HistoryOrderModal({
  isOpen,
  onOpenChange,
}: HistoryOrderModalProps) {
  return (
    <BaseModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalBody>
        <Header>
          <h2>Mesa 2</h2>

          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>
        </Header>

        <DateContainer>
          <p>Data do pedido</p>

          <strong>07/10/2023</strong>
        </DateContainer>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s"
                alt="pizza"
                width="56"
                height="28.51"
              />

              <span className="quantity">3x</span>

              <div className="product-details">
                <strong>Pizza de Catupiry</strong>
                <span>{formatCurrency(25)}</span>
              </div>
            </div>
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(75)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <Button variant="secondary">Excluir registro</Button>
        </Actions>
      </ModalBody>
    </BaseModal>
  )
}
