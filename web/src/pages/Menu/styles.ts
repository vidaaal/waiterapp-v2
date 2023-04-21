import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled(Tabs.Root)`
  max-width: 1216px;
  width: 100%;
`

export const TabsHeader = styled(Tabs.List)`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.gray[200]}66`};
  margin-top: 72px;
`

export const TabTrigger = styled(Tabs.Trigger)`
  padding: 16px 0;
  width: 202px;
  height: 53px;
  border: 0;
  background: ${({ theme }) => theme.colors.gray[100]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: 0.2s all;

  &[data-state='active'] {
    background: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.brand.red};
  }

  &[data-state='inactive']:hover {
    background: ${({ theme }) => `${theme.colors.gray[200]}33`};
  }
`

export const TabContent = styled(Tabs.Content)`
  margin-top: 32px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`
