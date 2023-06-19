import { Eye, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { DataTable, Td, Th } from '../../../../components/DataTable'
import { SectionHeader } from '../../../../components/SectionHeader'
import { useProducts } from '../../../../services/products/hook'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { TabContent } from '../../styles'
import { NewProductModal } from '../NewProductModal'

export function ProductsTab() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)

  const { data: products } = useProducts()

  return (
    <>
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onOpenChange={setIsNewProductModalOpen}
      />

      <TabContent value="products">
        <header>
          <SectionHeader title="Produtos" quantity={products?.length ?? 0} />

          <Button
            variant="secondary"
            onClick={() => setIsNewProductModalOpen(true)}
          >
            Novo produto
          </Button>
        </header>

        <DataTable>
          <thead>
            <tr>
              <Th width={120}>Imagem</Th>
              <Th>Nome</Th>
              <Th width={300}>Categoria</Th>
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
                  <Td>
                    {product.category.icon} {product.category.name}
                  </Td>
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
    </>
  )
}
