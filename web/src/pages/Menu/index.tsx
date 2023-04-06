import { Scroll } from 'phosphor-react'
import { Header } from '../../components/Header'

export function Menu() {
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
