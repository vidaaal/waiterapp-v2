import { Container } from './styles'

interface SectionHeaderProps {
  title: string
  quantity: number
}

export function SectionHeader({ title, quantity }: SectionHeaderProps) {
  return (
    <Container>
      <h3>{title}</h3>

      <span>{quantity}</span>
    </Container>
  )
}
