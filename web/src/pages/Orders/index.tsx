import { Files } from 'phosphor-react'
import { Header } from '../../components/Header'
import { SectionHeader } from '../../components/SectionHeader'
import { Container } from './styles'

export function Orders() {
  return (
    <>
      <Header
        icon={<Files />}
        title="Histórico"
        description="Visualize pedidos anteriores"
      />

      <Container>
        <SectionHeader title="Pedidos" quantity={3} />
      </Container>
    </>
  )
}
