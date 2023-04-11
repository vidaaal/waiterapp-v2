import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 48px;
  max-width: 1216px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`
