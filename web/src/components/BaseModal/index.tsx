import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Overlay } from '../Overlay'
import { Container } from './styles'

interface BaseModalPros {
  isOpen: boolean
  onOpenChange: (data: boolean) => void
  children: ReactNode
}

export function BaseModal({ isOpen, onOpenChange, children }: BaseModalPros) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {isOpen ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Overlay />
              </motion.div>
            </Dialog.Overlay>

            <Container>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Dialog.Content forceMount asChild>
                  {children}
                </Dialog.Content>
              </motion.div>
            </Container>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}
