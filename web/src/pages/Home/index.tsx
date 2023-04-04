import { HouseSimple } from 'phosphor-react'
import { Header } from '../../components/Header'
import { OrdersBoard } from './components/OrdersBoard'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <Header
        icon={<HouseSimple />}
        title="Home"
        description="Acompanhe os pedidos dos clientes"
      />

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
