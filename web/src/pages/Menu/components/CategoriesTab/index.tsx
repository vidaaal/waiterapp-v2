import { Eye, Trash } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { DataTable, Td, Th } from '../../../../components/DataTable'
import { SectionHeader } from '../../../../components/SectionHeader'
import { useCategories } from '../../../../services/categories/hook'
import { TabContent } from '../../styles'

export function CategoriesTab() {
  const { data: categories } = useCategories()

  return (
    <TabContent value="categories">
      <header>
        <SectionHeader title="Categorias" quantity={categories?.length ?? 0} />

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
          {categories?.map((category) => {
            return (
              <tr key={category.id}>
                <Td>{category.icon}</Td>
                <Td>{category.name}</Td>
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
  )
}
