import miniLogo from '../../../../assets/images/mini-logo.svg'
import { SidebarNavLink } from '../NavLink'
import { Files, HouseSimple, Power, Scroll, User, Users } from 'phosphor-react'
import { BottomActions, Container, Paths, SignOut } from './styles'

export function SideBar() {
  return (
    <Container>
      <img src={miniLogo} alt="WA" />

      <Paths>
        <SidebarNavLink
          icon={<HouseSimple size={24} />}
          name="Home"
          path="/home"
        />

        <SidebarNavLink
          icon={<Files size={24} />}
          name="Histórico"
          path="/orders"
        />

        <SidebarNavLink
          icon={<Scroll size={24} />}
          name="Cardápio"
          path="/menu"
        />

        <SidebarNavLink
          icon={<Users size={24} />}
          name="Usuários"
          path="/users"
        />
      </Paths>

      <BottomActions>
        <SidebarNavLink
          icon={<User size={24} />}
          name="Meu perfil"
          path="/me"
        />

        <SignOut>
          <Power size={24} />

          <span>Sair</span>
        </SignOut>
      </BottomActions>
    </Container>
  )
}
