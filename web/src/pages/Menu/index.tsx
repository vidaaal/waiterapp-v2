import { Eye, Scroll, Trash } from 'phosphor-react'
import { Button } from '../../components/Button'
import { DataTable, Td, Th } from '../../components/DataTable'
import { Header } from '../../components/Header'
import { SectionHeader } from '../../components/SectionHeader'
import { useProducts } from '../../services/products/hook'
import { formatCurrency } from '../../utils/formatCurrency'
import { Container, TabContent, TabsHeader, TabTrigger } from './styles'

export function Menu() {
  const { data: products } = useProducts()

  return (
    <>
      <Header
        icon={<Scroll />}
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
      />

      <Container defaultValue="products">
        <TabsHeader>
          <TabTrigger value="products">Produtos</TabTrigger>
          <TabTrigger value="categories">Categorias</TabTrigger>
        </TabsHeader>

        <TabContent value="products">
          <header>
            <SectionHeader title="Produtos" quantity={3} />

            <Button variant="secondary">Novo produto</Button>
          </header>

          <DataTable>
            <thead>
              <tr>
                <Th width={120}>Imagem</Th>
                <Th>Nome</Th>
                <Th width={300}>Categorria</Th>
                <Th width={160}>Preço</Th>
                <Th width={80}>Ações</Th>
                <Th width={80}></Th>
              </tr>
            </thead>

            <tbody>
              {products?.map((product) => {
                return (
                  <tr key={product.id}>
                    <Td>
                      <img src={product.imagePath} alt={product.name} />
                    </Td>
                    <Td>{product.name}</Td>
                    <Td>{product.category_id}</Td>
                    <Td>{formatCurrency(product.price)}</Td>
                    <Td>
                      <button>
                        <Eye size={24} />
                      </button>
                    </Td>

                    <Td>
                      <button className="danger">
                        <Trash size={24} />
                      </button>
                    </Td>
                  </tr>
                )
              })}
            </tbody>
          </DataTable>
        </TabContent>

        <TabContent value="categories">
          <header>
            <SectionHeader title="Categorias" quantity={3} />

            <Button variant="secondary">Nova categoria</Button>
          </header>

          <DataTable>
            <thead>
              <tr>
                <Th width={120}>Emoji</Th>
                <Th>Nome</Th>
                <Th width={80}>Ações</Th>
                <Th width={80}></Th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <Td>123</Td>
                <Td>Frango com Catupiry, Quatro Queijos</Td>
                <Td>
                  <button>
                    <Eye size={24} />
                  </button>
                </Td>

                <Td>
                  <button className="danger">
                    <Trash size={24} />
                  </button>
                </Td>
              </tr>
            </tbody>
          </DataTable>
        </TabContent>
      </Container>
    </>
  )
}
