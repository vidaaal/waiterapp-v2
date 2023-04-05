import { ArrowsCounterClockwise, HouseSimple } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { OrdersBoard } from './components/OrdersBoard'
import { Container, HomeHeader, Kanbam } from './styles'

export function Home() {
  return (
    <Container>
      <HomeHeader>
        <Header
          icon={<HouseSimple />}
          title="Home"
          description="Acompanhe os pedidos dos clientes"
        />

        <Button variant="secondary">
          <ArrowsCounterClockwise size={24} />
          Reiniciar o dia
        </Button>
      </HomeHeader>

      <Kanbam>
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
      </Kanbam>
    </Container>
  )
}
