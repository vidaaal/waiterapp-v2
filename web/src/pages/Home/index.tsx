import { ArrowsCounterClockwise, HouseSimple } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Order } from '../../types/Order'
import { OrdersBoard } from './components/OrdersBoard'
import { Container, HomeHeader, Kanbam } from './styles'

const ordersMock: Order[] = [
  {
    id: '121',
    table: '23',
    status: 'WAITING',
    products: [
      {
        id: '1232',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
      {
        id: '1232',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
      {
        id: '1232',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
      {
        id: '1232',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
    ],
  },
  {
    id: '12323',
    table: '23',
    status: 'IN_PRODUCTION',
    products: [
      {
        id: '123231',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
    ],
  },
  {
    id: '231sda23',
    table: '23',
    status: 'DONE',
    products: [
      {
        id: '123szd23',
        quantity: 12,
        product: {
          name: 'Pizza',
          imagePath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iEgVNfoTWeOn9CvaErWY2vF__dxuQ_YpCQdA7Z7M&s',
          price: 25,
        },
      },
    ],
  },
]

export function Home() {
  const waitingOrders = ordersMock.filter((order) => order.status === 'WAITING')
  const inProductionOrders = ordersMock.filter(
    (order) => order.status === 'IN_PRODUCTION',
  )
  const doneOrders = ordersMock.filter((order) => order.status === 'DONE')

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
        <OrdersBoard icon="🕑" title="Fila de espera" orders={waitingOrders} />

        <OrdersBoard
          icon="👩‍🍳"
          title="Fila de espera"
          orders={inProductionOrders}
        />

        <OrdersBoard icon="✅" title="Pronto!" orders={doneOrders} />
      </Kanbam>
    </Container>
  )
}
