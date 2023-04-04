import { ReactElement } from 'react'
import { Description, Title } from './styles'

interface HeaderProps {
  icon: ReactElement
  title: string
  description: string
}

export function Header({ title, description, icon }: HeaderProps) {
  return (
    <>
      <Title>
        {icon}

        <h1>{title}</h1>
      </Title>

      <Description>
        <p>{description}</p>
      </Description>
    </>
  )
}
