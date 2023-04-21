import { Scroll } from 'phosphor-react'
import { Header } from '../../components/Header'
import { useProducts } from '../../services/hooks/useProducts'

export function Menu() {
  const { data } = useProducts()

  return (
    <>
      <Header
        icon={<Scroll />}
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
      />
    </>
  )
}
