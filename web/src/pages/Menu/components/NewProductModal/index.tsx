import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { BaseModal } from '../../../../components/BaseModal'
import { Content } from './styles'

interface NewProductModalProps {
  isOpen: boolean
  onOpenChange: (data: boolean) => void
}

export function NewProductModal({
  isOpen,
  onOpenChange,
}: NewProductModalProps) {
  return (
    <BaseModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Content>
        <header>
          <h2>Novo Produto</h2>

          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>
        </header>
      </Content>
    </BaseModal>
  )
}
