import { HouseSimple } from 'phosphor-react'
import { Header } from '../../components/Header'
import { OrdersBoard } from './components/OrdersBoard'
import { Container, HomeHeader } from './styles'

export function Home() {
  return (
    <>
      <HomeHeader>
        <Header
          icon={<HouseSimple />}
          title="Home"
          description="Acompanhe os pedidos dos clientes"
        />
      </HomeHeader>

      <Container>
        <OrdersBoard
          icon="🕑"
          title="Fila de espera"
          // orders={waitingOrders}
          // onCancelOrder={handleCancelOrder}
          // onChangeOrderStatus={handleOrderStatusChange}
        />

        <OrdersBoard
          icon="👩‍🍳"
          title="Fila de espera"
          // orders={inProductionOrders}
          // onCancelOrder={handleCancelOrder}
          // onChangeOrderStatus={handleOrderStatusChange}
        />

        <OrdersBoard
          icon="✅"
          title="Pronto!"
          // orders={doneOrders}
          // onCancelOrder={handleCancelOrder}
          // onChangeOrderStatus={handleOrderStatusChange}
        />
      </Container>
    </>
  )
}
