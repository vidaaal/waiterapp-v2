import { HouseSimple } from 'phosphor-react'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <>
      <Header
        icon={<HouseSimple />}
        title="Home"
        description="Acompanhe os pedidos dos clientes"
      />

      <p>home</p>
    </>
  )
}
