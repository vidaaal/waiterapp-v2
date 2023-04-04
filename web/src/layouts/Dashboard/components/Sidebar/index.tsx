import miniLogo from '../../../../assets/images/mini-logo.svg'
import { SidebarNavLink } from '../NavLink'
import { Files, HouseSimple, Power, Scroll, User, Users } from 'phosphor-react'
import { BottomActions, Container, Paths, SignOut } from './styles'

export function SideBar() {
  return (
    <Container>
      <img src={miniLogo} alt="WA" />

      <Paths>
        <SidebarNavLink icon={<HouseSimple />} name="Home" path="/home" />
        <SidebarNavLink icon={<Files />} name="Histórico" path="/orders" />
        <SidebarNavLink icon={<Scroll />} name="Cardápio" path="/menu" />
        <SidebarNavLink icon={<Users />} name="Usuários" path="/users" />
      </Paths>

      <BottomActions>
        <SidebarNavLink icon={<User />} name="Meu perfil" path="/me" />

        <SignOut>
          <Power />

          <span>Sair</span>
        </SignOut>
      </BottomActions>
    </Container>
  )
}
