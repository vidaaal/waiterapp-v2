import { ArrowsCounterClockwise, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { BaseModal } from '../../../../components/BaseModal'
import { Content } from './styles'
import { Button } from '../../../../components/Button'

interface ResetDayModalProps {
  isOpen: boolean
  onOpenChange: (data: boolean) => void
}

export function ResetDayModal({ isOpen, onOpenChange }: ResetDayModalProps) {
  return (
    <BaseModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Content>
        <header>
          <div>
            <ArrowsCounterClockwise size={24} />
            <h2>Reiniciar o dia</h2>
          </div>

          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>
        </header>

        <div className="info">
          <p>
            Ao reiniciar o dia, todos os pedidos
            <br /> serão arquivados no status atual.
          </p>

          <p>Deseja reiniciar o dia?</p>
        </div>

        <div className="actions">
          <Dialog.Close asChild>
            <Button variant="secondary">Não, continuar pedidos</Button>
          </Dialog.Close>

          <Button>Sim, reiniciar o dia</Button>
        </div>
      </Content>
    </BaseModal>
  )
}
