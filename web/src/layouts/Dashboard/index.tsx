import { Outlet } from 'react-router-dom'
import { SideBar } from './components/Sidebar'
import { Container, Content } from './styles'

export function Dashboard() {
  return (
    <Container>
      <SideBar />

      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
