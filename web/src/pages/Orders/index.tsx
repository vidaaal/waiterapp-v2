import { Eye, Files, Funnel, Trash } from 'phosphor-react'
import { useState } from 'react'
import { DataTable, Td, Th } from '../../components/DataTable'
import { Header } from '../../components/Header'
import { SectionHeader } from '../../components/SectionHeader'
import { HistoryOrderModal } from './components/HistoryOrderModal'
import { Container, ContentHeader } from './styles'

export function Orders() {
  const [isHistoryOrderModalOpen, setIsHistoryOrderModalOpen] = useState(false)

  return (
    <>
      <Header
        icon={<Files />}
        title="Histórico"
        description="Visualize pedidos anteriores"
      />

      <Container>
        <ContentHeader>
          <SectionHeader title="Pedidos" quantity={3} />

          <p>Mostrando pedidos de 18 a 18 de dez</p>
        </ContentHeader>

        <DataTable>
          <thead>
            <tr>
              <Th width={80}>Mesa</Th>
              <Th width={80}>
                <button>
                  <span>Data</span>

                  <Funnel size={20} />
                </button>
              </Th>
              <Th>Nome</Th>
              <Th width={240}>Categoria</Th>
              <Th width={240}>Total</Th>
              <Th width={80}>Ações</Th>
              <Th width={80}></Th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Td>123</Td>
              <Td>07/12/2022</Td>
              <Td>Frango com Catupiry, Quatro Queijos</Td>
              <Td>Pizza</Td>
              <Td>R$ 40,00</Td>
              <Td>
                <button onClick={() => setIsHistoryOrderModalOpen(true)}>
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
      </Container>

      <HistoryOrderModal
        isOpen={isHistoryOrderModalOpen}
        onOpenChange={setIsHistoryOrderModalOpen}
      />
    </>
  )
}
