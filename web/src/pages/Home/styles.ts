import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1216px;
  width: 100%;
`

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    svg {
      color: ${({ theme }) => theme.colors.brand.red};
    }
  }
`

export const Kanbam = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  gap: 32px;
  padding: 0 16px;
`
