import { ReactElement } from 'react'
import { StyledNavLink } from './styles'

interface NavLinkProps {
  icon: ReactElement
  name: string
  path: string
}

export function SidebarNavLink({ icon, name, path }: NavLinkProps) {
  return (
    <StyledNavLink to={path}>
      {icon}

      <span>{name}</span>
    </StyledNavLink>
  )
}
