import { ReactNode } from 'react'
import { Table, StyledTd, StyledTh } from './styles'

interface DataTableProps {
  children: ReactNode
}

export function DataTable({ children }: DataTableProps) {
  return <Table>{children}</Table>
}

interface TdProps {
  width?: number
  children: ReactNode
}

export function Td({ width, children }: TdProps) {
  return <StyledTd width={width}>{children}</StyledTd>
}

interface ThProps {
  width?: number
  children?: ReactNode
}

export function Th({ children, width }: ThProps) {
  return <StyledTh width={width}>{children}</StyledTh>
}
