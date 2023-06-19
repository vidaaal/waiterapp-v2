import { Scroll } from 'phosphor-react'
import { Header } from '../../components/Header'
import { CategoriesTab } from './components/CategoriesTab'
import { ProductsTab } from './components/ProductsTab'
import { Container, TabsHeader, TabTrigger } from './styles'

export function Menu() {
  return (
    <>
      <Header
        icon={<Scroll />}
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
      />

      <Container defaultValue="categories">
        <TabsHeader>
          <TabTrigger value="products">Produtos</TabTrigger>
          <TabTrigger value="categories">Categorias</TabTrigger>
        </TabsHeader>

        <ProductsTab />
        <CategoriesTab />
      </Container>
    </>
  )
}
